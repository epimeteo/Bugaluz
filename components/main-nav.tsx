"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Buga Festival
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 z-50 bg-background p-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-lg font-medium py-2 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="w-full mt-4">Register Now</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
            <Button>Register Now</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
