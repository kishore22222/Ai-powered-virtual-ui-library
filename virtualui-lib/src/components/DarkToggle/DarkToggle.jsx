import React, { useState } from "react";

export const DarkToggle = ({
  initialChecked = false,
  label = "Toggle Dark Mode",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ display: "flex", alignItems: "center", background: bg, borderRadius: "12px", padding: "10px", width: "300px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <label style={{ color: "#fff", fontSize: "16px", marginRight: "10px" }}>{label}</label>
      <div onClick={() => setIsChecked(!isChecked)} style={{
        width: "50px",
        height: "24px",
        borderRadius: "12px",
        background: isChecked ? accent : "rgba(255,255,255,0.1)",
        position: "relative",
        cursor: "pointer"
      }}>
        <div style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "#fff",
          position: "absolute",
          top: "0",
          left: isChecked ? "26px" : "0",
          transition: "left 0.3s"
        }} />
      </div>
    </div>
  );
};