import { useState } from "react";
import React from "react";

export const Card = ({
  title = "Card Title",
  description = "This is a short description that gives context about the card content.",
  image = null,
  badge = null,
  badgeColor = "#6366f1",
  actionLabel = "Learn More",
  onAction = () => {},
  footer = null,
  accentColor = "#6366f1",
  width = "320px",
  shadow = true,
}) => {
  const [hovered, setIsHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const styles = {
    card: {
      width,
      borderRadius: "14px",
      overflow: "hidden",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: shadow
        ? hovered
          ? "0 12px 32px rgba(0,0,0,0.13)"
          : "0 2px 12px rgba(0,0,0,0.07)"
        : "none",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      transition: "box-shadow 0.22s ease, transform 0.22s ease",
      fontFamily: "system-ui, -apple-system, sans-serif",
      display: "flex",
      flexDirection: "column",
    },
    accentBar: {
      height: "4px",
      background: accentColor,
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      display: "block",
    },
    imagePlaceholder: {
      width: "100%",
      height: "160px",
      background: `linear-gradient(135deg, ${accentColor}22 0%, ${accentColor}44 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    body: {
      padding: "20px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    badgeRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    badge: {
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: "999px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      background: `${badgeColor}18`,
      color: badgeColor,
    },
    title: {
      margin: 0,
      fontSize: "17px",
      fontWeight: 700,
      color: "#111827",
      lineHeight: 1.3,
    },
    description: {
      margin: 0,
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: 1.6,
      flex: 1,
    },
    btn: {
      marginTop: "6px",
      padding: "9px 18px",
      borderRadius: "8px",
      border: "none",
      background: btnHovered ? shadeColor(accentColor, -15) : accentColor,
      color: "#fff",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      alignSelf: "flex-start",
      transition: "background 0.15s ease",
      letterSpacing: "0.01em",
    },
    footer: {
      borderTop: "1px solid #f3f4f6",
      padding: "12px 20px",
      fontSize: "13px",
      color: "#9ca3af",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.accentBar} />

      {image ? (
        <img src={image} alt={title} style={styles.image} />
      ) : (
        <div style={styles.imagePlaceholder}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.6">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}

      <div style={styles.body}>
        {badge && (
          <div style={styles.badgeRow}>
            <span style={styles.badge}>{badge}</span>
          </div>
        )}
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        {actionLabel && (
          <button
            style={styles.btn}
            onClick={onAction}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            {actionLabel}
          </button>
        )}
      </div>

      {footer && <div style={styles.footer}>{footer}</div>}
    </div>
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "40px", background: "#f9fafb", minHeight: "100vh", alignItems: "flex-start" }}>
      <Card
        title="Getting Started with React"
        description="Learn the fundamentals of React by building real-world components from scratch."
        badge="Tutorial"
        accentColor="#6366f1"
        onAction={() => alert("Opening article...")}
        footer={<><span>5 min read</span><span>🔖 Save</span></>}
      />
      <Card
        title="Design Systems at Scale"
        description="How top product teams build consistent, reusable design systems that grow with their products."
        badge="Design"
        badgeColor="#10b981"
        accentColor="#10b981"
        actionLabel="Read More"
        footer={<><span>March 2025</span><span>★ 4.9</span></>}
      />
      <Card
        title="Shipped: v2.0 Release"
        description="A major update is here — performance improvements, new APIs, and a refreshed developer experience."
        badge="Update"
        badgeColor="#f59e0b"
        accentColor="#f59e0b"
        actionLabel="See What's New"
        width="300px"
      />
    </div>
  );
}