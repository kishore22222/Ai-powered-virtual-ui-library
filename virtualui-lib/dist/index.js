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
  Button: () => Button,
  CarCard: () => CarCard,
  Card: () => Card,
  EcommerceCard: () => EcommerceCard,
  HelloCard: () => HelloCard,
  Kishore: () => Kishore,
  Loader: () => Loader,
  LoadingCard: () => LoadingCard,
  MariCard: () => MariCard,
  PricingCard: () => PricingCard,
  ProfileCard: () => ProfileCard,
  StatsCard: () => StatsCard,
  TravelCard: () => TravelCard
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.jsx
var import_react = require("react");
var import_react2 = __toESM(require("react"));
var Button = ({
  label = "Click Me",
  onClick = () => {
  },
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  primaryColor = "#6366f1",
  dangerColor = "#ef4444",
  icon = null
}) => {
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
  const [isPressed, setIsPressed] = (0, import_react.useState)(false);
  const sizeMap = {
    sm: { padding: "6px 14px", fontSize: "13px", borderRadius: "6px" },
    md: { padding: "10px 20px", fontSize: "15px", borderRadius: "8px" },
    lg: { padding: "14px 28px", fontSize: "17px", borderRadius: "10px" }
  };
  const { padding, fontSize, borderRadius } = sizeMap[size] || sizeMap.md;
  const variantStyles = {
    primary: {
      background: isHovered ? shadeColor(primaryColor, -15) : primaryColor,
      color: "#fff",
      border: "none"
    },
    outline: {
      background: isHovered ? `${primaryColor}18` : "transparent",
      color: primaryColor,
      border: `2px solid ${primaryColor}`
    },
    ghost: {
      background: isHovered ? `${primaryColor}12` : "transparent",
      color: primaryColor,
      border: "none"
    },
    danger: {
      background: isHovered ? shadeColor(dangerColor, -15) : dangerColor,
      color: "#fff",
      border: "none"
    }
  };
  const base = variantStyles[variant] || variantStyles.primary;
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding,
    fontSize,
    borderRadius,
    fontWeight: 600,
    fontFamily: "system-ui, -apple-system, sans-serif",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    transform: isPressed && !disabled ? "scale(0.97)" : "scale(1)",
    transition: "background 0.15s ease, transform 0.1s ease, opacity 0.15s ease",
    outline: "none",
    letterSpacing: "0.01em",
    userSelect: "none",
    ...base
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      style,
      onClick: !disabled ? onClick : void 0,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => {
        setIsHovered(false);
        setIsPressed(false);
      },
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      disabled
    },
    icon && /* @__PURE__ */ import_react2.default.createElement("span", { style: { display: "flex", alignItems: "center" } }, icon),
    label
  );
};
function shadeColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 255) + amt));
  const B = Math.min(255, Math.max(0, (num & 255) + amt));
  return `rgb(${R}, ${G}, ${B})`;
}

// src/components/Card/Card.jsx
var import_react3 = require("react");
var import_react4 = __toESM(require("react"));
var Card = ({
  title = "Card Title",
  description = "This is a short description that gives context about the card content.",
  image = null,
  badge = null,
  badgeColor = "#6366f1",
  actionLabel = "Learn More",
  onAction = () => {
  },
  footer = null,
  accentColor = "#6366f1",
  width = "320px",
  shadow = true
}) => {
  const [hovered, setIsHovered] = (0, import_react3.useState)(false);
  const [btnHovered, setBtnHovered] = (0, import_react3.useState)(false);
  const styles = {
    card: {
      width,
      borderRadius: "14px",
      overflow: "hidden",
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: shadow ? hovered ? "0 12px 32px rgba(0,0,0,0.13)" : "0 2px 12px rgba(0,0,0,0.07)" : "none",
      transform: hovered ? "translateY(-4px)" : "translateY(0)",
      transition: "box-shadow 0.22s ease, transform 0.22s ease",
      fontFamily: "system-ui, -apple-system, sans-serif",
      display: "flex",
      flexDirection: "column"
    },
    accentBar: {
      height: "4px",
      background: accentColor
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      display: "block"
    },
    imagePlaceholder: {
      width: "100%",
      height: "160px",
      background: `linear-gradient(135deg, ${accentColor}22 0%, ${accentColor}44 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    body: {
      padding: "20px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    },
    badgeRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    badge: {
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: "999px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      background: `${badgeColor}18`,
      color: badgeColor
    },
    title: {
      margin: 0,
      fontSize: "17px",
      fontWeight: 700,
      color: "#111827",
      lineHeight: 1.3
    },
    description: {
      margin: 0,
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: 1.6,
      flex: 1
    },
    btn: {
      marginTop: "6px",
      padding: "9px 18px",
      borderRadius: "8px",
      border: "none",
      background: btnHovered ? shadeColor2(accentColor, -15) : accentColor,
      color: "#fff",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      alignSelf: "flex-start",
      transition: "background 0.15s ease",
      letterSpacing: "0.01em"
    },
    footer: {
      borderTop: "1px solid #f3f4f6",
      padding: "12px 20px",
      fontSize: "13px",
      color: "#9ca3af",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  };
  return /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      style: styles.card,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ import_react4.default.createElement("div", { style: styles.accentBar }),
    image ? /* @__PURE__ */ import_react4.default.createElement("img", { src: image, alt: title, style: styles.image }) : /* @__PURE__ */ import_react4.default.createElement("div", { style: styles.imagePlaceholder }, /* @__PURE__ */ import_react4.default.createElement("svg", { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", stroke: accentColor, strokeWidth: "1.5", opacity: "0.6" }, /* @__PURE__ */ import_react4.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), /* @__PURE__ */ import_react4.default.createElement("path", { d: "M21 15l-5-5L5 21" }))),
    /* @__PURE__ */ import_react4.default.createElement("div", { style: styles.body }, badge && /* @__PURE__ */ import_react4.default.createElement("div", { style: styles.badgeRow }, /* @__PURE__ */ import_react4.default.createElement("span", { style: styles.badge }, badge)), /* @__PURE__ */ import_react4.default.createElement("h3", { style: styles.title }, title), /* @__PURE__ */ import_react4.default.createElement("p", { style: styles.description }, description), actionLabel && /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        style: styles.btn,
        onClick: onAction,
        onMouseEnter: () => setBtnHovered(true),
        onMouseLeave: () => setBtnHovered(false)
      },
      actionLabel
    )),
    footer && /* @__PURE__ */ import_react4.default.createElement("div", { style: styles.footer }, footer)
  );
};
function shadeColor2(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 255) + amt));
  const B = Math.min(255, Math.max(0, (num & 255) + amt));
  return `rgb(${R}, ${G}, ${B})`;
}

// src/components/Profilecard/ProfileCard.jsx
var import_react5 = require("react");
var import_react6 = __toESM(require("react"));
var ProfileCard = ({
  name = "Kishore S",
  role = "Full Stack Developer",
  bio = "Building scalable web apps with MERN Stack. Passionate about clean code and great UX.",
  avatar = null,
  accentColor = "#6366f1",
  stats = [
    { label: "Projects", value: "12" },
    { label: "Commits", value: "340" },
    { label: "Stars", value: "89" }
  ],
  socials = [
    { icon: "github", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "twitter", url: "#" }
  ],
  onFollow = () => {
  },
  onMessage = () => {
  },
  width = "320px"
}) => {
  const [followed, setFollowed] = (0, import_react5.useState)(false);
  const [hoveredSocial, setHoveredSocial] = (0, import_react5.useState)(null);
  const [btnHovered, setBtnHovered] = (0, import_react5.useState)(null);
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const icons = {
    github: /* @__PURE__ */ import_react6.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" })),
    linkedin: /* @__PURE__ */ import_react6.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" }), /* @__PURE__ */ import_react6.default.createElement("circle", { cx: "4", cy: "4", r: "2" })),
    twitter: /* @__PURE__ */ import_react6.default.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor" }, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.17 9.17 0 0023 3z" }))
  };
  const s = {
    wrapper: {
      width,
      borderRadius: "18px",
      overflow: "hidden",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "#fff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
    },
    banner: {
      height: "90px",
      background: `linear-gradient(135deg, ${accentColor} 0%, ${shadeColor3(accentColor, 30)} 100%)`,
      position: "relative"
    },
    avatarWrap: {
      position: "absolute",
      bottom: "-36px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "76px",
      height: "76px",
      borderRadius: "50%",
      border: "4px solid #fff",
      overflow: "hidden",
      background: accentColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.12)"
    },
    initials: {
      color: "#fff",
      fontSize: "26px",
      fontWeight: 800,
      letterSpacing: "-0.5px"
    },
    body: {
      padding: "48px 24px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px"
    },
    name: {
      margin: 0,
      fontSize: "19px",
      fontWeight: 700,
      color: "#111827"
    },
    role: {
      margin: 0,
      fontSize: "13px",
      fontWeight: 600,
      color: accentColor,
      letterSpacing: "0.03em"
    },
    bio: {
      margin: "6px 0 0",
      fontSize: "13.5px",
      color: "#6b7280",
      textAlign: "center",
      lineHeight: 1.6
    },
    statsRow: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      margin: "16px 0 4px",
      padding: "14px 0",
      borderTop: "1px solid #f3f4f6",
      borderBottom: "1px solid #f3f4f6"
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2px"
    },
    statValue: {
      fontSize: "18px",
      fontWeight: 800,
      color: "#111827"
    },
    statLabel: {
      fontSize: "11px",
      color: "#9ca3af",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontWeight: 600
    },
    socialsRow: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      margin: "10px 0 4px"
    },
    socialBtn: (key) => ({
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: hoveredSocial === key ? accentColor : "#f3f4f6",
      color: hoveredSocial === key ? "#fff" : "#6b7280",
      border: "none",
      cursor: "pointer",
      transition: "background 0.15s, color 0.15s",
      textDecoration: "none"
    }),
    actions: {
      display: "flex",
      gap: "10px",
      width: "100%",
      marginTop: "14px"
    },
    followBtn: {
      flex: 1,
      padding: "9px 0",
      borderRadius: "9px",
      border: "none",
      background: followed ? "#f3f4f6" : btnHovered === "follow" ? shadeColor3(accentColor, -15) : accentColor,
      color: followed ? "#6b7280" : "#fff",
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      transition: "background 0.15s, color 0.15s"
    },
    msgBtn: {
      flex: 1,
      padding: "9px 0",
      borderRadius: "9px",
      border: `2px solid ${accentColor}`,
      background: btnHovered === "msg" ? `${accentColor}12` : "transparent",
      color: accentColor,
      fontWeight: 700,
      fontSize: "14px",
      cursor: "pointer",
      transition: "background 0.15s"
    }
  };
  return /* @__PURE__ */ import_react6.default.createElement("div", { style: s.wrapper }, /* @__PURE__ */ import_react6.default.createElement("div", { style: s.banner }, /* @__PURE__ */ import_react6.default.createElement("div", { style: s.avatarWrap }, avatar ? /* @__PURE__ */ import_react6.default.createElement("img", { src: avatar, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ import_react6.default.createElement("span", { style: s.initials }, initials))), /* @__PURE__ */ import_react6.default.createElement("div", { style: s.body }, /* @__PURE__ */ import_react6.default.createElement("h2", { style: s.name }, name), /* @__PURE__ */ import_react6.default.createElement("p", { style: s.role }, role), /* @__PURE__ */ import_react6.default.createElement("p", { style: s.bio }, bio), /* @__PURE__ */ import_react6.default.createElement("div", { style: s.statsRow }, stats.map((stat) => /* @__PURE__ */ import_react6.default.createElement("div", { key: stat.label, style: s.statItem }, /* @__PURE__ */ import_react6.default.createElement("span", { style: s.statValue }, stat.value), /* @__PURE__ */ import_react6.default.createElement("span", { style: s.statLabel }, stat.label)))), /* @__PURE__ */ import_react6.default.createElement("div", { style: s.socialsRow }, socials.map((social) => /* @__PURE__ */ import_react6.default.createElement(
    "a",
    {
      key: social.icon,
      href: social.url,
      target: "_blank",
      rel: "noreferrer",
      style: s.socialBtn(social.icon),
      onMouseEnter: () => setHoveredSocial(social.icon),
      onMouseLeave: () => setHoveredSocial(null)
    },
    icons[social.icon] || "\u{1F517}"
  ))), /* @__PURE__ */ import_react6.default.createElement("div", { style: s.actions }, /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      style: s.followBtn,
      onClick: () => {
        setFollowed(!followed);
        onFollow();
      },
      onMouseEnter: () => setBtnHovered("follow"),
      onMouseLeave: () => setBtnHovered(null)
    },
    followed ? "\u2713 Following" : "+ Follow"
  ), /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      style: s.msgBtn,
      onClick: onMessage,
      onMouseEnter: () => setBtnHovered("msg"),
      onMouseLeave: () => setBtnHovered(null)
    },
    "Message"
  ))));
};
function shadeColor3(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 255) + amt));
  const B = Math.min(255, Math.max(0, (num & 255) + amt));
  return `rgb(${R}, ${G}, ${B})`;
}

// src/components/EcommerceCard/EcommerceCard.jsx
var import_react7 = __toESM(require("react"));
var EcommerceCard = ({
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  title = "Wireless Headphones",
  price = 99.99,
  currency = "$",
  rating = 4.5,
  reviews = 120,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react7.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { position: "relative", width: "100%", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ import_react7.default.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ import_react7.default.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } })),
    /* @__PURE__ */ import_react7.default.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ import_react7.default.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 } }, title), /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" } }, /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "2px" } }, [1, 2, 3, 4, 5].map((_, i) => /* @__PURE__ */ import_react7.default.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", stroke: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react7.default.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })))), /* @__PURE__ */ import_react7.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)" } }, "(", reviews, ")")), /* @__PURE__ */ import_react7.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ import_react7.default.createElement("div", { style: { fontSize: "20px", fontWeight: "800", color: accent } }, currency, price), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: { padding: "8px 18px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "Add to Cart"
    )))
  );
};

// src/components/Kishore/Kishore.jsx
var import_react8 = __toESM(require("react"));
var Kishore = ({
  title = "Premium Access",
  description = "Unlock all features with our premium plan",
  price = 49,
  currency = "$",
  period = "per month",
  accent = "#7c3aed",
  bg = "#0f172a",
  features = ["24/7 Support", "Unlimited Storage", "Advanced Analytics", "Custom Themes"],
  buttonText = "Subscribe Now",
  onButtonClick = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react8.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        padding: "30px",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.5)" : "0 10px 40px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-5px)" : "none"
      }
    },
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: "24px", fontWeight: "800", color: "#fff", marginBottom: "8px" } }, title),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: "14px", color: "rgba(255,255,255,0.6)", marginBottom: "24px" } }, description),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "4px" } }, /* @__PURE__ */ import_react8.default.createElement("span", { style: { fontSize: "20px", fontWeight: "600", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 } }, currency), /* @__PURE__ */ import_react8.default.createElement("span", { style: { fontSize: "48px", fontWeight: "800", lineHeight: 1, color: "#fff" } }, price)),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "30px" } }, period),
    /* @__PURE__ */ import_react8.default.createElement("div", { style: { height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "24px" } }),
    /* @__PURE__ */ import_react8.default.createElement("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: "12px" } }, features.map((feature, index) => /* @__PURE__ */ import_react8.default.createElement("li", { key: index, style: { display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "rgba(255,255,255,0.8)" } }, /* @__PURE__ */ import_react8.default.createElement("div", { style: { width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: alpha(accent, 0.2), border: "1px solid " + alpha(accent, 0.5) } }, /* @__PURE__ */ import_react8.default.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", stroke: accent, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react8.default.createElement("polyline", { points: "1.5,6 4.5,9 10.5,3" }))), feature))),
    /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        onClick: onButtonClick,
        style: {
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "system-ui,sans-serif",
          transition: "transform 0.2s",
          transform: hovered ? "scale(1.02)" : "none"
        }
      },
      buttonText
    )
  );
};

// src/components/MariCard/MariCard.jsx
var import_react9 = __toESM(require("react"));
var MariCard = ({
  title = "Mari's Corner",
  description = "A cozy space for creative thoughts and ideas",
  image = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  accent = "#e11d48",
  bg = "#0f172a",
  onButtonClick = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react9.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react9.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.6)" : "0 10px 30px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ import_react9.default.createElement("div", { style: { position: "relative", height: "180px", overflow: "hidden" } }, /* @__PURE__ */ import_react9.default.createElement(
      "img",
      {
        src: image,
        alt: title,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)"
        }
      }
    ), /* @__PURE__ */ import_react9.default.createElement("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(to bottom, transparent 0%, " + alpha(bg, 0.7) + " 100%)"
    } })),
    /* @__PURE__ */ import_react9.default.createElement("div", { style: { padding: "20px" } }, /* @__PURE__ */ import_react9.default.createElement("h2", { style: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#fff",
      margin: "0 0 8px",
      letterSpacing: "0.5px"
    } }, title), /* @__PURE__ */ import_react9.default.createElement("p", { style: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.5,
      margin: "0 0 20px"
    } }, description), /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        onClick: onButtonClick,
        style: {
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: alpha(accent, 0.9),
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          transition: "all 0.2s ease",
          transform: hovered ? "scale(1.02)" : "none"
        }
      },
      "Explore More"
    ))
  );
};

// src/components/CarCard/CarCard.jsx
var import_react10 = __toESM(require("react"));
var CarCard = ({
  image = "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&q=80",
  make = "Tesla",
  model = "Model S",
  year = "2023",
  price = 89990,
  mileage = 1200,
  transmission = "Automatic",
  fuel = "Electric",
  accent = "#0ea5e9",
  bg = "#0f172a",
  onButtonClick = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react10.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react10.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "16px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ import_react10.default.createElement("div", { style: { position: "relative", width: "100%", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ import_react10.default.createElement("img", { src: image, alt: make + " " + model, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ import_react10.default.createElement("div", { style: { position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.9), fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" } }, year)),
    /* @__PURE__ */ import_react10.default.createElement("div", { style: { padding: "20px" } }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } }, /* @__PURE__ */ import_react10.default.createElement("h3", { style: { fontSize: "18px", fontWeight: "800", color: "#fff", margin: 0 } }, make, " ", model), /* @__PURE__ */ import_react10.default.createElement("div", { style: { fontSize: "18px", fontWeight: "800", color: accent } }, "$ ", price.toLocaleString())), /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", gap: "16px", marginBottom: "20px" } }, /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.4)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react10.default.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), /* @__PURE__ */ import_react10.default.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })), /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.4)" } }, mileage.toLocaleString(), " mi")), /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.4)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ import_react10.default.createElement("polyline", { points: "12 6 12 12 16 14" })), /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.4)" } }, transmission)), /* @__PURE__ */ import_react10.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ import_react10.default.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.4)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react10.default.createElement("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }), /* @__PURE__ */ import_react10.default.createElement("path", { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }), /* @__PURE__ */ import_react10.default.createElement("line", { x1: "6", y1: "1", x2: "6", y2: "4" }), /* @__PURE__ */ import_react10.default.createElement("line", { x1: "10", y1: "1", x2: "10", y2: "4" }), /* @__PURE__ */ import_react10.default.createElement("line", { x1: "14", y1: "1", x2: "14", y2: "4" })), /* @__PURE__ */ import_react10.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.4)" } }, fuel))), /* @__PURE__ */ import_react10.default.createElement(
      "button",
      {
        onClick: onButtonClick,
        style: { width: "100%", padding: "12px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "View Details"
    ))
  );
};

// src/components/TravelCard/TravelCard.jsx
var import_react11 = __toESM(require("react"));
var TravelCard = ({
  image = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  destination = "Swiss Alps",
  duration = "7 Days",
  price = "$1200",
  accent = "#6366f1",
  bg = "#0f172a",
  onBookClick = () => {
  }
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react11.default.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    overflow: "hidden",
    width: "280px",
    border: "1px solid rgba(255,255,255,0.07)",
    fontFamily: "system-ui,sans-serif",
    position: "relative",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
  } }, /* @__PURE__ */ import_react11.default.createElement("div", { style: { position: "relative", width: "100%", height: "180px", overflow: "hidden" } }, /* @__PURE__ */ import_react11.default.createElement("img", { src: image, alt: destination, style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ import_react11.default.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } }), /* @__PURE__ */ import_react11.default.createElement("div", { style: { position: "absolute", bottom: "12px", left: "12px", fontSize: "14px", fontWeight: "700", color: "#fff" } }, destination)), /* @__PURE__ */ import_react11.default.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ import_react11.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } }, /* @__PURE__ */ import_react11.default.createElement("span", { style: { fontSize: "13px", color: "rgba(255,255,255,0.45)" } }, duration), /* @__PURE__ */ import_react11.default.createElement("span", { style: { fontSize: "15px", fontWeight: "700", color: accent } }, price)), /* @__PURE__ */ import_react11.default.createElement(
    "button",
    {
      onClick: onBookClick,
      style: {
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "700",
        cursor: "pointer",
        fontFamily: "inherit"
      }
    },
    "Book Now"
  )));
};

// src/components/PricingCard/PricingCard.jsx
var import_react12 = __toESM(require("react"));
var PricingCard = ({
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
  onCtaClick = () => {
  }
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react12.default.createElement("div", { style: { background: bg, borderRadius: "20px", padding: "28px 24px", width: "300px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", border: "1px solid " + alpha(accent, 0.25), position: "relative", overflow: "hidden" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, " + accent + ", " + alpha(accent, 0.3) + ")" } }), badgeText && /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "100px", marginBottom: "14px", background: alpha(accent, 0.12), border: "1px solid " + alpha(accent, 0.3), fontSize: "11px", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.5px" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%", background: accent } }), badgeText), /* @__PURE__ */ import_react12.default.createElement("div", { style: { fontSize: "20px", fontWeight: "800", marginBottom: "4px" } }, planName), /* @__PURE__ */ import_react12.default.createElement("div", { style: { fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "20px" } }, description), /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "3px", marginBottom: "4px" } }, /* @__PURE__ */ import_react12.default.createElement("span", { style: { fontSize: "18px", fontWeight: "700", color: "rgba(255,255,255,0.5)", lineHeight: 2 } }, currency), /* @__PURE__ */ import_react12.default.createElement("span", { style: { fontSize: "52px", fontWeight: "800", lineHeight: 1 } }, Math.round(price))), /* @__PURE__ */ import_react12.default.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "20px" } }, period), /* @__PURE__ */ import_react12.default.createElement("div", { style: { height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "16px" } }), /* @__PURE__ */ import_react12.default.createElement("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: "10px" } }, features.map((f, i) => /* @__PURE__ */ import_react12.default.createElement("li", { key: i, style: { display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.75)" } }, /* @__PURE__ */ import_react12.default.createElement("div", { style: { width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: alpha(accent, 0.18), border: "1px solid " + alpha(accent, 0.4), flexShrink: 0 } }, /* @__PURE__ */ import_react12.default.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react12.default.createElement("polyline", { points: "1.5,6 4.5,9 10.5,3" }))), f))), /* @__PURE__ */ import_react12.default.createElement("button", { onClick: onCtaClick, style: { width: "100%", padding: "13px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "system-ui,sans-serif" } }, ctaText));
};

// src/components/HelloCard/HelloCard.jsx
var import_react13 = __toESM(require("react"));
var HelloCard = ({
  title = "Hello, World!",
  message = "Welcome to your new React component!",
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react13.default.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    padding: "24px",
    width: "400px",
    color: "#fff",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
    border: "1px solid " + alpha(accent, 0.25)
  } }, /* @__PURE__ */ import_react13.default.createElement("h2", { style: { fontSize: "24px", fontWeight: "700", margin: "0 0 12px" } }, title), /* @__PURE__ */ import_react13.default.createElement("p", { style: { fontSize: "16px", color: "rgba(255, 255, 255, 0.75)", margin: "0" } }, message));
};

// src/components/LoadingCard/LoadingCard.jsx
var import_react14 = __toESM(require("react"));
var LoadingCard = ({
  accent = "#6366f1",
  bg = "#0f172a",
  width = "300px",
  height = "200px"
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react14.default.createElement("div", { style: {
    background: bg,
    borderRadius: "20px",
    width,
    height,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    border: "1px solid " + alpha(accent, 0.1)
  } }, /* @__PURE__ */ import_react14.default.createElement("div", { style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "20px",
    background: alpha(accent, 0.2),
    borderRadius: "10px",
    animation: "loading 1.5s infinite"
  } }), /* @__PURE__ */ import_react14.default.createElement("style", null, `@keyframes loading { 0% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } 100% { transform: translate(-50%, -50%) scale(1); }}`));
};

// src/components/Loader/Loader.jsx
var import_react15 = __toESM(require("react"));
var Loader = ({
  accent = "#0ea5e9",
  bg = "#0f172a",
  size = 48,
  text = "Loading...",
  showText = true,
  variant = "bars"
  // "spinner" | "dots" | "pulse" | "bars"
}) => {
  const [dots, setDots] = (0, import_react15.useState)(0);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  (0, import_react15.useEffect)(() => {
    const interval = setInterval(() => {
      setDots((d) => (d + 1) % 4);
    }, 400);
    return () => clearInterval(interval);
  }, []);
  const spinnerStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: "3px solid " + alpha(accent, 0.2),
    borderTop: "3px solid " + accent,
    animation: "nexus-spin 0.8s linear infinite"
  };
  const dotsStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  };
  const pulseStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: alpha(accent, 0.3),
    animation: "nexus-pulse 1.2s ease-in-out infinite"
  };
  const barsStyle = {
    display: "flex",
    gap: "4px",
    alignItems: "flex-end",
    height: size
  };
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("style", null, `
        @keyframes nexus-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes nexus-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes nexus-bounce1 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes nexus-bounce2 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes nexus-bounce3 {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `), /* @__PURE__ */ import_react15.default.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    padding: "40px",
    background: bg,
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.07)",
    fontFamily: "system-ui,sans-serif",
    minWidth: "160px"
  } }, variant === "spinner" && /* @__PURE__ */ import_react15.default.createElement("div", { style: spinnerStyle }), variant === "dots" && /* @__PURE__ */ import_react15.default.createElement("div", { style: dotsStyle }, [0, 1, 2].map((i) => /* @__PURE__ */ import_react15.default.createElement("div", { key: i, style: {
    width: size / 4,
    height: size / 4,
    borderRadius: "50%",
    background: i === dots % 3 ? accent : alpha(accent, 0.3),
    transition: "background 0.2s ease",
    transform: i === dots % 3 ? "scale(1.3)" : "scale(1)",
    transitionDuration: "0.2s"
  } }))), variant === "pulse" && /* @__PURE__ */ import_react15.default.createElement("div", { style: { position: "relative", width: size, height: size } }, /* @__PURE__ */ import_react15.default.createElement("div", { style: {
    ...pulseStyle,
    position: "absolute",
    top: 0,
    left: 0
  } }), /* @__PURE__ */ import_react15.default.createElement("div", { style: {
    width: size * 0.5,
    height: size * 0.5,
    borderRadius: "50%",
    background: accent,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  } })), variant === "bars" && /* @__PURE__ */ import_react15.default.createElement("div", { style: barsStyle }, [0, 1, 2, 3].map((i) => /* @__PURE__ */ import_react15.default.createElement("div", { key: i, style: {
    width: size / 6,
    height: size,
    borderRadius: "4px",
    background: "linear-gradient(to top, " + alpha(accent, 0.3) + ", " + accent + ")",
    animation: `nexus-bounce${i % 3 + 1} ${0.8 + i * 0.1}s ease-in-out infinite`,
    animationDelay: i * 0.1 + "s"
  } }))), showText && /* @__PURE__ */ import_react15.default.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: "2px"
  } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: {
    fontSize: "14px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.6)",
    letterSpacing: "0.3px"
  } }, text), /* @__PURE__ */ import_react15.default.createElement("span", { style: {
    fontSize: "14px",
    fontWeight: "600",
    color: accent,
    width: "20px"
  } }, ".".repeat(dots)))));
};

// src/components/StatsCard/StatsCard.jsx
var import_react16 = __toESM(require("react"));
var StatsCard = ({
  title = "Total Revenue",
  value = 124500,
  prefix = "$",
  suffix = "",
  change = 12.5,
  period = "vs last month",
  icon = "\u{1F4C8}",
  accent = "#3be8ff",
  bg = "#040e11",
  data = [40, 55, 35, 70, 45, 80, 60, 90, 75, 95, 85, 100],
  onCardClick = () => {
  }
}) => {
  const [displayed, setDisplayed] = (0, import_react16.useState)(0);
  const [hovered, setHovered] = (0, import_react16.useState)(false);
  const [animated, setAnimated] = (0, import_react16.useState)(false);
  const ref = (0, import_react16.useRef)(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  (0, import_react16.useEffect)(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);
  (0, import_react16.useEffect)(() => {
    if (!animated) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else setDisplayed(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [animated, value]);
  const isPositive = change >= 0;
  const max = Math.max(...data);
  const chartH = 48;
  return /* @__PURE__ */ import_react16.default.createElement(
    "div",
    {
      ref,
      onClick: onCardClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        border: "1px solid " + (hovered ? alpha(accent, 0.25) : "rgba(255,255,255,0.06)"),
        padding: "20px",
        width: "280px",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        cursor: "pointer",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px " + alpha(accent, 0.1) : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden"
      }
    },
    /* @__PURE__ */ import_react16.default.createElement("div", { style: {
      position: "absolute",
      top: "-30px",
      right: "-30px",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background: alpha(accent, hovered ? 0.08 : 0.04),
      filter: "blur(30px)",
      transition: "background 0.3s",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" } }, /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("p", { style: { fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "1px", margin: 0 } }, title)), /* @__PURE__ */ import_react16.default.createElement("div", { style: {
      width: "36px",
      height: "36px",
      borderRadius: "12px",
      background: alpha(accent, 0.1),
      border: "1px solid " + alpha(accent, 0.2),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      transition: "transform 0.2s",
      transform: hovered ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)"
    } }, icon)),
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "4px" } }, prefix && /* @__PURE__ */ import_react16.default.createElement("span", { style: { fontSize: "16px", fontWeight: 700, color: alpha(accent, 0.7) } }, prefix), /* @__PURE__ */ import_react16.default.createElement("span", { style: {
      fontSize: "36px",
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-1px",
      fontVariantNumeric: "tabular-nums"
    } }, displayed.toLocaleString()), suffix && /* @__PURE__ */ import_react16.default.createElement("span", { style: { fontSize: "16px", fontWeight: 700, color: alpha(accent, 0.7) } }, suffix)), /* @__PURE__ */ import_react16.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" } }, /* @__PURE__ */ import_react16.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "3px",
      padding: "2px 8px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 700,
      background: isPositive ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
      color: isPositive ? "#34d399" : "#f87171",
      border: "1px solid " + (isPositive ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)")
    } }, /* @__PURE__ */ import_react16.default.createElement("svg", { width: "8", height: "8", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        d: isPositive ? "M5 1L9 5H6V9H4V5H1L5 1Z" : "M5 9L1 5H4V1H6V5H9L5 9Z",
        fill: isPositive ? "#34d399" : "#f87171"
      }
    )), Math.abs(change), "%"), /* @__PURE__ */ import_react16.default.createElement("span", { style: { fontSize: "11px", color: "rgba(255,255,255,0.3)" } }, period))),
    /* @__PURE__ */ import_react16.default.createElement("div", { style: { position: "relative", height: chartH + "px", marginTop: "4px" } }, /* @__PURE__ */ import_react16.default.createElement("svg", { width: "100%", height: chartH, viewBox: "0 0 " + data.length * 20 + " " + chartH, preserveAspectRatio: "none" }, /* @__PURE__ */ import_react16.default.createElement("defs", null, /* @__PURE__ */ import_react16.default.createElement("linearGradient", { id: "grad-" + accent.replace("#", ""), x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react16.default.createElement("stop", { offset: "0%", stopColor: accent, stopOpacity: "0.3" }), /* @__PURE__ */ import_react16.default.createElement("stop", { offset: "100%", stopColor: accent, stopOpacity: "0" }))), /* @__PURE__ */ import_react16.default.createElement(
      "path",
      {
        d: "M0," + chartH + " " + data.map((v, i) => i * 20 + "," + (chartH - v / max * (chartH - 8))).join(" L ") + " L" + (data.length - 1) * 20 + "," + chartH + " Z",
        fill: "url(#grad-" + accent.replace("#", "") + ")"
      }
    ), /* @__PURE__ */ import_react16.default.createElement(
      "polyline",
      {
        points: data.map((v, i) => i * 20 + "," + (chartH - v / max * (chartH - 8))).join(" "),
        fill: "none",
        stroke: accent,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: {
          filter: "drop-shadow(0 0 4px " + alpha(accent, 0.6) + ")"
        }
      }
    ), /* @__PURE__ */ import_react16.default.createElement(
      "circle",
      {
        cx: (data.length - 1) * 20,
        cy: chartH - data[data.length - 1] / max * (chartH - 8),
        r: "3",
        fill: accent,
        style: {
          filter: "drop-shadow(0 0 6px " + accent + ")"
        }
      }
    )))
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  CarCard,
  Card,
  EcommerceCard,
  HelloCard,
  Kishore,
  Loader,
  LoadingCard,
  MariCard,
  PricingCard,
  ProfileCard,
  StatsCard,
  TravelCard
});
