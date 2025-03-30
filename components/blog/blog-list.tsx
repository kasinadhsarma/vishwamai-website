import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample blog data
const blogPosts = [
  {
    id: "vishwamai-v1",
    title: "VishwamAI V1: Our First Major Release",
    excerpt:
      "Introducing VishwamAI V1, our first major AI model designed to revolutionize natural language understanding and generation.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Product",
    slug: "vishwamai-v1-release",
  },
  {
    id: "reinforcement-learning",
    title: "Embracing the Power of Reinforcement Learning",
    excerpt:
      "How we're using reinforcement learning techniques to improve our AI models and create more responsive systems.",
    date: "March 6, 2025",
    readTime: "4 min read",
    category: "Research",
    slug: "reinforcement-learning-power",
  },
  {
    id: "ai-ethics",
    title: "Ethical Considerations in AI Development",
    excerpt:
      "Our approach to ensuring ethical AI development and deployment, with a focus on transparency and fairness.",
    date: "February 28, 2025",
    readTime: "6 min read",
    category: "Ethics",
    slug: "ethical-considerations-ai",
  },
  {
    id: "future-of-ai",
    title: "The Future of AI: Our Vision",
    excerpt: "Our perspective on where AI technology is headed and how VishwamAI is positioning itself for the future.",
    date: "February 20, 2025",
    readTime: "7 min read",
    category: "Vision",
    slug: "future-of-ai-vision",
  },
  {
    id: "neural-networks",
    title: "Advanced Neural Network Architectures",
    excerpt:
      "A deep dive into the neural network architectures that power our AI models and enable breakthrough performance.",
    date: "February 12, 2025",
    readTime: "8 min read",
    category: "Technical",
    slug: "advanced-neural-networks",
  },
  {
    id: "ai-applications",
    title: "Real-world Applications of VishwamAI",
    excerpt: "Exploring how our AI technology is being applied across industries to solve complex problems.",
    date: "February 5, 2025",
    readTime: "5 min read",
    category: "Applications",
    slug: "real-world-applications",
  },
]

export default function BlogList() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden border-0 bg-white dark:bg-[#161616] shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-blue-100 dark:bg-blue-900/20">
                  <Image
                    src={`/placeholder.svg?height=250&width=500&text=${post.title}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#00BFFF] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

