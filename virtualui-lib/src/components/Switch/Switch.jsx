import React, { useState } from "react";

export const Switch = ({
  isChecked = false,
  onChange = () => {},
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [checked, setChecked] = useState(isChecked);
  const toggleSwitch = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        onClick={toggleSwitch}
        style={{
          width: "50px",
          height: "26px",
          borderRadius: "13px",
          background: checked ? accent : "rgba(255,255,255,0.2)",
          position: "relative",
          cursor: "pointer",
          transition: "background 0.3s"
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "#fff",
            position: "absolute",
            top: "2px",
            left: checked ? "26px" : "2px",
            transition: "left 0.3s"
          }}
        />
      </div>
      <span style={{ marginLeft: "10px", color: "#fff" }}>{checked ? "On" : "Off"}</span>
    </div>
  );
};