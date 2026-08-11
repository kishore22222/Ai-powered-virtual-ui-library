import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  FiZap,
  FiSave,
  FiEye,
  FiCode,
  FiUploadCloud,
  FiArrowRight,
  FiLoader,
  FiPackage,
  FiAlertCircle,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiArrowLeft,
  FiRefreshCw,
  FiPlus,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbX } from "react-icons/tb";
import axios from "axios";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import { LiveComponentPreview } from "../components/LiveComponentPreview";

const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl"
      style={{
        background:
          type === "success"
            ? "#0d9f6e"
            : type === "error"
              ? "#e02424"
              : "#1c1c2e",
        color: "#fff",
        minWidth: "220px",
      }}
    >
      {type === "success" ? (
        <FiCheckCircle size={18} />
      ) : (
        <FiAlertCircle size={18} />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto text-white/60 hover:text-white text-xs"
      >
        <TbX size={18} />
      </button>
    </motion.div>
  );
};

const Generate = () => {
  const { userData } = useSelector((state) => state.user);
  const userRole = userData?.role;
  const aiCredits = userData?.aiCredits;
  const lowCredits = userRole === "user" && aiCredits < 50;
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [savedComponentId, setSavedComponentId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const dispatch = useDispatch();

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleGenerate = async () => {
    if (lowCredits) {
      showToast("Not enough credits to generate.", "error");
      return;
    }
    if (!prompt.trim()) {
      showToast("Please enter a prompt first.", "error");
      return;
    }
    setGenerated(null);
    setGenerating(true);
    try {
      const { data } = await axios.post(
        ServerUrl + "/api/component/generate",
        { prompt },
        { withCredentials: true },
      );
      setGenerated(data.parsed);
      dispatch(setUserData({ ...userData, aiCredits: data.remainingCredits }));
      setGenerating(false);
      setActiveTab("preview");
      showToast("AI Component Generated", "success");
    } catch (error) {
      showToast("Generate Error", "error");
      setGenerating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleGenerate();
    }
  };

  const handleSave = async () => {
    if (!generated) return;
    setSaving(true);
    try {
      const res = await axios.post(
        ServerUrl + "/api/component/save",
        {
          name: generated.name,
          code: generated.code,
          props: generated.props,
        },
        { withCredentials: true },
      );
      setSavedComponentId(res.data._id);
      showToast("Component Saved Successfully!", "success");
      setSaving(false);
    } catch (error) {
      console.log(error);
      showToast("Component Save Failed!", "error");
      setSaving(false);
    }
  };

  const handlePublished = async () => {
    if (!savedComponentId) return;
    setPublishing(true);
    try {
      await axios.post(
        ServerUrl + "/api/component/publish",
        { componentId: savedComponentId },
        { withCredentials: true },
      );
      setPublished(true);
      showToast("Published to npm successfully", "success");
      setPublishing(false);
    } catch (error) {
      console.log(error);
      showToast("Published to npm Failed", "error");
      setPublishing(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a1a 0%, #0d0d28 60%, #0a1628 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg,rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "49px 40px",
        }}
      />

      {/* Glow top-left */}
      <div
        className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle,#6366f1 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Glow bottom-right */}
      <div
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 rounded-full pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle,#6366f1 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            <FiCpu size={14} className="text-indigo-400" />
            <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">
              AI COMPONENT STUDIO
            </span>
          </div>
          <h2
            className="text-5xl font-bold mb-3 leading-tight"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="text-white"> Build with </span>
            <span
              style={{
                background: "linear-gradient(135deg,#818cf8 0%,#06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Describe your React component in plain English. Preview, save, and
            publish — all in one place.
          </p>
        </motion.div>

        {/* AI Credits badge */}
        {userRole === "user" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex justify-end mb-4"
          >
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
              style={{
                background: lowCredits
                  ? "rgba(239,68,68,0.1)"
                  : "rgba(99,102,241,0.1)",
                border: `1px solid ${
                  lowCredits ? "rgba(239,68,68,0.25)" : "rgba(99,102,241,0.25)"
                }`,
              }}
            >
              <FiZap
                size={13}
                style={{ color: lowCredits ? "#f87171" : "#818cf8" }}
              />
              <span
                className="text-xs font-semibold"
                style={{ color: lowCredits ? "#f87171" : "#818cf8" }}
              >
                {aiCredits} AI Credits
              </span>
              <button
                className="flex items-center justify-center w-5 h-5 rounded-md transition-all cursor-pointer border-none"
                style={{
                  background: lowCredits
                    ? "rgba(239,68,68,0.2)"
                    : "rgba(99,102,241,0.2)",
                }}
                onClick={() => navigate("/pricing")}
              >
                <FiPlus
                  size={11}
                  style={{ color: lowCredits ? "#f87171" : "#818cf8" }}
                />
              </button>
            </div>
          </motion.div>
        )}

        {/* Low credits warning */}
        {lowCredits && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-5"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <FiAlertCircle size={16} className="text-red-400 shrink-0" />
            <p className="text-sm text-red-300">
              You need at least{" "}
              <span className="font-bold text-red-400">50 credits</span> to
              generate a component.
            </p>
            <button
              onClick={() => navigate("/pricing")}
              className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs 
                font-semibold transition-all cursor-pointer border-none whitespace-nowrap"
              style={{ background: "rgba(239,68,68,0.2)", color: "#f87171" }}
            >
              Buy Credits <FiArrowRight />
            </button>
          </motion.div>
        )}

        {/* Prompt box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-1 mb-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${
              lowCredits ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.08)"
            }`,
            opacity: lowCredits ? 0.6 : 1,
          }}
        >
          <div className="flex items-start gap-3 p-4">
            <FiZap size={20} className="text-indigo mt-1 shrink-0" />
            <textarea
              onKeyDown={handleKeyDown}
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              rows={3}
              disabled={lowCredits}
              placeholder={
                lowCredits
                  ? "Not enough credits to generate..."
                  : "A glassmorphism pricing card with a toggle for monthly/annual billing..."
              }
              className="w-full bg-transparent text-white placeholder-white/20 text-[15px]
                resize-none outline-none leading-relaxed disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex items-center justify-between px-4 pb-3">
            <span className="text-xs text-white/20">
              Ctrl + Enter to generate
            </span>
            <motion.button
              onClick={handleGenerate}
              whileTap={{ scale: 0.97 }}
              disabled={generating || lowCredits || !prompt.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold 
                disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              style={{
                background: generating
                  ? "rgba(99,102,241,0.3)"
                  : "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                boxShadow: generating
                  ? "none"
                  : "0 0 24px rgba(99,102,241,0.4)",
              }}
            >
              {generating ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block"
                >
                  <FiLoader size={15} />
                </motion.span>
              ) : (
                <FiZap size={15} />
              )}
              {generating ? "Generating..." : "Generate"}
            </motion.button>
          </div>
        </motion.div>

        {/* Generated card */}
        <AnimatePresence>
          {generated && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="rounded-2xl overflow-hidden mb-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.2)" }}
                  >
                    <FiLayers size={14} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {generated.name}
                    </p>
                    <p className="text-xs text-white/20">
                      {generated.props?.length > 0
                        ? `Props: ${generated.props.join(", ")}`
                        : "No props"}
                    </p>
                  </div>
                </div>

                {/* Tab buttons */}
                <div
                  className="flex gap-1 rounded-xl p-1"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  {["preview", "code"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize cursor-pointer border-none"
                      style={{
                        background:
                          activeTab === tab
                            ? "rgba(99,102,241,0.5)"
                            : "transparent",
                        color:
                          activeTab === tab ? "#fff" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {tab === "preview" ? (
                        <FiEye size={12} />
                      ) : (
                        <FiCode size={12} />
                      )}
                      {tab === "preview" ? "Preview" : "Code"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              <div className="p-5">
                <AnimatePresence mode="wait">
                  {activeTab === "preview" ? (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {generated?.code && (
                        <LiveComponentPreview code={generated.code} />
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl overflow-auto"
                      style={{
                        background: "#0d1117",
                        border: "1px solid rgba(255,255,255,0.06)",
                        maxHeight: "340px",
                      }}
                    >
                      <pre className="p-5 text-xs leading-relaxed text-green-300 font-mono whitespace-pre-wrap">
                        {generated.code}
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 px-5 pb-5 pt-1 flex-wrap">

                {/* ── ADMIN ── */}
                {userRole === "admin" && (
                  <>
                    <motion.button
                      onClick={handleSave}
                      whileTap={{ scale: 0.97 }}
                      disabled={saving || !!savedComponentId}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        background: savedComponentId
                          ? "rgba(16,185,129,0.1)"
                          : "rgba(255,255,255,0.06)",
                        border: savedComponentId
                          ? "1px solid rgba(16,185,129,0.3)"
                          : "1px solid rgba(255,255,255,0.1)",
                        color: savedComponentId ? "#34d399" : "#fff",
                      }}
                    >
                      {saving ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <FiLoader size={14} />
                        </motion.span>
                      ) : savedComponentId ? (
                        <FiCheckCircle size={14} />
                      ) : (
                        <FiSave size={14} />
                      )}
                      {saving ? "Saving..." : savedComponentId ? "Saved" : "Save Component"}
                    </motion.button>

                    {savedComponentId && (
                      <>
                        {!published ? (
                          <motion.button
                            onClick={handlePublished}
                            whileTap={{ scale: 0.97 }}
                            disabled={publishing}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
                            style={{
                              background: publishing
                                ? "rgba(6,182,212,0.2)"
                                : "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                              boxShadow: publishing
                                ? "none"
                                : "0 0 20px rgba(6,182,212,0.3)",
                              color: "#fff",
                            }}
                          >
                            {publishing ? (
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              >
                                <FiLoader size={14} />
                              </motion.span>
                            ) : (
                              <FiUploadCloud size={14} />
                            )}
                            {publishing ? "Publishing..." : "Publish to npm"}
                          </motion.button>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                            style={{
                              background: "rgba(16,185,129,0.1)",
                              border: "1px solid rgba(16,185,129,0.3)",
                              color: "#34d399",
                            }}
                          >
                            <FiCheckCircle size={14} />
                            Published
                          </motion.div>
                        )}

                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 ml-auto"
                        >
                          <motion.button
                            onClick={() => navigate("/")}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "rgba(255,255,255,0.5)",
                            }}
                          >
                            <FiArrowLeft size={14} />
                            Back
                          </motion.button>
                          <motion.button
                            onClick={() => {
                              setPrompt("");
                              setGenerated(null);
                              setSavedComponentId(null);
                              setPublished(false);
                              setActiveTab("preview");
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                            style={{
                              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                              color: "#fff",
                            }}
                          >
                            <FiRefreshCw size={14} />
                            Generate New
                          </motion.button>
                        </motion.div>
                      </>
                    )}
                  </>
                )}

                {/* ── USER ── */}
                {userRole === "user" && (
                  <>
                    <motion.button
                    onClick={()=>navigate("/my-components")}
                      onClick={handleSave}
                      whileTap={{ scale: 0.97 }}
                      disabled={saving || !!savedComponentId}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm 
                        font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        background: savedComponentId
                          ? "rgba(16,185,129,0.1)"
                          : "rgba(255,255,255,0.06)",
                        border: savedComponentId
                          ? "1px solid rgba(16,185,129,0.3)"
                          : "1px solid rgba(255,255,255,0.1)",
                        color: savedComponentId ? "#34d399" : "#fff",
                      }}
                    >
                      {saving ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <FiLoader size={14} />
                        </motion.span>
                      ) : savedComponentId ? (
                        <FiCheckCircle size={14} />
                      ) : (
                        <FiSave size={14} />
                      )}
                      {saving ? "Saving..." : savedComponentId ? "Saved" : "Save Component"}
                    </motion.button>

                    {savedComponentId && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 ml-auto"
                      >
                        <motion.button
                          onClick={() => navigate("/")}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          <FiArrowLeft size={14} /> Back
                        </motion.button>
                        <motion.button
                          onClick={() => {
                            setPrompt("");
                            setGenerated(null);
                            setSavedComponentId(null);
                            setPublished(false);
                            setActiveTab("preview");
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                          style={{
                            background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                            boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                            color: "#fff",
                          }}
                        >
                          <FiRefreshCw size={14} /> Generate New
                        </motion.button>
                        <motion.button
                          onClick={() => navigate("/my-components")}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                          style={{
                            background: "rgba(99,102,241,0.15)",
                            border: "1px solid rgba(99,102,241,0.3)",
                            color: "#818cf8",
                          }}
                        >
                          <FiPackage size={14} /> My Components
                        </motion.button>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {!generated && !generating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-16"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <FiCpu size={28} className="text-indigo-400" />
          </div>
          <p className="text-white/20 text-sm">
            Describe your component and hit Generate
          </p>
        </motion.div>
      )}

      {/* Generating state */}
      {generating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 rounded-full border-2 border-transparent mx-auto mb-4"
            style={{ borderTopColor: "#6366f1", borderRightColor: "#06b6d4" }}
          />
          <p className="text-white/30 text-sm">
            AI is crafting your component...
          </p>
        </motion.div>
      )}

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Generate;