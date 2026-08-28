import React, { useState } from "react";

export const NotificationCard = ({
  title = "New Message",
  message = "You have received a new message from John.",
  time = "2 hours ago",
  accent = "#0ea5e9",
  bg = "#0d1117",
  onDismiss = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "16px",
        padding: "16px",
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        color: "#fff",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)"
      }}
    >
      <h3 style={{ fontSize: "16px", fontWeight: "700", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "0 0 8px" }}>{message}</p>
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{time}</span>
      <button onClick={onDismiss} style={{
        marginTop: "12px",
        padding: "8px 16px",
        borderRadius: "10px",
        border: "none",
        background: accent,
        color: "#fff",
        fontSize: "14px",
        cursor: "pointer",
        fontFamily: "system-ui,sans-serif"
      }}>
        Dismiss
      </button>
    </div>
  );
};