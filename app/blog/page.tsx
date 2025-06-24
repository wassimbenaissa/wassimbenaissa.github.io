import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

// This would typically come from your markdown files or a CMS
const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "A comprehensive guide to building modern web applications with the latest version of Next.js.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Learn how to write better TypeScript code in your React applications with these proven patterns.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "Best Practices"],
  },
  {
    slug: "building-accessible-components",
    title: "Building Accessible React Components",
    excerpt: "A deep dive into creating inclusive user interfaces that work for everyone.",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["Accessibility", "React", "UI/UX"],
  },
]

export default function Blog() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-muted-foreground">Thoughts, tutorials, and insights about web development and technology.</p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
