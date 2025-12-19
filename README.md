# electrichasgoneaudi.github.io

All you ever need to know about electric Audis

Unofficial website dedicated to comprehensive information about all-electric Audi vehicles.

## Development Setup

### Prerequisites
- [Hugo](https://gohugo.io/installation/) (static site generator)
- [Node.js](https://nodejs.org/) (for CSS build process)

### Installation

1. Clone the repository
```bash
git clone https://github.com/electrichasgoneaudi/electrichasgoneaudi.github.io.git
cd electrichasgoneaudi.github.io
```

2. Install dependencies
```bash
npm install
```

3. Build initial CSS
```bash
npm run build-css-prod
```

## CSS Workflow (Tailwind CSS)

This project uses Tailwind CSS with a custom build process for optimal performance and developer experience.

### File Structure
```
├── src/
│   └── input.css          # Source Tailwind CSS file
├── static/css/
│   ├── tailwind.css       # Generated CSS (do not edit)
│   └── custom.css         # Legacy styles
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Build scripts
```

### Available Scripts

#### Development
```bash
# Watch for changes and rebuild CSS automatically
npm run css-watch

# Run both CSS watcher and Hugo server together
npm run dev
```

#### Production
```bash
# Build minified production CSS
npm run build-css-prod

# Build entire site for production
npm run build
```

### Development Workflow

1. **Start development servers:**
   ```bash
   # Terminal 1: Start CSS watcher
   npm run css-watch
   
   # Terminal 2: Start Hugo server
   hugo server
   ```

   Or run both together:
   ```bash
   npm run dev
   ```

2. **Making CSS changes:**
   - Edit `src/input.css` for Tailwind utilities and custom components
   - Use `@apply` directives for component styling
   - Add/modify Tailwind classes in HTML templates
   - CSS will automatically rebuild when files change

3. **Adding new Tailwind classes:**
   - Update `tailwind.config.js` for custom colors, fonts, or extensions
   - Restart CSS watcher after config changes:
     ```bash
     # Stop current watcher (Ctrl+C)
     npm run css-watch
     ```

### Important Notes

- **Never edit `static/css/tailwind.css` directly** - it's auto-generated
- **CSS purging is enabled** - only used classes are included in final build
- **Custom legacy styles** remain in `static/css/custom.css`
- **Bootstrap classes removed** - all styling now uses Tailwind CSS

### Troubleshooting

#### CSS not updating
1. Stop CSS watcher (Ctrl+C)
2. Delete `static/css/tailwind.css`
3. Run `npm run build-css-prod`
4. Restart development workflow

#### Missing classes
- Check `tailwind.config.js` content paths
- Ensure file extensions are included
- Restart CSS watcher after config changes

#### Performance issues
- Use `npm run build-css-prod` for minified production CSS
- Consider removing unused custom CSS from `custom.css`

## Hugo Development

### Local development
```bash
hugo server
# Site available at http://localhost:1313
```

### Building for production
```bash
hugo --minify
# Output in ./public/
```

## Contributing

When contributing changes that affect styling:

1. Follow the Tailwind CSS workflow above
2. Test changes locally with `npm run dev`
3. Build production CSS with `npm run build-css-prod`
4. Commit both source changes and generated CSS
5. Include screenshots for visual changes 

