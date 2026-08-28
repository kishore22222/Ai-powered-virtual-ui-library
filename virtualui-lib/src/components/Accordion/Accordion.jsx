import React, { useState } from "react";

export const Accordion = ({
  items = [
    { title: "Section 1", content: "Content for section 1." },
    { title: "Section 2", content: "Content for section 2." },
    { title: "Section 3", content: "Content for section 3." }
  ],
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", overflow: "hidden", width: "400px" }}>
      {items.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            onClick={() => toggleSection(index)}
            style={{
              padding: "16px",
              cursor: "pointer",
              background: openIndex === index ? accent : bg,
              color: openIndex === index ? "#fff" : "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span style={{ fontWeight: "700" }}>{item.title}</span>
            <span style={{ fontSize: "14px" }}>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <div style={{ padding: "16px", background: "rgba(255,255,255,0.05)" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};