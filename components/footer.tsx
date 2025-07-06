import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
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
        <div className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} John Doe. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
} 