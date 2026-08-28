import React, { useState } from "react";

export const ToggleLight = ({
  label = "Toggle Light",
  accent = "#0ea5e9",
  bg = "#0d1117",
  onToggle = () => {}
}) => {
  const [isOn, setIsOn] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  const handleToggle = () => {
    setIsOn(prev => !prev);
    onToggle();
  };

  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: "300px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", textAlign: "center" }}>
      <h3 style={{ marginBottom: "10px" }}>{label}</h3>
      <button onClick={handleToggle} style={{
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        background: isOn ? accent : alpha(accent, 0.5),
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "background 0.3s"
      }}>
        {isOn ? "Light On" : "Light Off"}
      </button>
    </div>
  );
};