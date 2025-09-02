## Topmind Care (Mindery Kids) – Landing App

A responsive React single-page app showcasing Mindery Kids programs, features, pricing, reviews, and a popup lead form. Built for fast iteration with Vite and styled using Tailwind CSS v4.

### Stack
- **Build tool**: Vite 7
- **Framework**: React 19, React DOM 19
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/vite`), utility-first responsive design
- **Animations**: Framer Motion (available)
- **Notifications**: React Toastify (form submission toasts)
- **Linting**: ESLint 9 with React Hooks/Refresh plugins

### Key Features
- **Fully responsive UI** across all sections (hero, why, programs, features, comparison, pricing, reviews, footer)
- **Fixed Navbar** with smooth anchor scrolling and section offsets
- **Accessible anchor navigation**: `href="#why"`, `#programs`, `#features`, `#pricing`, `#faq`
- **Popup lead form** with validation and success toast using React Toastify
- **Clean component structure** with Tailwind breakpoints and constrained content width (`max-w-6xl`)

### Getting Started
1. Install dependencies
```bash
npm install
```
2. Run the dev server
```bash
npm run dev
```
3. Build for production
```bash
npm run build
```
4. Preview the production build
```bash
npm run preview
```

### Project Structure
```
src/
  components/
    Navbar.jsx          # Fixed header with anchor links
    HeroSection.jsx     # Headline, CTA, popup trigger
    PopupForm.jsx       # Lead form with Toastify feedback
    WhyMindery.jsx      # Benefits grid
    Programs.jsx        # Age tracks with images
    Built.jsx           # Feature grid (Built for Kids)
    Comparison.jsx      # Table comparing with other apps
    Pricing.jsx         # Plans + Parent/Teacher Hub
    Reviews.jsx         # Testimonials + FAQ accordion
  index.css            # Tailwind + smooth scroll + anchor offset
  App.jsx              # Page composition + ToastContainer
  main.jsx             # React root render
```

### UX & Accessibility Notes
- Global `html { scroll-behavior: smooth }`
- `section[id] { scroll-margin-top: 88px }` to prevent headings from being hidden by the fixed navbar (adjust if navbar height changes)
- Buttons and links have clear focus styles and large tap targets
