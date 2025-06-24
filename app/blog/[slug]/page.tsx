"use client"

import { ClientBlogPost } from "./ClientBlogPost"

// This would typically come from your markdown files
const blogPosts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js 15",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building React applications even more enjoyable. In this post, we'll explore the key features and how to get started.

## What's New in Next.js 15

### App Router Improvements
The App Router continues to evolve with better performance and developer experience improvements.

### Enhanced Server Components
Server Components are now more powerful and easier to use, allowing for better performance and SEO.

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features

1. **Improved Performance** - Faster builds and runtime performance
2. **Better Developer Experience** - Enhanced error messages and debugging
3. **New APIs** - Additional hooks and utilities for common use cases

## Conclusion

Next.js 15 is a solid upgrade that brings meaningful improvements to the developer experience while maintaining the framework's core strengths.
    `,
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for React Developers",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "Best Practices"],
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become an essential tool for React developers. Here are some best practices to help you write better TypeScript code.

## Type Your Props Properly

Always define interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  )
}
\`\`\`

## Use Generic Types

Generic types make your components more flexible and reusable.

## Conclusion

Following these practices will help you write more maintainable and type-safe React applications.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <ClientBlogPost params={params} blogPosts={blogPosts} />
}
