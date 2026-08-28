import React, { useState } from "react";

export const Form = ({
  title = "Subscribe to our newsletter",
  buttonText = "Subscribe",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [email, setEmail] = useState("");
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "24px", width: "400px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>{title}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "12px",
            fontSize: "14px",
            color: "#fff",
            background: "transparent"
          }}
        />
        <button type="submit" style={{
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer"
        }}>{buttonText}</button>
      </form>
    </div>
  );
};