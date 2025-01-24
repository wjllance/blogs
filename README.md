# Technical Blog

A modern, responsive blog platform built with Next.js 14 and TypeScript, featuring markdown support and theme switching.

## Features

- 🎨 Light/Dark theme support with system preference detection
- 📝 Markdown content support with syntax highlighting
- 🎯 Responsive design with Tailwind CSS
- 🚀 Fast page loads with static generation
- 📱 Mobile-friendly interface
- 🔄 Smooth transitions and animations

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown Processing**:
  - [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing
  - [remark](https://github.com/remarkjs/remark) for markdown rendering
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for prose styling

## Project Structure

```
src/
├── app/                   # Next.js app router pages
│   ├── page.tsx          # Home page
│   ├── posts/
│   │   └── [id]/        # Dynamic post routes
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx  # Theme switch button
├── lib/                  # Utility functions
│   └── markdown.ts      # Markdown processing utilities
└── theme/               # Theme configuration
    └── constants.ts     # Theme colors and styles
posts/                   # Markdown blog posts
```

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd technical-blog
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating Blog Posts

1. Create a new markdown file in the \`posts\` directory
2. Add frontmatter with title and date:
\`\`\`markdown
---
title: 'Your Post Title'
date: '2024-03-19'
---

Your content here...
\`\`\`

## Theme Customization

The theme system is defined in \`src/theme/constants.ts\`. You can customize:
- Color schemes for light/dark modes
- Typography styles
- Animations and transitions
- Layout constants

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own blog!
