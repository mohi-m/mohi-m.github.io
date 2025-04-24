# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. Features smooth animations, dark mode, and a clean design.

![Portfolio Preview](/public/images/website_preview.png)

## 🚀 Features

- Modern, responsive design
- Dark mode support
- Smooth scroll animations using Framer Motion
- Optimized performance


## 🛠️ Tech Stack

- **Framework:** React with TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## 🏗️ Project Structure

```
src/
├── components/          # React components
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx           # Entry point

public/
└── images/            # Static images
    ├── background/    # Background images
    ├── education/     # Education logos
    ├── experience/    # Company logos
    ├── projects/      # Project screenshots
    └── skills/        # Skill icons
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohi-m/mohi-m.github.io.git
cd mohi-m.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:5173 to view it in the browser.

### Building for Production

```bash
npm run build
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, thanks to the GitHub Actions workflow.

## 🎨 Customization

### Colors

Colors can be customized in `tailwind.config.js`. The site uses a custom color palette with primary and secondary colors, along with dark mode support.

### Content

Update the content by modifying the relevant components in `src/components/`:

- `About.tsx` - About section content
- `Projects.tsx` - Project showcase
- `Experience.tsx` - Work experience
- `Education.tsx` - Educational background
- `Skills.tsx` - Technical skills
- `Contact.tsx` - Contact information

### Images

Replace images in the `public/images/` directory while maintaining the folder structure.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
