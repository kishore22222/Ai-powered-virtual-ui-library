import React, { useState } from "react";

export const Toggle = ({
  isOn = false,
  onToggle = () => {},
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [isActive, setIsActive] = useState(isOn);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle(!isActive);
  };
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      background: bg,
      borderRadius: "12px",
      padding: "6px",
      cursor: "pointer",
      width: "60px",
      height: "30px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
      transition: "background 0.3s"
    }} onClick={handleToggle}>
      <div style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: isActive ? accent : "rgba(255,255,255,0.3)",
        transition: "transform 0.3s",
        transform: isActive ? "translateX(30%)" : "translateX(0)"
      }} />
    </div>
  );
};