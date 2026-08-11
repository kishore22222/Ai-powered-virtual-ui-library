import React from "react";

export const TravelCard = ({
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  destination = "Swiss Alps",
  duration = "7 Days",
  price = "$1200",
  accent = "#6366f1",
  bg = "#0f172a",
  onBookClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      overflow: "hidden",
      width: "280px",
      border: "1px solid rgba(255,255,255,0.07)",
      fontFamily: "system-ui,sans-serif",
      position: "relative",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
    }}>
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
        <img src={image} alt={destination} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "12px", left: "12px", fontSize: "14px", fontWeight: "700", color: "#fff" }}>{destination}</div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{duration}</span>
          <span style={{ fontSize: "15px", fontWeight: "700", color: accent }}>{price}</span>
        </div>
        <button
          onClick={onBookClick}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" ,
            color: "#fff",
            fontSize: "13px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit"
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};