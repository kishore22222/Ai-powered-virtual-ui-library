import React, { useState } from "react";

export const MariCard = ({
  title = "Mari's Corner",
  description = "A cozy space for creative thoughts and ideas",
  image = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  accent = "#e11d48",
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
        borderRadius: "20px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.6)" : "0 10px 30px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)"
          }}
        />
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, transparent 0%, " + alpha(bg, 0.7) + " 100%)"
        }} />
      </div>
      <div style={{ padding: "20px" }}>
        <h2 style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#fff",
          margin: "0 0 8px",
          letterSpacing: "0.5px"
        }}>{title}</h2>
        <p style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.5,
          margin: "0 0 20px"
        }}>{description}</p>
        <button
          onClick={onButtonClick}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: alpha(accent, 0.9),
            color: "#fff",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: hovered ? "scale(1.02)" : "none"
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};