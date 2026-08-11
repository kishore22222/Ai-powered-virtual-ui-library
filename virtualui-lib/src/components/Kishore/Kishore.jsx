import React, { useState } from "react";

export const Kishore = ({
  title = "Premium Access",
  description = "Unlock all features with our premium plan",
  price = 49,
  currency = "$",
  period = "per month",
  accent = "#7c3aed",
  bg = "#0f172a",
  features = ["24/7 Support", "Unlimited Storage", "Advanced Analytics", "Custom Themes"],
  buttonText = "Subscribe Now",
  onButtonClick = () => {}
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
        borderRadius: "20px",
        padding: "30px",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.5)" : "0 10px 40px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px)" : "none"
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "800", color: "#fff", marginBottom: "8px" }}>{title}</div>
      <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>{description}</div>
      
      <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "4px" }}>
        <span style={{ fontSize: "20px", fontWeight: "600", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{currency}</span>
        <span style={{ fontSize: "48px", fontWeight: "800", lineHeight: 1, color: "#fff" }}>{price}</span>
      </div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "30px" }}>{period}</div>
      
      <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "24px" }} />
      
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {features.map((feature, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: alpha(accent, 0.2), border: "1px solid " + alpha(accent, 0.5) }}>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,6 4.5,9 10.5,3" /></svg>
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onButtonClick}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "system-ui,sans-serif",
          transition: "transform 0.2s",
          transform: hovered ? "scale(1.02)" : "none"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};