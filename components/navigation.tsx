"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="font-bold text-xl">
              John Doe
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
