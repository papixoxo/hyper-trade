# HyperTrade — Crypto Derivatives DEX

A futuristic, high-performance decentralized exchange (DEX) landing page for crypto perpetual derivatives trading.

Built with **Next.js**, **React Three Fiber**, **Framer Motion**, and **TailwindCSS** — featuring 3D WebGL visuals, smooth scroll-triggered animations, and a premium dark silver UI.

![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## ✨ Features

- **3D Hero Section** — Interactive metallic wireframe sphere rendered with React Three Fiber (Three.js)
- **Live Market Metrics** — Real-time stats fetched from the Express API backend
- **Trading Terminal Preview** — Simulated orderbook, animated chart, and order panel
- **Markets Table** — Top perpetual pairs with live price, change, volume, and open interest
- **Feature Cards** — Spring-animated cards revealing on scroll via Framer Motion
- **Ecosystem Section** — Sticky split-layout showcasing protocol components
- **Roadmap Timeline** — Alternating milestone layout with status indicators
- **Security Section** — Audits, self-custody, and L1 appchain status
- **Smooth Navigation** — Navbar links scroll to sections with CSS `scroll-behavior: smooth`
- **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first CSS |
| [Framer Motion](https://motion.dev/) | Animations & transitions |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | 3D WebGL rendering |
| [Three.js](https://threejs.org/) | 3D graphics engine |
| [Lucide React](https://lucide.dev/) | Icon system |

### Backend
| Technology | Purpose |
|-----------|---------|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express](https://expressjs.com/) | REST API framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [CORS](https://www.npmjs.com/package/cors) | Cross-origin requests |

---

## 📁 Project Structure

```
hypertrade/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx          # Root layout
│   │   │   ├── page.tsx            # Home page
│   │   │   └── globals.css         # Theme & utilities
│   │   └── components/
│   │       ├── sections/
│   │       │   ├── Hero.tsx         # Hero with 3D background
│   │       │   ├── LiveMetrics.tsx  # API-connected metrics
│   │       │   ├── Markets.tsx      # Perpetuals table
│   │       │   ├── Features.tsx     # Feature cards
│   │       │   ├── PlatformPreview.tsx  # Trading terminal
│   │       │   ├── Ecosystem.tsx    # Protocol overview
│   │       │   ├── Security.tsx     # Security details
│   │       │   └── Roadmap.tsx      # Timeline
│   │       ├── three/
│   │       │   └── Hero3D.tsx       # Three.js scene
│   │       └── ui/
│   │           ├── Navbar.tsx       # Navigation
│   │           └── Footer.tsx       # Footer
│   ├── package.json
│   └── tsconfig.json
├── backend/
│   ├── server.ts                    # Express API server
│   ├── package.json
│   └── .env
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/hypertrade.git
cd hypertrade

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Running Locally

You need two terminals running simultaneously:

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
# Server starts on http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
# App opens at http://localhost:3000
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#94A3B8` | Silver — primary accent |
| `accent-bright` | `#CBD5E1` | Light silver — hovers & highlights |
| `accent-dim` | `#64748B` | Slate — gradients & secondary |
| `surface-0` | `#0B0A10` | Deep dark background |
| `surface-1` | `#13111D` | Elevated panels |
| `surface-2` | `#1E1B2A` | Cards & modals |
| `success` | `#4ADE80` | Green — buy/long indicators |
| `danger` | `#F87171` | Red — sell/short indicators |

---

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/markets` | GET | Returns mock market data (BTC, ETH, SOL perpetuals) |
| `/api/metrics` | GET | Returns platform metrics (volume, liquidity, TPS) |

---

## 🏗 Building for Production

```bash
cd frontend
npm run build
npm start
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspired by [Hyperliquid](https://hyperliquid.xyz/) and modern DEX interfaces
- 3D visuals powered by [React Three Fiber](https://r3f.docs.pmnd.rs/)
- Animations by [Framer Motion](https://motion.dev/)
