import React, { useState, useEffect } from "react";

export const ProgressBar = ({
  progress = 0,
  height = 20,
  bg = "#0f172a",
  accent = "#6366f1"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress(oldProgress => {
        if (oldProgress < 100) {
          return oldProgress + 1;
        } else {
          clearInterval(interval);
          return oldProgress;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: bg, borderRadius: "10px", width: "100%", height: height + "px", overflow: "hidden" }}>
      <div style={{
        width: currentProgress + "%",
        background: accent,
        height: "100%",
        transition: "width 0.1s ease-in-out"
      }} />
    </div>
  );
};