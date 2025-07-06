import { ClientBlogPost } from "./ClientBlogPost"

// This would typically come from your markdown files
const blogPosts = {
  "the-art-of-product-roadmapping": {
    title: "The Art of Product Roadmapping",
    date: "2024-01-15",
    readTime: "7 min read",
    tags: ["Product Management", "Strategy", "Roadmap"],
    content: `
# The Art of Product Roadmapping

A well-crafted product roadmap is a powerful tool for aligning your team and stakeholders. It communicates the 'why' behind what you're building and sets a clear direction for the future.

## Key Elements of a Great Roadmap

### 1. Outcome-Oriented Goals
Focus on the problems you're solving for users, not just the features you're shipping.

### 2. Prioritization Framework
Use a consistent framework (e.g., RICE, MoSCoW) to make informed decisions about what to build next.

### 3. Clear Communication
Your roadmap should be easy for anyone in the company to understand, from engineers to executives.

## Conclusion

A product roadmap is a living document. Regularly review and adapt it as you learn more about your users and the market.
    `,
  },
  "mastering-user-interviews": {
    title: "Mastering User Interviews: A Guide for PMs",
    date: "2024-01-10",
    readTime: "9 min read",
    tags: ["User Research", "Product Management", "UX"],
    content: `
# Mastering User Interviews: A Guide for PMs

User interviews are one of the most effective ways to gain deep insights into your users' needs and pain points.

## Best Practices for Effective Interviews

### Ask Open-Ended Questions
Avoid leading questions that might bias the user's answers. Instead of "Do you like this feature?", try "How does this feature fit into your workflow?"

### Listen More Than You Talk
The goal is to understand the user's perspective. Give them space to share their thoughts without interruption.

### Dig Deeper
When a user mentions something interesting, don't be afraid to ask "Why?" to uncover the underlying motivations.

## Conclusion

Mastering the art of the user interview is a critical skill for any product manager. It's how you build empathy and ensure you're solving real problems for your users.
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
