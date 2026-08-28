import React, { useState, useEffect } from "react";

export const CountdownTimer = ({
  targetDate = new Date(Date.now() + 86400000),
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "24px", width: "320px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "0 0 16px" }}>Countdown Timer</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>{timeLeft.days}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Days</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>{timeLeft.hours}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Hours</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>{timeLeft.minutes}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Minutes</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>{timeLeft.seconds}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Seconds</div>
        </div>
      </div>
    </div>
  );
};