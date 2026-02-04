# Frontend Development Guide

## 📁 Project Structure

```
frontend/
├── public/              # Static assets for production
│   ├── images/         # Optimized images
│   ├── icons/          # Icon files (SVG, ICO)
│   └── fonts/          # Custom font files
├── src/                # Source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page templates
│   ├── styles/         # Stylesheets
│   │   ├── components/ # Component-specific styles
│   │   ├── pages/     # Page-specific styles
│   │   └── main.css   # Main stylesheet
│   └── utils/         # Utility functions and scripts
└── assets/            # Development assets
```

## 🚀 Development Workflow

### Setup

```bash
cd frontend
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build optimized production files
- `npm run watch` - Watch files for changes
- `npm run lint` - Check code quality
- `npm run test` - Run unit tests

### Coding Standards

- **HTML**: Semantic HTML5 with accessibility in mind
- **CSS**: BEM methodology for class naming
- **JavaScript**: ES6+ modules, functional programming
- **Performance**: Optimize images, minify CSS/JS

## 🎨 Styling Guidelines

### CSS Organization

1. **main.css** - Global styles, variables, base elements
2. **components/** - Component-specific styles
3. **pages/** - Page-specific overrides

### Design System

- **Colors**: Dark theme with golden accents
- **Typography**: Inter font family
- **Spacing**: 8px grid system
- **Breakpoints**: Mobile-first responsive design

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
@media (min-width: 1440px) {
  /* Large Desktop */
}
```

### Component Guidelines

- Use CSS Grid and Flexbox for layouts
- Implement touch-friendly interactive elements
- Ensure minimum 44px touch targets
- Test on multiple devices and browsers

## 🔧 Build Process

### Development

- Live server with hot reload
- Source maps for debugging
- Linting on save

### Production

- CSS optimization and minification
- JavaScript bundling and minification
- Image optimization
- Asset copying to public directory

## 🧪 Testing Strategy

### Unit Tests

- Component functionality
- Utility functions
- Form validation

### Integration Tests

- User workflows
- API interactions
- Cross-browser compatibility

### Performance Tests

- Page load times
- Core Web Vitals
- Accessibility audits

## 🌐 Internationalization

### Language Support

- German (primary)
- English (secondary)

### Implementation

- JSON translation files
- Dynamic content switching
- RTL support ready

## 📊 Performance Optimization

### Best Practices

- Lazy load images and components
- Minimize render-blocking resources
- Use efficient selectors
- Optimize font loading
- Implement caching strategies

## 🔄 Version Control

### Git Workflow

- Feature branches for development
- Descriptive commit messages
- Pull request reviews
- Automated testing on commits
