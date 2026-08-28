import React, { useState } from "react";

export const Alert = ({
  message = "This is an alert message!",
  type = "info",
  accent = "#0ea5e9",
  bg = "#0d1117",
  onClose = () => {}
}) => {
  const [visible, setVisible] = useState(true);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  if (!visible) return null;
  return (
    <div style={{
      background: bg,
      borderRadius: "12px",
      padding: "16px",
      margin: "16px 0",
      color: "#fff",
      fontFamily: "system-ui,sans-serif",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      border: "1px solid " + alpha(accent, 0.2),
      position: "relative"
    }}>
      <span>{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          onClose();
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          color: accent,
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        &times;
      </button>
    </div>
  );
};