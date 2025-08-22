# MarginMax Landing Page

A dynamic, animated landing page for MarginMax - a hedge fund platform powered by AI agents. Built with React, TypeScript, Framer Motion, and Tailwind CSS.

## 🚀 Features

- **Scroll-based animations** using Framer Motion
- **Responsive design** with mobile-first approach
- **Modern UI/UX** with smooth transitions and hover effects
- **Custom color palette** matching the MarginMax brand
- **Component-based architecture** for easy maintenance
- **Performance optimized** with lazy loading and efficient animations

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for fast development and building

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marginmax-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Main hero section
│   ├── OneClickExecution.tsx  # Trading interface mockup
│   ├── TradingCompanion.tsx   # Feature grid
│   ├── MoreFeatures.tsx       # Additional features
│   ├── TelegramSection.tsx    # Beta signup section
│   └── Footer.tsx      # Footer with social links
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind
```

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js` and includes:
- Primary: Bright green (#00FF00)
- Secondary colors: Blue, yellow, orange, red
- Dark theme: Various shades of dark backgrounds
- Text colors: White, light gray, muted gray

### Animations
All animations are powered by Framer Motion with:
- Scroll-triggered animations using `whileInView`
- Hover effects with `whileHover`
- Smooth transitions and easing
- Staggered animations for lists and grids

### Typography
Uses Inter font family for a modern, clean look.

## 📱 Responsive Design

The landing page is designed with a desktop-first approach and includes:
- Mobile-responsive navigation
- Adaptive grid layouts
- Flexible button arrangements
- Optimized spacing for different screen sizes

## 🚀 Build & Deploy

1. Build for production:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

3. Deploy the `dist` folder to your hosting service.

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Use the existing animation patterns for consistency

### Modifying Animations
- Update animation values in component `motion` props
- Modify timing in `transition` objects
- Adjust viewport triggers as needed

### Styling Changes
- Use Tailwind classes for most styling
- Add custom CSS in `index.css` for complex styles
- Update color palette in `tailwind.config.js`

## 📄 License

This project is proprietary to MarginMax. All rights reserved.

## 🤝 Contributing

For internal development and updates, please follow the existing code patterns and maintain the design consistency.

---

Built with ❤️ for MarginMax
