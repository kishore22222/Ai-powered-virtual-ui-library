import React, { useState } from "react";

export const Calculator = ({
  bg = "#0f172a",
  buttonColor = "#6366f1",
  buttonTextColor = "#fff",
  displayColor = "#fff"
}) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      padding: "20px",
      width: "300px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div style={{
        background: displayColor,
        borderRadius: "12px",
        padding: "10px",
        marginBottom: "10px",
        fontSize: "24px",
        color: buttonTextColor,
        textAlign: "right"
      }}>
        {result || input || "0"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={{
            background: buttonColor,
            color: buttonTextColor,
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px"
          }}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={{
            background: buttonColor,
            color: buttonTextColor,
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px"
          }}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)} style={{
            background: buttonColor,
            color: buttonTextColor,
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px"
          }}>
            {item}
          </button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={() => item === '=' ? calculateResult() : handleButtonClick(item)} style={{
            background: buttonColor,
            color: buttonTextColor,
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px"
          }}>
            {item}
          </button>
        ))}
        <button onClick={clearInput} style={{
          background: buttonColor,
          color: buttonTextColor,
          padding: "15px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
          gridColumn: "span 4"
        }}>
          Clear
        </button>
      </div>
    </div>
  );
};