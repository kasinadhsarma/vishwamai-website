import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#161616]">
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
                  Loneliness Got It Right (PBAI)
                </h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg md:text-xl leading-relaxed">
                  An innovative AI companion designed to address the growing challenge of social isolation and loneliness in modern society.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  PBAI leverages advanced natural language processing, emotional intelligence, and personalized interaction patterns to provide meaningful companionship and support. Our mission is to create an AI that truly understands and responds to human emotional needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Emotional Intelligence</h4>
                      <p className="text-sm text-gray-400">Advanced empathy and understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Personalized Support</h4>
                      <p className="text-sm text-gray-400">Tailored to individual needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">24/7 Availability</h4>
                      <p className="text-sm text-gray-400">Always there when you need it</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#00BFFF]"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Privacy-Focused</h4>
                      <p className="text-sm text-gray-400">Your conversations stay secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

