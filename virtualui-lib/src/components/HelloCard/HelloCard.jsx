import React from "react";

export const HelloCard = ({
  title = "Hello, World!",
  message = "Welcome to your new React component!",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      padding: "24px",
      width: "400px",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
      border: "1px solid " + alpha(accent, 0.25)
    }}>
      <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 12px" }}>{title}</h2>
      <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", margin: "0" }}>{message}</p>
    </div>
  );
};