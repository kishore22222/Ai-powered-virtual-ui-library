import React from "react";

export const BlogCard = ({
  title = "Exploring the Depths of the Ocean",
  excerpt = "A journey into the mysteries of the underwater world.",
  author = "Jane Doe",
  date = "October 1, 2023",
  image = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&q=80",
  accent = "#0ea5e9",
  bg = "#0f172a",
  onClick = () => {}
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
      width: "320px",
      cursor: "pointer",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.08)",
      transition: "transform 0.2s, box-shadow 0.2s"
    }} onClick={onClick}>
      <div style={{ position: "relative", width: "100%", height: "180px" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", margin: "0 0 8px" }}>{title}</h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px" }}>{excerpt}</p>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{author} - {date}</div>
      </div>
    </div>
  );
};