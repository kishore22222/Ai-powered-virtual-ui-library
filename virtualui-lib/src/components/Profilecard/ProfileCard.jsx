import { useState } from "react";
import React from "react";

export const ProfileCard = ({
  name = "Kishore S",
  role = "Full Stack Developer",
  bio = "Building scalable web apps with MERN Stack. Passionate about clean code and great UX.",
  avatar = null,
  accentColor = "#6366f1",
  stats = [
    { label: "Projects", value: "12" },
    { label: "Commits", value: "340" },
    { label: "Stars", value: "89" },
  ],
  socials = [
    { icon: "github", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "twitter", url: "#" },
  ],
  onFollow = () => {},
  onMessage = () => {},
  width = "320px",
}) => {
  const [followed, setFollowed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [btnHovered, setBtnHovered] = useState(null);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const icons = {
    github: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    twitter: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.17 9.17 0 0023 3z" />
      </svg>
    ),
  };

  const s = {
    wrapper: {
      width,
      borderRadius: "18px",
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "#fff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    },
    banner: {
      height: "90px",
      background: `linear-gradient(135deg, ${accentColor} 0%, ${shadeColor(accentColor, 30)} 100%)`,
      position: "relative",
    },
    avatarWrap: {
      position: "absolute",
      bottom: "-36px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "76px",
      height: "76px",
      borderRadius: "50%",
      border: "4px solid #fff",
      overflow: "hidden",
      background: accentColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
    },
    initials: {
      color: "#fff",
      fontSize: "26px",
      fontWeight: 800,
      letterSpacing: "-0.5px",
    },
    body: {
      padding: "48px 24px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
    },
    name: {
      margin: 0,
      fontSize: "19px",
      fontWeight: 700,
      color: "#111827",
    },
    role: {
      margin: 0,
      fontSize: "13px",
      fontWeight: 600,
      color: accentColor,
      letterSpacing: "0.03em",
    },
    bio: {
      margin: "6px 0 0",
      fontSize: "13.5px",
      color: "#6b7280",
      textAlign: "center",
      lineHeight: 1.6,
    },
    statsRow: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      margin: "16px 0 4px",
      padding: "14px 0",
      borderTop: "1px solid #f3f4f6",
      borderBottom: "1px solid #f3f4f6",
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px",
    },
    statValue: {
      fontSize: "18px",
      fontWeight: 800,
      color: "#111827",
    },
    statLabel: {
      fontSize: "11px",
      color: "#9ca3af",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 600,
    },
    socialsRow: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      margin: "10px 0 4px",
    },
    socialBtn: (key) => ({
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: hoveredSocial === key ? accentColor : "#f3f4f6",
      color: hoveredSocial === key ? "#fff" : "#6b7280",
      border: "none",
      cursor: "pointer",
      transition: "background 0.15s, color 0.15s",
      textDecoration: "none",
    }),
    actions: {
      display: "flex",
      gap: "10px",
      width: "100%",
      marginTop: "14px",
    },
    followBtn: {
      flex: 1,
      padding: "9px 0",
      borderRadius: "9px",
      border: "none",
      background: followed
        ? "#f3f4f6"
        : btnHovered === "follow"
        ? shadeColor(accentColor, -15)
        : accentColor,
      color: followed ? "#6b7280" : "#fff",
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      transition: "background 0.15s, color 0.15s",
    },
    msgBtn: {
      flex: 1,
      padding: "9px 0",
      borderRadius: "9px",
      border: `2px solid ${accentColor}`,
      background: btnHovered === "msg" ? `${accentColor}12` : "transparent",
      color: accentColor,
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      transition: "background 0.15s",
    },
  };

  return (
    <div style={s.wrapper}>
      <div style={s.banner}>
        <div style={s.avatarWrap}>
          {avatar ? (
            <img src={avatar} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={s.initials}>{initials}</span>
          )}
        </div>
      </div>

      <div style={s.body}>
        <h2 style={s.name}>{name}</h2>
        <p style={s.role}>{role}</p>
        <p style={s.bio}>{bio}</p>

        <div style={s.statsRow}>
          {stats.map((stat) => (
            <div key={stat.label} style={s.statItem}>
              <span style={s.statValue}>{stat.value}</span>
              <span style={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div style={s.socialsRow}>
          {socials.map((social) => (
            <a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              style={s.socialBtn(social.icon)}
              onMouseEnter={() => setHoveredSocial(social.icon)}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              {icons[social.icon] || "🔗"}
            </a>
          ))}
        </div>

        <div style={s.actions}>
          <button
            style={s.followBtn}
            onClick={() => { setFollowed(!followed); onFollow(); }}
            onMouseEnter={() => setBtnHovered("follow")}
            onMouseLeave={() => setBtnHovered(null)}
          >
            {followed ? "✓ Following" : "+ Follow"}
          </button>
          <button
            style={s.msgBtn}
            onClick={onMessage}
            onMouseEnter={() => setBtnHovered("msg")}
            onMouseLeave={() => setBtnHovered(null)}
          >
            Message
          </button>
        </div>
      </div>
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

