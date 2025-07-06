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
          Product Manager passionate about building products that users love.
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>Paris</span>
        </div>
      </section>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            I'm a passionate product manager with over 5 years of experience leading cross-functional teams to build and launch successful products. I love working at the intersection of technology, business, and user experience.
          </p>
          <p>
            When I'm not shipping products, you can find me exploring new coffee shops, hiking in the mountains, or reading about the latest tech trends.
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
              "Product Strategy",
              "Roadmap Planning",
              "User Research",
              "Agile Methodologies",
              "Jira & Confluence",
              "Market Analysis",
              "A/B Testing",
              "Data Analysis",
              "Figma",
              "SQL",
              "Stakeholder Management",
              "Go-to-Market Strategy",
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
