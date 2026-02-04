import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#161616] scroll-mt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">Our Current Project</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] border-2 border-[#00BFFF]/30 hover:border-[#00BFFF] hover:shadow-2xl hover:shadow-[#00BFFF]/20 transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 mb-4 bg-[#00BFFF]/20 border border-[#00BFFF] rounded-full">
                  <span className="text-sm font-semibold text-[#00BFFF]">FLAGSHIP PROJECT</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#00BFFF]">
                  Design Wear
                </h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg md:text-xl leading-relaxed">
                  Design your clothes, try them on virtually, and buy the perfect fit—custom fashion made simple.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Design Wear is a virtual fashion platform that allows users to design custom outfits and virtually wear them using AI-powered try-on technology. By bridging design, visualization, and virtual fitting, we're redefining the online shopping experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Virtual Try-On</h4>
                      <p className="text-sm text-gray-400">AI-powered realistic fitting</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Custom Design</h4>
                      <p className="text-sm text-gray-400">Create unique outfits instantly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Agentic AI Core</h4>
                      <p className="text-sm text-gray-400">Intelligent fit refinement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Seamless Experience</h4>
                      <p className="text-sm text-gray-400">From design to purchase</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="https://devpost.com/software/design-wear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00BFFF] hover:bg-[#3367D6] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
