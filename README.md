# Affan's Portfolio

A personal portfolio website for Affan, a CSBS engineering student aspiring to be an SDE, built with Next.js 15, TypeScript, and Tailwind CSS featuring a custom hand-drawn design system.

## Features

- **Hand-Drawn Design System**: Custom colors, fonts, borders, shadows, and textures
- **Data-Driven**: All content in `src/lib/data.ts` for easy updates
- **Static Export Compatible**: Built for Netlify deployment
- **Responsive**: Mobile-first design
- **Security Headers**: Configured via `netlify.toml`

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for Google Fonts (Kalam & Patrick Hand)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

Build the application:
```bash
npm run build
```

With `output: 'export'` in `next.config.ts`, this produces a static site in the `.next` directory.

### Deployment to Netlify

1. Push the repository to GitHub
2. Connect the repository to Netlify
3. Netlify will automatically detect the build command (`npm run build`) and publish directory (`.next`)
4. Alternatively, drag and drop the `.next` folder to Netlify's drag-and-drop interface

## Project Structure

```
src/
├── app/                 # App Router pages and layout
├── components/          # Reusable UI components
├── lib/
│   ├── data.ts          # All content (projects, skills, personal info)
│   └── fonts.ts         # Google Fonts configuration
└── ... 
public/
    ├── resume.pdf       # Place your resume PDF here
    ├── tape-strip.svg   # Decorative tape strip
    └── thumbtack.svg    # Decorative thumbtack
```

## Design System

The hand-drawn design system includes:

- **Colors**: 
  - Background: `#fdfbf7`
  - Foreground: `#2d2d2d`
  - Muted: `#e5e0d8`
  - Accent: `#ff4d4d`
  - Secondary Accent: `#2d5da1`
  - Border: `#2d2d2d`

- **Fonts**:
  - Headings: Kalam 700
  - Body: Patrick Hand 400

- **Borders**: Custom wobbly radius (see `tailwind.config.js`)
- **Shadows**: Hard offset only (`4px 4px 0px 0px #2d2d2d`)
- **Texture**: Paper-grain dot background
- **Decorations**: Tape strips, thumbtacks, hand-drawn icons, rotated elements

## Security

The `netlify.toml` file includes the following security headers:
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Disabling camera, microphone, and geolocation

## Customization

1. **Content**: Edit `src/lib/data.ts` to update projects, skills, and personal information
2. **Styling**: Modify `tailwind.config.js` to adjust the design system tokens
3. **Assets**: Replace SVGs in `public/` or add your own

## Notes

- The portfolio uses static data for simplicity. For real GitHub data, you would need to implement build-time fetching or use a CMS.
- The resume PDF should be placed in `public/resume.pdf` and linked from the Resume section.
- Replace placeholder social links with your actual profiles.

## License

This project is open source and available under the [MIT License](LICENSE).