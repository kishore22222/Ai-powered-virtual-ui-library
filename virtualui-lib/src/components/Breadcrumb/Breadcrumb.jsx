import React from "react";

export const Breadcrumb = ({
  items = [{ name: "Home", link: "#" }, { name: "Library", link: "#" }, { name: "Data", link: "#" }],
  separator = ">",
  bg = "#0f172a",
  textColor = "#fff",
  separatorColor = "#6366f1"
}) => {
  return (
    <nav style={{ background: bg, padding: "12px 20px", borderRadius: "12px", color: textColor, fontFamily: "system-ui,sans-serif" }}>
      {items.map((item, index) => (
        <span key={index} style={{ display: "inline-flex", alignItems: "center" }}>
          <a href={item.link} style={{ color: textColor, textDecoration: "none" }}>{item.name}</a>
          {index < items.length - 1 && (
            <span style={{ margin: "0 8px", color: separatorColor }}>{separator}</span>
          )}
        </span>
      ))}
    </nav>
  );
};