import { useState } from "react";
import React from "react";

export const Button = ({
  label = "Click Me",
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  primaryColor = "#6366f1",
  dangerColor = "#ef4444",
  icon = null,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const sizeMap = {
    sm: { padding: "6px 14px", fontSize: "13px", borderRadius: "6px" },
    md: { padding: "10px 20px", fontSize: "15px", borderRadius: "8px" },
    lg: { padding: "14px 28px", fontSize: "17px", borderRadius: "10px" },
  };

  const { padding, fontSize, borderRadius } = sizeMap[size] || sizeMap.md;

  const variantStyles = {
    primary: {
      background: isHovered ? shadeColor(primaryColor, -15) : primaryColor,
      color: "#fff",
      border: "none",
    },
    outline: {
      background: isHovered ? `${primaryColor}18` : "transparent",
      color: primaryColor,
      border: `2px solid ${primaryColor}`,
    },
    ghost: {
      background: isHovered ? `${primaryColor}12` : "transparent",
      color: primaryColor,
      border: "none",
    },
    danger: {
      background: isHovered ? shadeColor(dangerColor, -15) : dangerColor,
      color: "#fff",
      border: "none",
    },
  };

  const base = variantStyles[variant] || variantStyles.primary;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding,
    fontSize,
    borderRadius,
    fontWeight: 600,
    fontFamily: "system-ui, -apple-system, sans-serif",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transform: isPressed && !disabled ? "scale(0.97)" : "scale(1)",
    transition: "background 0.15s ease, transform 0.1s ease, opacity 0.15s ease",
    outline: "none",
    letterSpacing: "0.01em",
    userSelect: "none",
    ...base,
  };

  return (
    <button
      style={style}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={disabled}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {label}
    </button>
  );
};

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `rgb(${R}, ${G}, ${B})`;
}

// Demo
export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "32px", background: "#f9fafb", minHeight: "100vh", alignItems: "center" }}>
      <Button label="Primary" variant="primary" onClick={() => alert("Primary clicked!")} />
      <Button label="Outline" variant="outline" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Danger" variant="danger" />
      <Button label="Small" size="sm" />
      <Button label="Large" size="lg" />
      <Button label="Disabled" disabled />
      <Button label="Full Width" fullWidth />
      <Button
        label="With Icon"
        icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>}
      />
    </div>
  );
}