"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostType {
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

interface BlogPosts {
  [key: string]: BlogPostType
}

interface Props {
  params: { slug: string }
  blogPosts: BlogPosts
}

export const ClientBlogPost = ({ params, blogPosts }: Props) => {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" asChild>
        <Link href="/blog">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      <Card>
        <CardHeader className="space-y-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
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
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {line.slice(2)}
                  </h1>
                )
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {line.slice(3)}
                  </h2>
                )
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-lg font-medium mt-4 mb-2">
                    {line.slice(4)}
                  </h3>
                )
              }
              if (line.startsWith("```")) {
                return null // Handle code blocks separately if needed
              }
              if (line.trim() === "") {
                return <br key={index} />
              }
              return (
                <p key={index} className="mb-4">
                  {line}
                </p>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
