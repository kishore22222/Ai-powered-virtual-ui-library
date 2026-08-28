import React, { useState } from "react";

export const Calendar = ({
  month = new Date().toLocaleString("default", { month: "long" }),
  year = new Date().getFullYear(),
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const daysInMonth = (month, year) => new Date(year, new Date(Date.parse(month + ' 1, ' + year)).getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, new Date(Date.parse(month + ' 1, ' + year)).getMonth(), 1).getDay();
  const totalDays = daysInMonth(month, year);
  const firstDay = firstDayOfMonth(month, year);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} style={{ width: "40px", height: "40px" }} />);
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(<div key={i} style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", background: bg, color: accent, margin: "2px" }}>{i}</div>);
  }

  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: "320px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)", fontFamily: "system-ui,sans-serif" }}>
      <h2 style={{ color: accent, textAlign: "center", margin: "0 0 20px" }}>{month + ' ' + year}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
        {days}
      </div>
    </div>
  );
};