import React, { useState } from "react";

export const Tooltip = ({
  text = "Tooltip text",
  position = "top",
  accent = "#6366f1",
  bg = "#0f172a",
  children = <span style={{ color: "#6366f1" }}>Hover me</span>
}) => {
  const [visible, setVisible] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <div style={{
          position: "absolute",
          bottom: position === "top" ? "100%" : "auto",
          top: position === "bottom" ? "100%" : "auto",
          left: "50%",
          transform: "translateX(-50%)",
          background: bg,
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          fontFamily: "system-ui,sans-serif",
          whiteSpace: "nowrap",
          zIndex: 1000
        }}>
          {text}
        </div>
      )}
    </div>
  );
};