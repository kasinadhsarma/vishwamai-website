export default function AboutSection() {
  return (
    <section id="about" className="py-24 min-h-screen flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            At VishwamAI, we are dedicated to advancing AI technology to address one of society's most pressing challenges: loneliness and social isolation.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to create meaningful AI companions that provide genuine emotional support and companionship. Through our flagship project, <span className="text-[#00BFFF] font-semibold">Loneliness Got It Right (PBAI)</span>, we're pioneering a new approach to mental wellness and human connection in the digital age.
          </p>
        </div>
      </div>
    </section>
  )
}

