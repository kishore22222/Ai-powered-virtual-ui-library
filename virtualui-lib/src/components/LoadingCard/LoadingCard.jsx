import React from "react";

export const LoadingCard = ({
  accent = "#6366f1",
  bg = "#0f172a",
  width = "300px",
  height = "200px"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      width: width,
      height: height,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      border: "1px solid " + alpha(accent, 0.1)
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "20px",
        background: alpha(accent, 0.2),
        borderRadius: "10px",
        animation: "loading 1.5s infinite"
      }} />
      <style>{`@keyframes loading { 0% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } 100% { transform: translate(-50%, -50%) scale(1); }}`}</style>
    </div>
  );
};