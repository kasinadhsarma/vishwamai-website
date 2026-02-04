export default function AboutSection() {
  return (
    <section id="about" className="py-[100px] min-h-screen flex items-center bg-black scroll-mt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[18px] leading-[1.6] text-white mb-6">
            At VishwamAI, we are dedicated to pushing the boundaries of what's possible with Artificial Intelligence. We believe in building agentic AI systems that solve complex real-world problems and transform how we interact with technology.
          </p>
          <p className="text-[18px] leading-[1.6] text-white">
            Our mission is to bridge the gap between imagination and reality. Through our flagship project, <span className="text-[#00BFFF] font-semibold">Design Wear</span>, we're pioneering a new era of digital fashion, empowering users to design, visualize, and experience clothing like never before.
          </p>
        </div>
      </div>
    </section>
  )
}
