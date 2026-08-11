import React, { useState } from "react";

export const CarCard = ({
  image = "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&q=80",
  make = "Tesla",
  model = "Model S",
  year = "2023",
  price = 89990,
  mileage = 1200,
  transmission = "Automatic",
  fuel = "Electric",
  accent = "#0ea5e9",
  bg = "#0f172a",
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
        borderRadius: "16px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <img src={image} alt={make + " " + model} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.9), fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>{year}</div>
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#fff", margin: 0 }}>{make} {model}</h3>
          <div style={{ fontSize: "18px", fontWeight: "800", color: accent }}>$ {price.toLocaleString()}</div>
        </div>
        <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{mileage.toLocaleString()} mi</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{transmission}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{fuel}</span>
          </div>
        </div>
        <button
          onClick={onButtonClick}
          style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};