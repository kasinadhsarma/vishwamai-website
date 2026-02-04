"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-[#00BFFF]">
            VishwamAI
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#home" className="text-white hover:text-[#00BFFF] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white hover:text-[#00BFFF] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-white hover:text-[#00BFFF] transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-[#00BFFF] transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" suppressHydrationWarning>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#161616] text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#home" className="text-lg font-medium hover:text-[#00BFFF] transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-lg font-medium hover:text-[#00BFFF] transition-colors">
                  About
                </Link>
                <Link href="#projects" className="text-lg font-medium hover:text-[#00BFFF] transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:text-[#00BFFF] transition-colors">
                  Contact
                </Link>
                <div className="mt-4 flex items-center">
                  <span className="mr-2 text-sm">Theme:</span>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}

