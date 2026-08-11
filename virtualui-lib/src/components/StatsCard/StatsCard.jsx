import React, { useState, useEffect, useRef } from "react";

export const StatsCard = ({
  title = "Total Revenue",
  value = 124500,
  prefix = "$",
  suffix = "",
  change = +12.5,
  period = "vs last month",
  icon = "📈",
  accent = "#3be8ff",
  bg = "#040e11",
  data = [40, 55, 35, 70, 45, 80, 60, 90, 75, 95, 85, 100],
  onCardClick = () => {}
}) => {
  const [displayed, setDisplayed] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba("+r+","+g+","+b+","+op+")";
  };

  // Intersection Observer — animate when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  // Count-up animation
  useEffect(() => {
    if (!animated) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplayed(value); clearInterval(timer); }
      else setDisplayed(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [animated, value]);

  const isPositive = change >= 0;
  const max = Math.max(...data);
  const chartH = 48;

  return (
    <div
      ref={ref}
      onClick={onCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "20px",
        border: "1px solid " + (hovered ? alpha(accent, 0.25) : "rgba(255,255,255,0.06)"),
        padding: "20px",
        width: "280px",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        cursor: "pointer",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px " + alpha(accent, 0.1)
          : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "120px", height: "120px", borderRadius: "50%",
        background: alpha(accent, hovered ? 0.08 : 0.04),
        filter: "blur(30px)",
        transition: "background 0.3s",
        pointerEvents: "none"
      }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
            {title}
          </p>
        </div>
        <div style={{
          width: "36px", height: "36px", borderRadius: "12px",
          background: alpha(accent, 0.1),
          border: "1px solid " + alpha(accent, 0.2),
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px",
          transition: "transform 0.2s",
          transform: hovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)"
        }}>
          {icon}
        </div>
      </div>

      {/* Value */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
          {prefix && (
            <span style={{ fontSize: "16px", fontWeight: 700, color: alpha(accent, 0.7) }}>
              {prefix}
            </span>
          )}
          <span style={{
            fontSize: "36px", fontWeight: 800,
            color: "#fff", letterSpacing: "-1px",
            fontVariantNumeric: "tabular-nums"
          }}>
            {displayed.toLocaleString()}
          </span>
          {suffix && (
            <span style={{ fontSize: "16px", fontWeight: 700, color: alpha(accent, 0.7) }}>
              {suffix}
            </span>
          )}
        </div>

        {/* Change badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "3px",
            padding: "2px 8px", borderRadius: "20px", fontSize: "11px", fontWeight: 700,
            background: isPositive ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
            color: isPositive ? "#34d399" : "#f87171",
            border: "1px solid " + (isPositive ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)")
          }}>
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path
                d={isPositive ? "M5 1L9 5H6V9H4V5H1L5 1Z" : "M5 9L1 5H4V1H6V5H9L5 9Z"}
                fill={isPositive ? "#34d399" : "#f87171"}
              />
            </svg>
            {Math.abs(change)}%
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
            {period}
          </span>
        </div>
      </div>

      {/* Mini sparkline chart */}
      <div style={{ position: "relative", height: chartH + "px", marginTop: "4px" }}>
        <svg width="100%" height={chartH} viewBox={"0 0 " + (data.length * 20) + " " + chartH} preserveAspectRatio="none">
          <defs>
            <linearGradient id={"grad-" + accent.replace("#","")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <path
            d={
              "M0," + chartH + " " +
              data.map((v, i) => (i * 20) + "," + (chartH - (v / max) * (chartH - 8))).join(" L ") +
              " L" + ((data.length - 1) * 20) + "," + chartH + " Z"
            }
            fill={"url(#grad-" + accent.replace("#","") + ")"}
          />

          {/* Line */}
          <polyline
            points={data.map((v, i) => (i * 20) + "," + (chartH - (v / max) * (chartH - 8))).join(" ")}
            fill="none"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "drop-shadow(0 0 4px " + alpha(accent, 0.6) + ")"
            }}
          />

          {/* Last dot */}
          <circle
            cx={(data.length - 1) * 20}
            cy={chartH - (data[data.length - 1] / max) * (chartH - 8)}
            r="3"
            fill={accent}
            style={{
              filter: "drop-shadow(0 0 6px " + accent + ")"
            }}
          />
        </svg>
      </div>
    </div>
  );
};