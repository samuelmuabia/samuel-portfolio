# Samuel Planet - Portfolio Website

A modern, recruiter-focused portfolio website built with Next.js 14, featuring internationalization (English/German) and smooth animations.

## Features

- 🌍 **Internationalization**: Full support for English (en) and German (de)
- 🎨 **Modern Design**: Clean, professional, and skimmable layout
- ✨ **Smooth Animations**: Framer Motion for subtle page loads and hover effects
- 📱 **Responsive**: Fully responsive design for all devices
- 🚀 **Performance**: Optimized with Next.js 14 App Router
- 👤 **Profile Image**: Professional profile image in hero section
- 🖼️ **Project Images**: Visual project showcase with live website links
- 📝 **Detailed Experience**: Comprehensive work experience with achievements and metrics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Important**: Add your assets:
   - Copy `cv_samuel_planet.pdf` to `public/cv_samuel_planet.pdf`
   - Add your profile image as `public/profile.jpg` (recommended: 800x800px, square)
   - Add project images to `public/projects/`:
     - `mygp.jpg`
     - `mybl.jpg`
     - `afdhaka.jpg`
     - `larive.jpg`
     - `cmcgroup.jpg`
     - `exerto.jpg`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will automatically redirect to `/en` (English) or you can access `/de` for German.

### Update Contact Information

Before deploying, make sure to:
- Update the email address in `components/Contact.tsx` (line 23) with your actual email
- Verify all live website links in `dictionaries/en.json` and `dictionaries/de.json` are correct
- Add your profile image to `public/profile.jpg`
- Add project screenshots to `public/projects/` folder

## Project Structure

```
├── app/
│   ├── [lang]/          # Language-specific routes
│   │   ├── layout.tsx   # Root layout with Navbar & Footer
│   │   └── page.tsx     # Homepage
│   └── globals.css      # Global styles
├── components/           # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx         # Hero with profile image
│   ├── Skills.tsx
│   ├── Experience.tsx   # Detailed experience timeline
│   ├── Projects.tsx      # Projects with images and live links
│   ├── Contact.tsx
│   └── Footer.tsx
├── dictionaries/         # Translation files
│   ├── en.json          # English content
│   └── de.json          # German content
├── lib/                 # Utility functions
│   └── dictionaries.ts
├── public/              # Static assets
│   ├── profile.jpg      # Profile image
│   ├── cv_samuel_planet.pdf
│   └── projects/        # Project images
└── middleware.ts         # i18n routing middleware
```

## Customization

### Adding Content

Edit the dictionary files in `dictionaries/` to update content:
- `en.json` for English content
- `de.json` for German content

### Adding Project Images

1. Take screenshots of your projects
2. Optimize images (recommended: 1200x800px, WebP or JPG)
3. Place them in `public/projects/` with the names specified in the dictionary files

### Styling

Modify `tailwind.config.ts` to customize the design system.

### Adding Languages

1. Create a new dictionary file in `dictionaries/` (e.g., `fr.json`)
2. Update `middleware.ts` to include the new locale
3. Update `lib/dictionaries.ts` to export the new dictionary

## Build

```bash
npm run build
```

## Deploy

The site can be deployed on Vercel, Netlify, or any platform supporting Next.js.

## License

© 2025 Samuel Muabia Planet. All rights reserved.
