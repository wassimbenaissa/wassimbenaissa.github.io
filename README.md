# Personal Website

A modern personal website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, blog functionality, and responsive layout.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 📝 Blog with MDX support
- 🎨 Modern UI with shadcn/ui components
- ⚡ Static site generation for fast loading
- 🚀 Deployed on GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or clone this repository**

2. **Update the configuration:**
   - In `next.config.mjs`, change `/personal-website` to your repository name
   - Update personal information in the components
   - Add your own blog posts in the content directory

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

4. **Push to main branch:**
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Update the `cname` field in `.github/workflows/deploy.yml`
3. Configure your domain's DNS to point to GitHub Pages

## Customization

### Personal Information
- Update `app/page.tsx` with your information
- Modify `app/resume/page.tsx` with your experience
- Replace placeholder content with your own

### Blog Posts
- Add new blog posts in `app/blog/[slug]/page.tsx`
- Update the `blogPosts` object with your content
- For better content management, consider using a CMS or markdown files

### Styling
- Customize colors in `app/globals.css`
- Modify components in the `components` directory
- Update the theme configuration in `tailwind.config.ts`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **MDX** - Markdown with JSX support for rich content
- **next-themes** - Dark mode support
- **Lucide React** - Beautiful icons

## License

This project is open source and available under the [MIT License](LICENSE).
