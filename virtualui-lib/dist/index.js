var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  BlogCard: () => BlogCard,
  Breadcrumb: () => Breadcrumb,
  Form: () => Form,
  NotificationCard: () => NotificationCard,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  Tabs: () => Tabs,
  TestimonialCard: () => TestimonialCard,
  Toast: () => Toast,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(index_exports);

// src/components/Form/Form.jsx
var import_react = __toESM(require("react"));
var Form = ({
  title = "Subscribe to our newsletter",
  buttonText = "Subscribe",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [email, setEmail] = (0, import_react.useState)("");
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { background: bg, borderRadius: "20px", padding: "24px", width: "400px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ import_react.default.createElement("h2", { style: { fontSize: "18px", fontWeight: "700", marginBottom: "16px" } }, title), /* @__PURE__ */ import_react.default.createElement("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ import_react.default.createElement(
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
  ), /* @__PURE__ */ import_react.default.createElement("button", { type: "submit", style: {
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
var import_react2 = __toESM(require("react"));
var Toast = ({
  message = "This is a toast notification!",
  duration = 3e3,
  bg = "#0d1117",
  color = "#fff",
  accent = "#e11d48"
}) => {
  const [visible, setVisible] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  return /* @__PURE__ */ import_react2.default.createElement("div", { style: {
    position: "relative",
    width: "300px",
    margin: "20px auto",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.5s ease",
    background: bg,
    color,
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    display: visible ? "block" : "none"
  } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontWeight: "600" } }, message));
};

// src/components/Alert/Alert.jsx
var import_react3 = __toESM(require("react"));
var Alert = ({
  message = "This is an alert message!",
  type = "info",
  accent = "#0ea5e9",
  bg = "#0d1117",
  onClose = () => {
  }
}) => {
  const [visible, setVisible] = (0, import_react3.useState)(true);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  if (!visible) return null;
  return /* @__PURE__ */ import_react3.default.createElement("div", { style: {
    background: bg,
    borderRadius: "12px",
    padding: "16px",
    margin: "16px 0",
    color: "#fff",
    fontFamily: "system-ui,sans-serif",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    border: "1px solid " + alpha(accent, 0.2),
    position: "relative"
  } }, /* @__PURE__ */ import_react3.default.createElement("span", null, message), /* @__PURE__ */ import_react3.default.createElement(
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
var import_react4 = __toESM(require("react"));
var Pagination = ({
  totalItems = 100,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange = (page) => {
  }
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [page, setPage] = (0, import_react4.useState)(currentPage);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", background: "#0f172a", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => handlePageChange(1), disabled: page === 1, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === 1 ? "not-allowed" : "pointer",
    marginRight: "5px"
  } }, "First"), /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => handlePageChange(page - 1), disabled: page === 1, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === 1 ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === 1 ? "not-allowed" : "pointer",
    marginRight: "5px"
  } }, "Previous"), /* @__PURE__ */ import_react4.default.createElement("span", { style: { color: "#fff", margin: "0 10px" } }, page, " / ", totalPages), /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => handlePageChange(page + 1), disabled: page === totalPages, style: {
    padding: "10px 15px",
    borderRadius: "10px",
    background: page === totalPages ? alpha("#6366f1", 0.5) : alpha("#6366f1", 1),
    color: "#fff",
    border: "none",
    cursor: page === totalPages ? "not-allowed" : "pointer",
    marginLeft: "5px"
  } }, "Next"), /* @__PURE__ */ import_react4.default.createElement("button", { onClick: () => handlePageChange(totalPages), disabled: page === totalPages, style: {
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
var import_react5 = __toESM(require("react"));
var Tabs = ({
  tabs = ["Tab 1", "Tab 2", "Tab 3"],
  content = ["Content for Tab 1", "Content for Tab 2", "Content for Tab 3"],
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [activeIndex, setActiveIndex] = (0, import_react5.useState)(0);
  return /* @__PURE__ */ import_react5.default.createElement("div", { style: { background: bg, borderRadius: "20px", width: "400px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" } }, /* @__PURE__ */ import_react5.default.createElement("div", { style: { display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)" } }, tabs.map((tab, index) => /* @__PURE__ */ import_react5.default.createElement(
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
  ))), /* @__PURE__ */ import_react5.default.createElement("div", { style: { padding: "20px", color: "#fff" } }, content[activeIndex]));
};

// src/components/Breadcrumb/Breadcrumb.jsx
var import_react6 = __toESM(require("react"));
var Breadcrumb = ({
  items = [{ name: "Home", link: "#" }, { name: "Library", link: "#" }, { name: "Data", link: "#" }],
  separator = ">",
  bg = "#0f172a",
  textColor = "#fff",
  separatorColor = "#6366f1"
}) => {
  return /* @__PURE__ */ import_react6.default.createElement("nav", { style: { background: bg, padding: "12px 20px", borderRadius: "12px", color: textColor, fontFamily: "system-ui,sans-serif" } }, items.map((item, index) => /* @__PURE__ */ import_react6.default.createElement("span", { key: index, style: { display: "inline-flex", alignItems: "center" } }, /* @__PURE__ */ import_react6.default.createElement("a", { href: item.link, style: { color: textColor, textDecoration: "none" } }, item.name), index < items.length - 1 && /* @__PURE__ */ import_react6.default.createElement("span", { style: { margin: "0 8px", color: separatorColor } }, separator))));
};

// src/components/Toggle/Toggle.jsx
var import_react7 = __toESM(require("react"));
var Toggle = ({
  isOn = false,
  onToggle = () => {
  },
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [isActive, setIsActive] = (0, import_react7.useState)(isOn);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle(!isActive);
  };
  return /* @__PURE__ */ import_react7.default.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    background: bg,
    borderRadius: "12px",
    padding: "6px",
    cursor: "pointer",
    width: "60px",
    height: "30px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
    transition: "background 0.3s"
  }, onClick: handleToggle }, /* @__PURE__ */ import_react7.default.createElement("div", { style: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: isActive ? accent : "rgba(255,255,255,0.3)",
    transition: "transform 0.3s",
    transform: isActive ? "translateX(30%)" : "translateX(0)"
  } }));
};

// src/components/Accordion/Accordion.jsx
var import_react8 = __toESM(require("react"));
var Accordion = ({
  items = [
    { title: "Section 1", content: "Content for section 1." },
    { title: "Section 2", content: "Content for section 2." },
    { title: "Section 3", content: "Content for section 3." }
  ],
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [openIndex, setOpenIndex] = (0, import_react8.useState)(-1);
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return /* @__PURE__ */ import_react8.default.createElement("div", { style: { background: bg, borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", overflow: "hidden", width: "400px" } }, items.map((item, index) => /* @__PURE__ */ import_react8.default.createElement("div", { key: index, style: { borderBottom: "1px solid rgba(255,255,255,0.08)" } }, /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      onClick: () => toggleSection(index),
      style: {
        padding: "16px",
        cursor: "pointer",
        background: openIndex === index ? accent : bg,
        color: openIndex === index ? "#fff" : "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ import_react8.default.createElement("span", { style: { fontWeight: "700" } }, item.title),
    /* @__PURE__ */ import_react8.default.createElement("span", { style: { fontSize: "14px" } }, openIndex === index ? "-" : "+")
  ), openIndex === index && /* @__PURE__ */ import_react8.default.createElement("div", { style: { padding: "16px", background: "rgba(255,255,255,0.05)" } }, item.content))));
};

// src/components/ProgressBar/ProgressBar.jsx
var import_react9 = __toESM(require("react"));
var ProgressBar = ({
  progress = 0,
  height = 20,
  bg = "#0f172a",
  accent = "#6366f1"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const [currentProgress, setCurrentProgress] = (0, import_react9.useState)(progress);
  (0, import_react9.useEffect)(() => {
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
  return /* @__PURE__ */ import_react9.default.createElement("div", { style: { background: bg, borderRadius: "10px", width: "100%", height: height + "px", overflow: "hidden" } }, /* @__PURE__ */ import_react9.default.createElement("div", { style: {
    width: currentProgress + "%",
    background: accent,
    height: "100%",
    transition: "width 0.1s ease-in-out"
  } }));
};

// src/components/Tooltip/Tooltip.jsx
var import_react10 = __toESM(require("react"));
var Tooltip = ({
  text = "Tooltip text",
  position = "top",
  accent = "#6366f1",
  bg = "#0f172a",
  children = /* @__PURE__ */ import_react10.default.createElement("span", { style: { color: "#6366f1" } }, "Hover me")
}) => {
  const [visible, setVisible] = (0, import_react10.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react10.default.createElement("div", { style: { position: "relative", display: "inline-block" } }, /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false)
    },
    children
  ), visible && /* @__PURE__ */ import_react10.default.createElement("div", { style: {
    position: "absolute",
    bottom: position === "top" ? "100%" : "auto",
    top: position === "bottom" ? "100%" : "auto",
    left: "50%",
    transform: "translateX(-50%)",
    background: bg,
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
var import_react11 = __toESM(require("react"));
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
  return /* @__PURE__ */ import_react11.default.createElement("div", { style: {
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
  } }, /* @__PURE__ */ import_react11.default.createElement("img", { src: imageUrl, alt: altText, style: { width: "100%", height: "100%", objectFit: "cover" } }));
};

// src/components/Badge/Badge.jsx
var import_react12 = __toESM(require("react"));
var Badge = ({
  label = "New",
  accent = "#e11d48",
  bg = "#0f172a",
  size = "medium"
}) => {
  const sizes = {
    small: { padding: "2px 6px", fontSize: "12px" },
    medium: { padding: "4px 10px", fontSize: "14px" },
    large: { padding: "6px 12px", fontSize: "16px" }
  };
  return /* @__PURE__ */ import_react12.default.createElement("span", { style: {
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
var import_react13 = __toESM(require("react"));
var NotificationCard = ({
  title = "New Message",
  message = "You have received a new message from John.",
  time = "2 hours ago",
  accent = "#0ea5e9",
  bg = "#0d1117",
  onDismiss = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react13.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react13.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
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
    /* @__PURE__ */ import_react13.default.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", margin: "0 0 8px" } }, title),
    /* @__PURE__ */ import_react13.default.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: "0 0 8px" } }, message),
    /* @__PURE__ */ import_react13.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)" } }, time),
    /* @__PURE__ */ import_react13.default.createElement("button", { onClick: onDismiss, style: {
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
var import_react14 = __toESM(require("react"));
var BlogCard = ({
  title = "Exploring the Depths of the Ocean",
  excerpt = "A journey into the mysteries of the underwater world.",
  author = "Jane Doe",
  date = "October 1, 2023",
  image = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&q=80",
  accent = "#0ea5e9",
  bg = "#0f172a",
  onClick = () => {
  }
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react14.default.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    overflow: "hidden",
    width: "320px",
    cursor: "pointer",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "transform 0.2s, box-shadow 0.2s"
  }, onClick }, /* @__PURE__ */ import_react14.default.createElement("div", { style: { position: "relative", width: "100%", height: "180px" } }, /* @__PURE__ */ import_react14.default.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover" } })), /* @__PURE__ */ import_react14.default.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ import_react14.default.createElement("h3", { style: { fontSize: "18px", fontWeight: "700", color: "#fff", margin: "0 0 8px" } }, title), /* @__PURE__ */ import_react14.default.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: "0 0 8px" } }, excerpt), /* @__PURE__ */ import_react14.default.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)" } }, author, " - ", date)));
};

// src/components/TestimonialCard/TestimonialCard.jsx
var import_react15 = __toESM(require("react"));
var TestimonialCard = ({
  image = "https://images.unsplash.com/photo-1506794778163-1a0a4a14b2d0?w=400&q=80",
  name = "John Doe",
  title = "CEO of Company",
  testimonial = "This service has greatly improved our workflow and efficiency, and I couldn't be happier with the results!",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react15.default.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    padding: "24px",
    width: "300px",
    color: "#fff",
    fontFamily: "system-ui,sans-serif",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    position: "relative"
  } }, /* @__PURE__ */ import_react15.default.createElement("div", { style: { display: "flex", alignItems: "center", marginBottom: "16px" } }, /* @__PURE__ */ import_react15.default.createElement("img", { src: image, alt: name, style: { width: "50px", height: "50px", borderRadius: "50%", marginRight: "12px" } }), /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement("h4", { style: { margin: "0", fontSize: "16px", fontWeight: "700" } }, name), /* @__PURE__ */ import_react15.default.createElement("p", { style: { margin: "0", fontSize: "12px", color: "rgba(255,255,255,0.6)" } }, title))), /* @__PURE__ */ import_react15.default.createElement("p", { style: { fontSize: "14px", lineHeight: 1.5, color: "rgba(255,255,255,0.85)" } }, testimonial), /* @__PURE__ */ import_react15.default.createElement("div", { style: { position: "absolute", bottom: "20px", right: "20px", width: "40px", height: "40px", borderRadius: "50%", background: alpha(accent, 0.1), display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ import_react15.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: accent, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react15.default.createElement("path", { d: "M3 12l2 2 4-4m12 0l-2 2-4-4" }))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Alert,
  Avatar,
  Badge,
  BlogCard,
  Breadcrumb,
  Form,
  NotificationCard,
  Pagination,
  ProgressBar,
  Tabs,
  TestimonialCard,
  Toast,
  Toggle,
  Tooltip
});
