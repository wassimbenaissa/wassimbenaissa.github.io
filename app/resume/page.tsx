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
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-2 border-primary pl-4 space-y-4">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">Senior Full Stack Developer</h3>
                  <p className="text-primary font-medium">TechCorp Inc.</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2022 - Present
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    San Francisco, CA
                  </div>
                </div>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Led development of customer-facing web applications serving 100K+ users</li>
                <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>• Mentored junior developers and conducted code reviews</li>
              </ul>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline" className="text-xs">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  AWS
                </Badge>
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                  <p className="text-primary font-medium">StartupXYZ</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2020 - 2022
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Remote
                  </div>
                </div>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Built and maintained multiple client projects using modern web technologies</li>
                <li>• Collaborated with design team to implement pixel-perfect UI components</li>
                <li>• Optimized application performance resulting in 40% faster load times</li>
              </ul>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline" className="text-xs">
                  Vue.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Python
                </Badge>
                <Badge variant="outline" className="text-xs">
                  PostgreSQL
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-l-2 border-primary pl-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                <p className="text-primary font-medium">University of California, Berkeley</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2016 - 2020
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-1">Graduated Magna Cum Laude • GPA: 3.8/4.0</p>
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
