import React from "react";

export const TestimonialCard = ({
  image = "https://images.unsplash.com/photo-1506794778163-1a0a4a14b2d0?w=400&q=80",
  name = "John Doe",
  title = "CEO of Company",
  testimonial = "This service has greatly improved our workflow and efficiency, and I couldn't be happier with the results!",
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
      width: "300px",
      color: "#fff",
      fontFamily: "system-ui,sans-serif",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      position: "relative"
    }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <img src={image} alt={name} style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" }} />
        <div>
          <h4 style={{ margin: "0", fontSize: "16px", fontWeight: "700" }}>{name}</h4>
          <p style={{ margin: "0", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{title}</p>
        </div>
      </div>
      <p style={{ fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.85)" }}>{testimonial}</p>
      <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "40px", height: "40px", borderRadius: "50%", background: alpha(accent, 0.1), display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2 2 4-4m12 0l-2 2-4-4"/></svg>
      </div>
    </div>
  );
};