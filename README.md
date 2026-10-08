# virtualui-components-lib

> AI-powered React component library — generated, managed, and auto-published via [VirtualUI](https://ai-powered-virtual-ui-library-front.onrender.com)

[![npm version](https://img.shields.io/npm/v/virtualui-components-lib)](https://www.npmjs.com/package/virtualui-components-lib)
[![npm downloads](https://img.shields.io/npm/dm/virtualui-components-lib)](https://www.npmjs.com/package/virtualui-components-lib)
[![license](https://img.shields.io/npm/l/virtualui-components-lib)](https://github.com/kishore22222/Ai-powered-virtual-ui-library/blob/main/LICENSE)

---

## What is VirtualUI?

VirtualUI is an AI-powered SaaS platform that automatically generates, publishes, and manages React UI components. Admins describe a component, AI generates the JSX code, and with one click it gets published to npm automatically via GitHub Actions — zero manual steps.

---

## Installation

```bash
npm install virtualui-components-lib
```

---

## Usage

```jsx
import { Badge, Toggle, StatsCard } from "virtualui-components-lib";

export default function App() {
  return (
    <div>
      <Badge
        label="New"
        accent="#6366f1"
        bg="#0f172a"
        size="medium"
      />
    </div>
  );
}
```

---

## Available Components

| Component | Props |
|---|---|
| Badge | label, accent, bg, size |
| Avatar | name, image, size, accent, bg |
| Tooltip | text, position, accent, bg |
| Toggle | isOn, onToggle, accent, bg |
| DarkToggle | isOn, onToggle, accent, bg |
| Switch | isChecked, onChange, accent, bg |
| ProgressBar | value, max, accent, bg, label |
| Accordion | title, content, accent, bg |
| Tabs | tabs, accent, bg |
| Breadcrumb | items, separator, bg, textColor, separatorColor |
| Pagination | currentPage, totalPages, onPageChange, accent, bg |
| Alert | type, message, dismissible, accent, bg |
| Toast | message, type, duration, accent, bg |
| Form | fields, onSubmit, accent, bg |
| BlogCard | title, excerpt, image, category, readTime, author, accent, bg |
| TestimonialCard | name, role, avatar, quote, rating, accent, bg |
| NotificationCard | icon, title, message, timestamp, accent, bg |
| StatsCard | title, value, prefix, suffix, change, period, accent, bg |
| Calculator | bg, buttonColor, buttonTextColor, displayColor |
| CountdownTimer | targetDate, title, accent, bg |
| Calendar | accent, bg |

---

## Example Components

### Badge
```jsx
import { Badge } from "virtualui-components-lib";

<Badge
  label="New"
  accent="#6366f1"
  bg="#0f172a"
  size="medium"
/>
```

### StatsCard
```jsx
import { StatsCard } from "virtualui-components-lib";

<StatsCard
  title="Total Revenue"
  value={124500}
  prefix="$"
  change={12.5}
  period="vs last month"
  accent="#3be8ff"
  bg="#040e11"
/>
```

### Toggle
```jsx
import { Toggle } from "virtualui-components-lib";

<Toggle
  isOn={true}
  onToggle={() => {}}
  accent="#6366f1"
  bg="#0f172a"
/>
```

### CountdownTimer
```jsx
import { CountdownTimer } from "virtualui-components-lib";

<CountdownTimer
  targetDate="2026-12-31"
  title="New Year Countdown"
  accent="#6366f1"
  bg="#0f172a"
/>
```

---

## How It Works
