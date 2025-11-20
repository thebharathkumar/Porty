# Bharath Kumar Rajesh - Portfolio Website

A premium, adaptive portfolio website with role-based experience system, featuring Apple-level polish and Nothing Phone's bold minimalism with sophisticated 60fps animations.

## 🌟 Features

### Core Concept: Adaptive Role Experience
- **Role Selection Landing**: Six elegant role options (Software Engineer, AI/ML Engineer, Backend Engineer, Data Engineer, Data Analyst, Full Stack)
- **Dynamic Content Adaptation**: Project highlighting, skills ordering, experience descriptions, and color accents adjust based on selected role
- **Smooth Morphing Transitions**: Seamless transitions between role views

### Design Philosophy
- **Apple-Inspired**: Clean layouts, glassmorphism effects, premium typography, smooth scroll animations
- **Nothing Phone Aesthetics**: Bold typography, dot matrix patterns, red accent colors, geometric shapes
- **60fps Performance**: GPU-accelerated animations, optimized bundle size, lazy loading

### Sections
1. **Landing Screen**: Interactive role selection with animated cards
2. **Hero Section**: Dynamic greeting, typing effect, animated metrics
3. **About Section**: Biography with CLI-style interactive skills terminal
4. **Experience Timeline**: Vertical timeline with role-filtered achievements
5. **Projects Showcase**: Featured projects with modal details
6. **Publications**: Academic papers with journal-style layout
7. **Contact Section**: Interactive contact cards with copy-to-clipboard

### Key Features
- Dark/Light mode toggle (default dark)
- Custom cursor with hover effects
- Smooth scroll with animations
- Fully responsive design
- Accessibility compliant (WCAG 2.1 AA)
- SEO optimized
- Performance optimized

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── sections/            # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   └── Contact.tsx
│   ├── CustomCursor.tsx     # Custom cursor component
│   ├── Navigation.tsx       # Navigation bar
│   ├── Preloader.tsx        # Loading screen
│   └── RoleSelection.tsx    # Role selection screen
├── contexts/
│   ├── RoleContext.tsx      # Role management
│   └── ThemeContext.tsx     # Theme management
├── constants/
│   ├── data.ts              # Content data
│   └── roles.ts             # Role configurations
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript types
```

## 🎯 Role-Based Experience

The portfolio adapts based on the selected role:

| Role | Accent Color | Featured Skills | Priority Projects |
|------|-------------|----------------|-------------------|
| Software Engineer | Blue (#0A84FF) | React, Flutter, Python | Transportation Pipeline, Churn Prediction |
| AI/ML Engineer | Purple (#BF5AF2) | TensorFlow, PyTorch | Churn Prediction, Medicinal Plants |
| Backend Engineer | Green (#32D74B) | Python, Java, APIs | Transportation Pipeline |
| Data Engineer | Orange (#FF9F0A) | Airflow, Spark, AWS | Transportation Pipeline, Data Processing |
| Data Analyst | Pink (#FF375F) | Power BI, Tableau, SQL | Data Processing, Churn Prediction |
| Full Stack | Indigo (#5E5CE6) | React, Python, AWS | All Projects |

## 📝 Content Management

Update content in `/constants/data.ts`:
- `experiences`: Work experience entries
- `projects`: Project showcase items
- `publications`: Research publications
- `skills`: Technical skills organized by category
- `education`: Educational background
- `contactInfo`: Contact information

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
- Role-specific accents
- Nothing Phone red
- Background and surface colors

### Animations
Customize animations in:
- `globals.css`: Keyframe animations
- Component files: Framer Motion animations

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus indicators
- Reduced motion support
- High contrast mode support

## 📈 Performance

- Lighthouse score target: 90+ across all metrics
- Initial bundle size: <500KB
- 60fps animations throughout
- Lazy loading for images and sections
- Code splitting
- Optimized fonts and assets

## 🔧 Development

```bash
# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Format code (if Prettier is configured)
npm run format
```

## 📄 License

© 2025 Bharath Kumar Rajesh. All rights reserved.

## 🤝 Contact

- **Email**: bharath.kr702@gmail.com
- **LinkedIn**: [linkedin.com/in/thebharathkumar](https://linkedin.com/in/thebharathkumar)
- **GitHub**: [github.com/thebharathkumar](https://github.com/thebharathkumar)
- **Location**: New York, NY

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
