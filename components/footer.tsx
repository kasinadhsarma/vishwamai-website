"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#00BFFF]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-white hover:text-[#00BFFF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-white hover:text-[#00BFFF] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-[#00BFFF] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white hover:text-[#00BFFF] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    alert(
                      "We are not currently hiring, but we will be recruiting in the future. Stay tuned for updates!",
                    )
                  }
                  className="text-white hover:text-[#00BFFF] transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 text-center">
            <h3 className="text-lg font-semibold mb-4 text-[#00BFFF]">About VishwamAI</h3>
            <p className="text-white">Shaping the Future Through Advanced AI Solutions</p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#00BFFF]">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/VishwamAI_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00BFFF] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/vishwamai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00BFFF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/VishwamAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00BFFF] transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} VishwamAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

