import React from "react";

export const PricingCard = ({
  planName = "Pro Plan",
  description = "For teams that need more power.",
  price = 29,
  currency = "$",
  period = "per month",
  badgeText = "Most Popular",
  ctaText = "Get Started",
  accent = "#6366f1",
  bg = "#0f172a",
  features = ["Unlimited projects", "Priority support", "Advanced analytics", "Custom integrations"],
  onCtaClick = () => {}
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "28px 24px", width: "300px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25), position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.3) + ")" }} />
      {badgeText && (
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "100px", marginBottom: "14px", background: alpha(accent, 0.12), border: "1px solid " + alpha(accent, 0.3), fontSize: "11px", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.5px" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
          {badgeText}
        </div>
      )}
      <div style={{ fontSize: "20px", fontWeight: "800", marginBottom: "4px" }}>{planName}</div>
      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "20px" }}>{description}</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", marginBottom: "4px" }}>
        <span style={{ fontSize: "18px", fontWeight: "700", color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>{currency}</span>
        <span style={{ fontSize: "52px", fontWeight: "800", lineHeight: 1 }}>{Math.round(price)}</span>
      </div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>{period}</div>
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "16px" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: alpha(accent, 0.18), border: "1px solid " + alpha(accent, 0.4), flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,6 4.5,9 10.5,3" /></svg>
            </div>
            {f}
          </li>
        ))}
      </ul>
      <button onClick={onCtaClick} style={{ width: "100%", padding: "13px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "system-ui,sans-serif" }}>{ctaText}</button>
    </div>
  );
};