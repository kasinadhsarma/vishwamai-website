import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function DeveloperProfile() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c] rounded-3xl p-10 shadow-xl overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(0,191,255,0.3)_0%,rgba(0,0,0,0)_70%)] animate-[spin_20s_linear_infinite]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full border-4 border-[#00BFFF] overflow-hidden shadow-[0_0_20px_rgba(0,191,255,0.5)] mb-6">
              <Image
                src="/me.jpg"
                alt="Kasinadhsarma"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2 text-[#00BFFF]">Kasinadhsarma</h3>
              <p className="text-gray-300 mb-1">Sole Developer of VishwamAI</p>
              <p className="text-gray-300 mb-1">Innovator in AI Development</p>
              <p className="text-gray-300">Assisted by Claude AI and Devin AI</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/kasinadhsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] hover:text-white hover:-translate-y-1 transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kasinadhsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] hover:text-white hover:-translate-y-1 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/kasinadhsarma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFFF] hover:text-white hover:-translate-y-1 transition-all"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

