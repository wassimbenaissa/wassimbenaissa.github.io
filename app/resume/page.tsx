import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Calendar, MapPin } from "lucide-react"

export default function Resume() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Senior Product Manager</h3>
            <p className="text-muted-foreground">Tech Solutions Inc. | 2020 - Present</p>
            <ul className="list-disc list-inside mt-2 prose prose-neutral dark:prose-invert">
              <li>Led the development and launch of a new B2B SaaS platform, resulting in a 30% increase in user acquisition.</li>
              <li>Defined product strategy and roadmap, conducted user research, and managed the product backlog.</li>
              <li>Collaborated with engineering, design, and marketing teams to deliver high-impact features.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Product Manager</h3>
            <p className="text-muted-foreground">Innovate Co. | 2018 - 2020</p>
            <ul className="list-disc list-inside mt-2 prose prose-neutral dark:prose-invert">
              <li>Managed the product lifecycle of a mobile application from conception to launch.</li>
              <li>Analyzed user data and market trends to inform product decisions.</li>
              <li>Worked closely with stakeholders to ensure alignment on product goals.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h3 className="text-xl font-semibold">Master of Business Administration (MBA)</h3>
            <p className="text-muted-foreground">Stanford University | 2016 - 2018</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-muted-foreground">University of California, Berkeley | 2012 - 2016</p>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Docker", "Git", "Figma", "Vercel"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
