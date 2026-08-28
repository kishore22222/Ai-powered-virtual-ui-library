import React from "react";

export const Avatar = ({
  imageUrl = "https://via.placeholder.com/150",
  size = "60px",
  borderColor = "#6366f1",
  borderWidth = "4px",
  altText = "User Avatar"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      border: borderWidth + " solid " + borderColor,
      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: alpha(borderColor, 0.1)
    }}>
      <img src={imageUrl} alt={altText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
};