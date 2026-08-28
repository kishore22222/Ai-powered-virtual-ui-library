import React, { useState, useEffect } from "react";

export const Toast = ({
  message = "This is a toast notification!",
  duration = 3000,
  bg = "#0d1117",
  color = "#fff",
  accent = "#e11d48"
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return (
    <div style={{
      position: "relative",
      width: "300px",
      margin: "20px auto",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.5s ease",
      background: bg,
      color: color,
      borderRadius: "10px",
      padding: "16px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      display: visible ? "block" : "none"
    }}>
      <span style={{ fontWeight: "600" }}>{message}</span>
    </div>
  );
};