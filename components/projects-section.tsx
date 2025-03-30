import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "VishwamAI DeepMind",
    description:
      "Creating an advanced AI model with superior cognitive abilities through deep learning and neural network research.",
  },
  {
    title: "Advanced SWE Agent",
    description:
      "Developing an AI-powered software engineering assistant to enhance productivity in software development.",
  },
  {
    title: "AI-driven Data Analytics",
    description:
      "Building robust AI systems for data analysis and interpretation to support decision-making processes.",
  },
  {
    title: "Automated Customer Support",
    description:
      "Creating intelligent chatbots and virtual assistants to handle customer queries and improve user experience.",
  },
  {
    title: "Healthcare AI Solutions",
    description:
      "Applying AI in the healthcare sector for better diagnosis, predictive analytics, and personalized treatment plans.",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-none hover:translate-y-[-10px] transition-transform duration-300"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-[#00BFFF]">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

