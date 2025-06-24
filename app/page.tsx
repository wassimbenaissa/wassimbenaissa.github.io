import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-12">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground mb-6">
          JD
        </div>
        <h1 className="text-4xl font-bold tracking-tight">John Doe</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>San Francisco, CA</span>
        </div>
      </section>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            I'm a passionate full-stack developer with over 5 years of experience building web applications. I love
            working with modern technologies like React, Next.js, and TypeScript to create seamless user experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new coffee shops, hiking in the mountains, or contributing to
            open-source projects.
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Tailwind CSS",
              "Docker",
              "AWS",
              "Git",
              "Figma",
              "GraphQL",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle>Get In Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href="mailto:john@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/johndoe" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/johndoe" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
