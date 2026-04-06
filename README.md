# Zorvyn Finance Dashboard

A full-featured personal finance dashboard built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Zustand**. Manage transactions, track goals, monitor bills, view spending insights, and switch between 10 live currencies — all in the browser with no backend required.

---

## 🚀 Live Demo

> Run locally — see [Getting Started](#getting-started) below.
> https://financee-dashboard.vercel.app/dashboard

---

## ✨ Features

### 📊 Dashboard Overview

* Summary Cards — Total Balance, Income, Expenses with animated count-up
* Balance Trend Chart — Area chart showing cumulative balance
* Spending Heatmap — 52-week calendar grid
* Upcoming Bills Widget — Next 5 unpaid bills
* Goals Widget — Top 3 saving goals with progress bars
* Spending Breakdown — Donut chart for categories
* Recent Transactions — Last 6 transactions
* Quick Actions — Add transaction, bill, or goal (Admin only)

### 💳 Transactions

* Search, filter, sort, and pagination
* Add, edit, delete (Admin only)
* Responsive mobile layout
* Export as CSV or JSON

### 📅 Bill Reminders

* Add/edit/delete bills with due dates
* Status badges — Overdue, Due Today, Upcoming, Paid
* Recurring bills support
* Auto notifications

### 🎯 Goal Tracker

* Create and track saving goals
* Progress bars and deadline tracking
* Add savings to goals
* Completion notifications

### 🔁 Recurring Transactions

* Set income/expense templates
* Generate transactions instantly
* Monthly net estimate

### 💱 Multi-Currency Support

* 10 currencies supported (INR, USD, EUR, etc.)
* Live exchange rates (cached)
* Instant UI updates on switch

### 🔔 Notifications & Alerts

* Real-time alerts for:

  * Overdue bills
  * Goal deadlines
  * Large expenses
* Mark as read / clear all

### 📈 Insights

* Spending heatmap
* Category breakdown
* Monthly comparison
* Auto-generated observations

### 🎨 UI / UX

* Dark mode (Light / Dark / System)
* Role-based UI (Viewer/Admin)
* Fully responsive design
* Smooth animations (Framer Motion)
* Type-safe with TypeScript

---

## 🛠 Tech Stack

| Layer            | Technology      |
| ---------------- | --------------- |
| Framework        | Next.js 16      |
| Language         | TypeScript      |
| Styling          | Tailwind CSS v4 |
| State Management | Zustand         |
| Charts           | Recharts        |
| Animations       | Framer Motion   |
| Theme            | next-themes     |
| Icons            | lucide-react    |

---

## ⚙️ Getting Started

### Prerequisites

* Node.js v18+
* npm v9+

```bash
node -v
npm -v
```

---

### Installation

```bash
# Clone repository
git clone https://github.com/stackpilot24/Finance-dashboard.git

# Go to project folder
cd finance-dashboard

# Install dependencies
npm install
```

---

### Run Locally

```bash
npm run dev
```

Open: http://localhost:3000

---

### Other Commands

```bash
npm run build
npm start
npm run lint
```

---

## 🧠 First Time Setup

On first load, the app:

* Seeds mock transactions, bills, goals
* Fetches exchange rates
* Generates notifications automatically

---

## 🗂 Project Structure

```
finance-dashboard/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── store/
│   └── types/
├── package.json
└── tailwind.config.ts
```

---

## 💾 Data Persistence

All data is stored in **localStorage** using Zustand.

To reset:

* Open DevTools → Application → Local Storage
* Delete `zorvyn_*` keys

---

## 🧩 Architecture Decisions

* Zustand for simple state management (no boilerplate)
* localStorage for frontend-only persistence
* Dynamic imports for client-only components
* Portal rendering for notification panel

---

## 🐛 Troubleshooting

**App not loading**

* Clear localStorage and refresh

**Currency issues**

* Refresh exchange rates from UI

**npm install fails**

* Ensure Node.js v18+

---

## 📄 License

MIT — free to use and modify.

---

⭐ If you like this project, consider giving it a star!
