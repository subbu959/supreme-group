# Supreme Auto Scroll Experience

A smooth-scrolling, full-screen React app to showcase passenger and commercial vehicle innovations using video and content sections.

---

## 🚀 Getting Started

1. **Install dependencies**
```bash
npm install
```

2. **Run the app**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

---

## 🧱 Project Structure

```
src/
├── components/
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── VehicleScrollSection.tsx
│   ├── ContactUs.tsx
│   └── Footer.tsx
├── App.tsx
└── main.tsx
```

- Each section is full-screen with `h-screen` and `snap-start` for smooth scroll.
- All components are styled using **Tailwind CSS**.

---

## 📱 Responsive Design

- Mobile-first using Tailwind’s responsive classes.
- Videos scale using `aspect-video` and `object-cover`.
- Layout adapts for different screen sizes.

---

## ⚙️ Performance

- Lightweight scroll behavior using native scroll snap.
- No third-party animation libraries.
- Minimal re-renders using local state and key props.

---

## ♿ Accessibility

- Semantic HTML (`section`, `video`, `button`).
- Contrast-friendly colors.
- Keyboard-friendly structure.

---

## 📦 Libraries Used

- `react-icons`: For play/pause icons.
- `tailwindcss`: For utility styling.
- `vite`: For fast dev + build.

---

## 🔍 Assumptions & Notes

- Only one scroll container (`App.tsx`).
- Videos play automatically in order.
- Navbar remains outside the scroll to stay fixed.

