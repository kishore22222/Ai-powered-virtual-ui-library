import React from "react";

export const Badge = ({
  label = "New",
  accent = "#e11d48",
  bg = "#0f172a",
  size = "medium"
}) => {
  const sizes = {
    small: { padding: "2px 6px", fontSize: "12px" },
    medium: { padding: "4px 10px", fontSize: "14px" },
    large: { padding: "6px 12px", fontSize: "16px" }
  };
  return (
    <span style={{
      background: accent,
      color: "#fff",
      borderRadius: "10px",
      fontFamily: "system-ui, sans-serif",
      padding: sizes[size].padding,
      fontSize: sizes[size].fontSize,
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      display: "inline-block"
    }}>
      {label}
    </span>
  );
};