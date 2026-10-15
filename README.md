# JAMB UTME CBT Practice Simulator (Exact Official Replica)

A production-grade, 100% authentic Progressive Web Application (PWA) simulating Nigeria's official Joint Admissions and Matriculation Board (JAMB) Unified Tertiary Matriculation Examination (UTME) Computer-Based Test (CBT) environment.

---

## Key Features

### 1. 20-Year Dynamic Question Bank (5,700+ Questions)
- Contains authentic past questions spanning **2004 to 2024** across 7 core subjects:
  - **Use of English** (724 Questions) with reading comprehension passages
  - **Mathematics** (835 Questions) with algebraic and calculus problems
  - **Physics** (838 Questions) with formulas, diagrams, and mechanics
  - **Chemistry** (840 Questions) with stoichiometry, equations, and organic chemistry
  - **Biology** (817 Questions) with ecology, genetics, and physiology
  - **Economics** (840 Questions) with elasticity, market structures, and macroeconomics
  - **Government** (840 Questions) with pre-colonial systems, constitutions, and international relations
- Support for:
  - **Full Official Simulation**: Automatically generates 180 questions (60 English + 40 + 40 + 40) randomized from the 20-year bank with option shuffling.
  - **Year-by-Year Practice**: Choose specific exam years (e.g. 2024, 2023, 2022, 2020, etc.).

### 2. Authentic 8-Key Navigation System
Accurately replicates JAMB's physical keyboard shortcuts to build muscle memory:
- **`A` / `B` / `C` / `D`**: Select Option A, B, C, or D
- **`N`**: Next question
- **`P`**: Previous question
- **`R`**: Reverse / Clear chosen answer
- **`S`**: Submit examination
- **`Y` / `N`**: Confirm submission (`Y` = Yes, `N` = No) in the modal prompt

### 3. Mobile Responsive & Touch 8-Key Virtual Pad
- On mobile devices and tablets, candidates can toggle a floating **Virtual 8-Key Pad** to practice thumb-driven reflex navigation without requiring a physical keyboard.
- Responsive Question Palette drawer with status color-coding.

### 4. On-Screen 4-Function Calculator
- Built-in floating, draggable digital calculator (+, -, ×, ÷, %, √, ±, C, ⌫) matching JAMB's physical calculator ban.

### 5. Official UTME Result Slip & Step-by-Step Corrections Mode
- Detailed score report scaled to **400 marks** with individual subject performance out of 100.
- Printable certificate layout.
- Review mode with filter by "All", "Incorrect Only", "Correct", and "Skipped", complete with step-by-step worked solutions.

### 6. 100% Offline PWA Capability
- Built with service worker precaching via `vite-plugin-pwa`.
- The entire 5,700+ question bank and app shell install on desktop or mobile for practice without internet connectivity.

---

## Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production (outputs PWA in dist/)
npm run build
```

---

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **PWA**: `vite-plugin-pwa` + Workbox offline precaching
- **FX**: Canvas Confetti
