import React, { useState, useEffect } from "react";

export const Loader = ({
  accent = "#0ea5e9",
  bg = "#0f172a",
  size = 48,
  text = "Loading...",
  showText = true,
  variant = "bars" // "spinner" | "dots" | "pulse" | "bars"
}) => {
  const [dots, setDots] = useState(0);

  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(d => (d + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const spinnerStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: "3px solid " + alpha(accent, 0.2),
    borderTop: "3px solid " + accent,
    animation: "nexus-spin 0.8s linear infinite"
  };

  const dotsStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  };

  const pulseStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: alpha(accent, 0.3),
    animation: "nexus-pulse 1.2s ease-in-out infinite"
  };

  const barsStyle = {
    display: "flex",
    gap: "4px",
    alignItems: "flex-end",
    height: size
  };

  return (
    <>
      <style>{`
        @keyframes nexus-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes nexus-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes nexus-bounce1 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes nexus-bounce2 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes nexus-bounce3 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `}</style>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        padding: "40px",
        background: bg,
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "system-ui,sans-serif",
        minWidth: "160px"
      }}>

        {variant === "spinner" && (
          <div style={spinnerStyle} />
        )}

        {variant === "dots" && (
          <div style={dotsStyle}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: size / 4,
                height: size / 4,
                borderRadius: "50%",
                background: i === dots % 3 ? accent : alpha(accent, 0.3),
                transition: "background 0.2s ease",
                transform: i === dots % 3 ? "scale(1.3)" : "scale(1)",
                transitionDuration: "0.2s"
              }} />
            ))}
          </div>
        )}

        {variant === "pulse" && (
          <div style={{ position: "relative", width: size, height: size }}>
            <div style={{
              ...pulseStyle,
              position: "absolute",
              top: 0, left: 0
            }} />
            <div style={{
              width: size * 0.5,
              height: size * 0.5,
              borderRadius: "50%",
              background: accent,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }} />
          </div>
        )}

        {variant === "bars" && (
          <div style={barsStyle}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                width: size / 6,
                height: size,
                borderRadius: "4px",
                background: "linear-gradient(to top, " + alpha(accent, 0.3) + ", " + accent + ")",
                animation: `nexus-bounce${(i % 3) + 1} ${0.8 + i * 0.1}s ease-in-out infinite`,
                animationDelay: i * 0.1 + "s"
              }} />
            ))}
          </div>
        )}

        {showText && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "2px"
          }}>
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.3px"
            }}>
              {text}
            </span>
            <span style={{
              fontSize: "14px",
              fontWeight: "600",
              color: accent,
              width: "20px"
            }}>
              {".".repeat(dots)}
            </span>
          </div>
        )}

      </div>
    </>
  );
};