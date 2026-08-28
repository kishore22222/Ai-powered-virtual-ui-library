// src/components/Calculator/Calculator.jsx
import React, { useState } from "react";
var Calculator = ({
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
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    fontFamily: "system-ui, sans-serif"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: displayColor,
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "24px",
    color: buttonTextColor,
    textAlign: "right"
  } }, result || input || "0"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" } }, ["7", "8", "9", "/"].map((item) => /* @__PURE__ */ React.createElement("button", { key: item, onClick: () => handleButtonClick(item), style: {
    background: buttonColor,
    color: buttonTextColor,
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
  } }, item)), ["4", "5", "6", "*"].map((item) => /* @__PURE__ */ React.createElement("button", { key: item, onClick: () => handleButtonClick(item), style: {
    background: buttonColor,
    color: buttonTextColor,
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
  } }, item)), ["1", "2", "3", "-"].map((item) => /* @__PURE__ */ React.createElement("button", { key: item, onClick: () => handleButtonClick(item), style: {
    background: buttonColor,
    color: buttonTextColor,
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
  } }, item)), ["0", ".", "=", "+"].map((item) => /* @__PURE__ */ React.createElement("button", { key: item, onClick: () => item === "=" ? calculateResult() : handleButtonClick(item), style: {
    background: buttonColor,
    color: buttonTextColor,
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
  } }, item)), /* @__PURE__ */ React.createElement("button", { onClick: clearInput, style: {
    background: buttonColor,
    color: buttonTextColor,
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    gridColumn: "span 4"
  } }, "Clear")));
};

// src/components/Calendar/Calendar.jsx
import React2, { useState as useState2 } from "react";
var Calendar = ({
  month = (/* @__PURE__ */ new Date()).toLocaleString("default", { month: "long" }),
  year = (/* @__PURE__ */ new Date()).getFullYear(),
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const daysInMonth = (month2, year2) => new Date(year2, new Date(Date.parse(month2 + " 1, " + year2)).getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (month2, year2) => new Date(year2, new Date(Date.parse(month2 + " 1, " + year2)).getMonth(), 1).getDay();
  const totalDays = daysInMonth(month, year);
  const firstDay = firstDayOfMonth(month, year);
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(/* @__PURE__ */ React2.createElement("div", { key: `empty-${i}`, style: { width: "40px", height: "40px" } }));
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(/* @__PURE__ */ React2.createElement("div", { key: i, style: { width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", background: bg2, color: accent, margin: "2px" } }, i));
  }
  return /* @__PURE__ */ React2.createElement("div", { style: { background: bg2, borderRadius: "20px", padding: "20px", width: "320px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)", fontFamily: "system-ui,sans-serif" } }, /* @__PURE__ */ React2.createElement("h2", { style: { color: accent, textAlign: "center", margin: "0 0 20px" } }, month + " " + year), /* @__PURE__ */ React2.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" } }, days));
};

// src/components/CountdownTimer/CountdownTimer.jsx
import React3, { useState as useState3, useEffect } from "react";
var CountdownTimer = ({
  targetDate = new Date(Date.now() + 864e5),
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [timeLeft, setTimeLeft] = useState3({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const updateTimer = () => {
      const now = /* @__PURE__ */ new Date();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    const timer = setInterval(updateTimer, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  return /* @__PURE__ */ React3.createElement("div", { style: { background: bg2, borderRadius: "20px", padding: "24px", width: "320px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" } }, /* @__PURE__ */ React3.createElement("h2", { style: { fontSize: "24px", fontWeight: "700", margin: "0 0 16px" } }, "Countdown Timer"), /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React3.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "20px", fontWeight: "600" } }, timeLeft.days), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, "Days")), /* @__PURE__ */ React3.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "20px", fontWeight: "600" } }, timeLeft.hours), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, "Hours")), /* @__PURE__ */ React3.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "20px", fontWeight: "600" } }, timeLeft.minutes), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, "Minutes")), /* @__PURE__ */ React3.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "20px", fontWeight: "600" } }, timeLeft.seconds), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, "Seconds"))));
};

// src/components/ToggleLight/ToggleLight.jsx
import React4, { useState as useState4 } from "react";
var ToggleLight = ({
  label = "Toggle Light",
  accent = "#0ea5e9",
  bg: bg2 = "#0d1117",
  onToggle = () => {
  }
}) => {
  const [isOn, setIsOn] = useState4(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleToggle = () => {
    setIsOn((prev) => !prev);
    onToggle();
  };
  return /* @__PURE__ */ React4.createElement("div", { style: { background: bg2, borderRadius: "20px", padding: "20px", width: "300px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", textAlign: "center" } }, /* @__PURE__ */ React4.createElement("h3", { style: { marginBottom: "10px" } }, label), /* @__PURE__ */ React4.createElement("button", { onClick: handleToggle, style: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    background: isOn ? accent : alpha(accent, 0.5),
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background 0.3s"
  } }, isOn ? "Light On" : "Light Off"));
};

// src/components/DarkToggle/DarkToggle.jsx
import React5, { useState as useState5 } from "react";
var DarkToggle = ({
  initialChecked = false,
  label = "Toggle Dark Mode",
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [isChecked, setIsChecked] = useState5(initialChecked);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React5.createElement("div", { style: { display: "flex", alignItems: "center", background: bg2, borderRadius: "12px", padding: "10px", width: "300px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React5.createElement("label", { style: { color: "#fff", fontSize: "16px", marginRight: "10px" } }, label), /* @__PURE__ */ React5.createElement("div", { onClick: () => setIsChecked(!isChecked), style: {
    width: "50px",
    height: "24px",
    borderRadius: "12px",
    background: isChecked ? accent : "rgba(255,255,255,0.1)",
    position: "relative",
    cursor: "pointer"
  } }, /* @__PURE__ */ React5.createElement("div", { style: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: "0",
    left: isChecked ? "26px" : "0",
    transition: "left 0.3s"
  } })));
};

// src/components/Switch/Switch.jsx
import React6, { useState as useState6 } from "react";
var Switch = ({
  isChecked = false,
  onChange = () => {
  },
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [checked, setChecked] = useState6(isChecked);
  const toggleSwitch = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  return /* @__PURE__ */ React6.createElement("div", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ React6.createElement(
    "div",
    {
      onClick: toggleSwitch,
      style: {
        width: "50px",
        height: "26px",
        borderRadius: "13px",
        background: checked ? accent : "rgba(255,255,255,0.2)",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.3s"
      }
    },
    /* @__PURE__ */ React6.createElement(
      "div",
      {
        style: {
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "#fff",
          position: "absolute",
          top: "2px",
          left: checked ? "26px" : "2px",
          transition: "left 0.3s"
        }
      }
    )
  ), /* @__PURE__ */ React6.createElement("span", { style: { marginLeft: "10px", color: "#fff" } }, checked ? "On" : "Off"));
};

// src/components/Form/Form.jsx
import React7, { useState as useState7 } from "react";
var Form = ({
  title = "Subscribe to our newsletter",
  buttonText = "Subscribe",
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [email, setEmail] = useState7("");
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };
  return /* @__PURE__ */ React7.createElement("div", { style: { background: bg2, borderRadius: "20px", padding: "24px", width: "400px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React7.createElement("h2", { style: { fontSize: "18px", fontWeight: "700", marginBottom: "16px" } }, title), /* @__PURE__ */ React7.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React7.createElement(
    "input",
    {
      type: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "Enter your email",
      required: true,
      style: {
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.08)",
        marginBottom: "12px",
        fontSize: "14px",
        color: "#fff",
        background: "transparent"
      }
    }
  ), /* @__PURE__ */ React7.createElement("button", { type: "submit", style: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer"
  } }, buttonText)));
};

// src/components/Toast/Toast.jsx
import React8, { useState as useState8, useEffect as useEffect2 } from "react";
var Toast = ({
  message = "This is a toast notification!",
  duration = 3e3,
  bg: bg2 = "#0d1117",
  color = "#fff",
  accent = "#e11d48"
}) => {
  const [visible, setVisible] = useState8(false);
  useEffect2(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return /* @__PURE__ */ React8.createElement("div", { style: {
    position: "relative",
    width: "300px",
    margin: "20px auto",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease",
    background: bg2,
    color,
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    display: visible ? "block" : "none"
  } }, /* @__PURE__ */ React8.createElement("span", { style: { fontWeight: "600" } }, message));
};

// src/components/Alert/Alert.jsx
import React9, { useState as useState9 } from "react";
var Alert = ({
  message = "This is an alert message!",
  type = "info",
  accent = "#0ea5e9",
  bg: bg2 = "#0d1117",
  onClose = () => {
  }
}) => {
  const [visible, setVisible] = useState9(true);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  if (!visible) return null;
  return /* @__PURE__ */ React9.createElement("div", { style: {
    background: bg2,
    borderRadius: "12px",
    padding: "16px",
    margin: "16px 0",
    color: "#fff",
    fontFamily: "system-ui,sans-serif",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    border: "1px solid " + alpha(accent, 0.2),
    position: "relative"
  } }, /* @__PURE__ */ React9.createElement("span", null, message), /* @__PURE__ */ React9.createElement(
    "button",
    {
      onClick: () => {
        setVisible(false);
        onClose();
      },
      style: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "transparent",
        border: "none",
        color: accent,
        cursor: "pointer",
        fontSize: "16px"
      }
    },
    "\xD7"
  ));
};

// src/components/Pagination/Pagination.jsx
import React10, { useState as useState10 } from "react";
var Pagination = ({
  totalItems = 100,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange = (page) => {
  }
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [page, setPage] = useState10(currentPage);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };
  return /* @__PURE__ */ React10.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", background: "#0f172a", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React10.createElement("button", { onClick: () => handlePageChange(1), disabled: page === 1, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === 1 ? "not-allowed" : "pointer",
    marginRight: "5px"
  } }, "First"), /* @__PURE__ */ React10.createElement("button", { onClick: () => handlePageChange(page - 1), disabled: page === 1, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === 1 ? "not-allowed" : "pointer",
    marginRight: "5px"
  } }, "Previous"), /* @__PURE__ */ React10.createElement("span", { style: { color: "#fff", margin: "0 10px" } }, page, " / ", totalPages), /* @__PURE__ */ React10.createElement("button", { onClick: () => handlePageChange(page + 1), disabled: page === totalPages, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === totalPages ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === totalPages ? "not-allowed" : "pointer",
    marginLeft: "5px"
  } }, "Next"), /* @__PURE__ */ React10.createElement("button", { onClick: () => handlePageChange(totalPages), disabled: page === totalPages, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === totalPages ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === totalPages ? "not-allowed" : "pointer",
    marginLeft: "5px"
  } }, "Last"));
};

// src/components/Tabs/Tabs.jsx
import React11, { useState as useState11 } from "react";
var Tabs = ({
  tabs = ["Tab 1", "Tab 2", "Tab 3"],
  content = ["Content for Tab 1", "Content for Tab 2", "Content for Tab 3"],
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [activeIndex, setActiveIndex] = useState11(0);
  return /* @__PURE__ */ React11.createElement("div", { style: { background: bg2, borderRadius: "20px", width: "400px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ React11.createElement("div", { style: { display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)" } }, tabs.map((tab, index) => /* @__PURE__ */ React11.createElement(
    "button",
    {
      key: index,
      onClick: () => setActiveIndex(index),
      style: {
        flex: 1,
        padding: "12px",
        background: activeIndex === index ? accent : "transparent",
        color: activeIndex === index ? "#fff" : "rgba(255,255,255,0.75)",
        border: "none",
        borderRadius: "20px 20px 0 0",
        cursor: "pointer",
        fontWeight: activeIndex === index ? "700" : "500",
        transition: "background 0.3s"
      }
    },
    tab
  ))), /* @__PURE__ */ React11.createElement("div", { style: { padding: "20px", color: "#fff" } }, content[activeIndex]));
};

// src/components/Breadcrumb/Breadcrumb.jsx
import React12 from "react";
var Breadcrumb = ({
  items = [{ name: "Home", link: "#" }, { name: "Library", link: "#" }, { name: "Data", link: "#" }],
  separator = ">",
  bg: bg2 = "#0f172a",
  textColor = "#fff",
  separatorColor = "#6366f1"
}) => {
  return /* @__PURE__ */ React12.createElement("nav", { style: { background: bg2, padding: "12px 20px", borderRadius: "12px", color: textColor, fontFamily: "system-ui,sans-serif" } }, items.map((item, index) => /* @__PURE__ */ React12.createElement("span", { key: index, style: { display: "inline-flex", alignItems: "center" } }, /* @__PURE__ */ React12.createElement("a", { href: item.link, style: { color: textColor, textDecoration: "none" } }, item.name), index < items.length - 1 && /* @__PURE__ */ React12.createElement("span", { style: { margin: "0 8px", color: separatorColor } }, separator))));
};

// src/components/Toggle/Toggle.jsx
import React13, { useState as useState12 } from "react";
var Toggle = ({
  isOn = false,
  onToggle = () => {
  },
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [isActive, setIsActive] = useState12(isOn);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle(!isActive);
  };
  return /* @__PURE__ */ React13.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    background: bg2,
    borderRadius: "12px",
    padding: "6px",
    cursor: "pointer",
    width: "60px",
    height: "30px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
    transition: "background 0.3s"
  }, onClick: handleToggle }, /* @__PURE__ */ React13.createElement("div", { style: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: isActive ? accent : "rgba(255,255,255,0.3)",
    transition: "transform 0.3s",
    transform: isActive ? "translateX(30%)" : "translateX(0)"
  } }));
};

// src/components/Accordion/Accordion.jsx
import React14, { useState as useState13 } from "react";
var Accordion = ({
  items = [
    { title: "Section 1", content: "Content for section 1." },
    { title: "Section 2", content: "Content for section 2." },
    { title: "Section 3", content: "Content for section 3." }
  ],
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const [openIndex, setOpenIndex] = useState13(-1);
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return /* @__PURE__ */ React14.createElement("div", { style: { background: bg2, borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", overflow: "hidden", width: "400px" } }, items.map((item, index) => /* @__PURE__ */ React14.createElement("div", { key: index, style: { borderBottom: "1px solid rgba(255,255,255,0.08)" } }, /* @__PURE__ */ React14.createElement(
    "div",
    {
      onClick: () => toggleSection(index),
      style: {
        padding: "16px",
        cursor: "pointer",
        background: openIndex === index ? accent : bg2,
        color: openIndex === index ? "#fff" : "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React14.createElement("span", { style: { fontWeight: "700" } }, item.title),
    /* @__PURE__ */ React14.createElement("span", { style: { fontSize: "14px" } }, openIndex === index ? "-" : "+")
  ), openIndex === index && /* @__PURE__ */ React14.createElement("div", { style: { padding: "16px", background: "rgba(255,255,255,0.05)" } }, item.content))));
};

// src/components/ProgressBar/ProgressBar.jsx
import React15, { useState as useState14, useEffect as useEffect3 } from "react";
var ProgressBar = ({
  progress = 0,
  height = 20,
  bg: bg2 = "#0f172a",
  accent = "#6366f1"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const [currentProgress, setCurrentProgress] = useState14(progress);
  useEffect3(() => {
    const interval = setInterval(() => {
      setCurrentProgress((oldProgress) => {
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
  return /* @__PURE__ */ React15.createElement("div", { style: { background: bg2, borderRadius: "10px", width: "100%", height: height + "px", overflow: "hidden" } }, /* @__PURE__ */ React15.createElement("div", { style: {
    width: currentProgress + "%",
    background: accent,
    height: "100%",
    transition: "width 0.1s ease-in-out"
  } }));
};

// src/components/Tooltip/Tooltip.jsx
import React16, { useState as useState15 } from "react";
var Tooltip = ({
  text = "Tooltip text",
  position = "top",
  accent = "#6366f1",
  bg: bg2 = "#0f172a",
  children = /* @__PURE__ */ React16.createElement("span", { style: { color: "#6366f1" } }, "Hover me")
}) => {
  const [visible, setVisible] = useState15(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React16.createElement("div", { style: { position: "relative", display: "inline-block" } }, /* @__PURE__ */ React16.createElement(
    "div",
    {
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false)
    },
    children
  ), visible && /* @__PURE__ */ React16.createElement("div", { style: {
    position: "absolute",
    bottom: position === "top" ? "100%" : "auto",
    top: position === "bottom" ? "100%" : "auto",
    left: "50%",
    transform: "translateX(-50%)",
    background: bg2,
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    fontFamily: "system-ui,sans-serif",
    whiteSpace: "nowrap",
    zIndex: 1e3
  } }, text));
};

// src/components/Avatar/Avatar.jsx
import React17 from "react";
var Avatar = ({
  imageUrl = "https://via.placeholder.com/150",
  size = "60px",
  borderColor = "#6366f1",
  borderWidth = "4px",
  altText = "User Avatar"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React17.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: "50%",
    overflow: "hidden",
    border: borderWidth + " solid " + borderColor,
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: alpha(borderColor, 0.1)
  } }, /* @__PURE__ */ React17.createElement("img", { src: imageUrl, alt: altText, style: { width: "100%", height: "100%", objectFit: "cover" } }));
};

// src/components/Badge/Badge.jsx
import React18 from "react";
var Badge = ({
  label = "New",
  accent = "#e11d48",
  bg: bg2 = "#0f172a",
  size = "medium"
}) => {
  const sizes = {
    small: { padding: "2px 6px", fontSize: "12px" },
    medium: { padding: "4px 10px", fontSize: "14px" },
    large: { padding: "6px 12px", fontSize: "16px" }
  };
  return /* @__PURE__ */ React18.createElement("span", { style: {
    background: accent,
    color: "#fff",
    borderRadius: "10px",
    fontFamily: "system-ui, sans-serif",
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    display: "inline-block"
  } }, label);
};

// src/components/NotificationCard/NotificationCard.jsx
import React19, { useState as useState16 } from "react";
var NotificationCard = ({
  title = "New Message",
  message = "You have received a new message from John.",
  time = "2 hours ago",
  accent = "#0ea5e9",
  bg: bg2 = "#0d1117",
  onDismiss = () => {
  }
}) => {
  const [hovered, setHovered] = useState16(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React19.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg2,
        borderRadius: "16px",
        padding: "16px",
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        color: "#fff",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)"
      }
    },
    /* @__PURE__ */ React19.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", margin: "0 0 8px" } }, title),
    /* @__PURE__ */ React19.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "0 0 8px" } }, message),
    /* @__PURE__ */ React19.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)" } }, time),
    /* @__PURE__ */ React19.createElement("button", { onClick: onDismiss, style: {
      marginTop: "12px",
      padding: "8px 16px",
      borderRadius: "10px",
      border: "none",
      background: accent,
      color: "#fff",
      fontSize: "14px",
      cursor: "pointer",
      fontFamily: "system-ui,sans-serif"
    } }, "Dismiss")
  );
};

// src/components/BlogCard/BlogCard.jsx
import React20 from "react";
var BlogCard = ({
  title = "Exploring the Depths of the Ocean",
  excerpt = "A journey into the mysteries of the underwater world.",
  author = "Jane Doe",
  date = "October 1, 2023",
  image = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&q=80",
  accent = "#0ea5e9",
  bg: bg2 = "#0f172a",
  onClick = () => {
  }
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React20.createElement("div", { style: {
    background: bg2,
    borderRadius: "20px",
    overflow: "hidden",
    width: "320px",
    cursor: "pointer",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "transform 0.2s, box-shadow 0.2s"
  }, onClick }, /* @__PURE__ */ React20.createElement("div", { style: { position: "relative", width: "100%", height: "180px" } }, /* @__PURE__ */ React20.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ React20.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ React20.createElement("h3", { style: { fontSize: "18px", fontWeight: "700", color: "#fff", margin: "0 0 8px" } }, title), /* @__PURE__ */ React20.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px" } }, excerpt), /* @__PURE__ */ React20.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)" } }, author, " - ", date)));
};

// src/components/TestimonialCard/TestimonialCard.jsx
import React21 from "react";
var TestimonialCard = ({
  image = "https://images.unsplash.com/photo-1506794778163-1a0a4a14b2d0?w=400&q=80",
  name = "John Doe",
  title = "CEO of Company",
  testimonial = "This service has greatly improved our workflow and efficiency, and I couldn't be happier with the results!",
  accent = "#6366f1",
  bg: bg2 = "#0f172a"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React21.createElement("div", { style: {
    background: bg2,
    borderRadius: "20px",
    padding: "24px",
    width: "300px",
    color: "#fff",
    fontFamily: "system-ui,sans-serif",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    position: "relative"
  } }, /* @__PURE__ */ React21.createElement("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" } }, /* @__PURE__ */ React21.createElement("img", { src: image, alt: name, style: { width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" } }), /* @__PURE__ */ React21.createElement("div", null, /* @__PURE__ */ React21.createElement("h4", { style: { margin: "0", fontSize: "16px", fontWeight: "700" } }, name), /* @__PURE__ */ React21.createElement("p", { style: { margin: "0", fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, title))), /* @__PURE__ */ React21.createElement("p", { style: { fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.85)" } }, testimonial), /* @__PURE__ */ React21.createElement("div", { style: { position: "absolute", bottom: "20px", right: "20px", width: "40px", height: "40px", borderRadius: "50%", background: alpha(accent, 0.1), display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React21.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: accent, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React21.createElement("path", { d: "M3 12l2 2 4-4m12 0l-2 2-4-4" }))));
};
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  BlogCard,
  Breadcrumb,
  Calculator,
  Calendar,
  CountdownTimer,
  DarkToggle,
  Form,
  NotificationCard,
  Pagination,
  ProgressBar,
  Switch,
  Tabs,
  TestimonialCard,
  Toast,
  Toggle,
  ToggleLight,
  Tooltip
};
