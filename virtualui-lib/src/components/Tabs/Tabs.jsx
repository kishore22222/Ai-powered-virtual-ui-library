import React, { useState } from "react";

export const Tabs = ({
  tabs = ["Tab 1", "Tab 2", "Tab 3"],
  content = ["Content for Tab 1", "Content for Tab 2", "Content for Tab 3"],
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ background: bg, borderRadius: "20px", width: "400px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              flex: 1,
              padding: "12px",
              background: activeIndex === index ? accent : "transparent",
              color: activeIndex === index ? "#fff" : "rgba(255,255,255,0.75)",
              border: "none",
              borderRadius: "20px 20px 0 0",
              cursor: "pointer",
              fontWeight: activeIndex === index ? "700" : "500",
              transition: "background 0.3s"
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px", color: "#fff" }}>
        {content[activeIndex]}
      </div>
    </div>
  );
};