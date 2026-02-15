# Tuktuk Atelier - Premium Luxury Website

A premium, ultra-minimal luxury website for Tuktuk Atelier, an artisanal decor brand specializing in handmade Lippan art (mud + mirror work), wall panels, and bespoke decor.

## Features

- **Premium Design**: Ultra-minimal luxury aesthetic with earthy color palette (clay, brass, ivory, charcoal)
- **Fully Static**: Optimized for static hosting on GitHub Pages
- **SEO Ready**: Complete OpenGraph, Twitter Cards, and schema.org markup
- **Dark Mode**: Smooth transitions between light and dark themes
- **Responsive**: Mobile-first design with elegant breakpoints
- **Micro-interactions**: Subtle animations and hover effects using Framer Motion
- **TypeScript**: Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 13 (App Router) with static export
- **Styling**: Tailwind CSS with custom luxury design system
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Typography**: Google Fonts (Cormorant Garamond serif + Inter sans)
- **Icons**: Lucide React

## Pages

### Public Pages
- **Home** (`/`) - Hero, featured collections, products, testimonials, Instagram preview
- **Shop** (`/shop`) - Product grid with filters (collection, price, availability)
- **Product Detail** (`/shop/[slug]`) - Gallery, specifications, enquiry modal, related products
- **Collections** (`/collections`) - All collections with editorial intros
- **Collection Detail** (`/collections/[slug]`) - Collection story and products
- **Bespoke Commissions** (`/commissions`) - Process overview, pricing, commission form
- **The Atelier** (`/atelier`) - Brand story, craft process, philosophy
- **Open Source** (`/open-source`) - Open source projects and contributions
- **Blog** (`/blog`) - Articles about craft, design, collecting
- **Blog Post** (`/blog/[slug]`) - Individual article with related posts
- **Contact** (`/contact`) - Contact form and information

### Data Structure
All content is stored in `/data` as TypeScript files for easy editing:
- `products.ts` - Product catalog with images, pricing, editions
- `collections.ts` - Collection information and stories
- `blog.ts` - Blog posts and articles
- `testimonials.ts` - Client testimonials

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tuktuk-atelier
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

Build the static site:
```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to GitHub Pages

### Method 1: Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. The build creates an `out` directory with all static files

3. Push the `out` directory contents to the `gh-pages` branch:
```bash
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:yourusername/your-repo.git main:gh-pages
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

### Method 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customization

### Colors
Update the luxury color palette in `tailwind.config.ts`:
```typescript
luxury: {
  charcoal: '#2B2B2B',
  ivory: '#F5F1E8',
  clay: '#C9B8A3',
  brass: '#B8956A',
},
```

### Typography
Fonts are loaded from Google Fonts in `app/globals.css`. Update the import URL to change fonts.

### Content
1. **Products**: Edit `/data/products.ts`
2. **Collections**: Edit `/data/collections.ts`
3. **Blog**: Edit `/data/blog.ts`
4. **Testimonials**: Edit `/data/testimonials.ts`

### Images
Replace placeholder images with your own:
- Use Unsplash URLs or upload to `/public` directory
- Recommended: High-quality images (1200x1600 for products, 1920x1080 for banners)
- Optimize images before upload for best performance

### Contact Information
Update contact details in:
- `/components/footer.tsx`
- `/app/contact/page.tsx`
- `/components/concierge-button.tsx`

## Performance

The site is optimized for performance:
- Static generation for instant page loads
- Image optimization through Next.js Image component
- Lazy loading for images and components
- Minimal JavaScript bundle size
- Tree-shaking and code splitting

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is built for Tuktuk Atelier. All rights reserved.

## Credits

- Design & Development: Custom luxury e-commerce solution
- UI Components: shadcn/ui
- Icons: Lucide React
- Fonts: Google Fonts (Cormorant Garamond, Inter)
- Images: Unsplash (placeholders - replace with actual product photography)

## Support

For questions or issues, contact hello@tuktukatelier.com
