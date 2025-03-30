import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

// Sample blog data - in a real app, this would come from a database or CMS
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
    author: "Kasinadhsarma",
    content: `
      <p>We are thrilled to announce the release of VishwamAI V1, our first major AI model designed to revolutionize natural language understanding and generation. After months of research, development, and testing, we're proud to share this milestone with our community.</p>
      
      <h2>Key Features</h2>
      <p>VishwamAI V1 comes with several groundbreaking features:</p>
      <ul>
        <li>Advanced natural language understanding with contextual awareness</li>
        <li>Improved reasoning capabilities for complex problem-solving</li>
        <li>Multilingual support for over 20 languages</li>
        <li>Specialized knowledge in scientific and technical domains</li>
        <li>Enhanced safety measures and ethical guardrails</li>
      </ul>
      
      <h2>Performance Benchmarks</h2>
      <p>Our model has achieved state-of-the-art results on multiple benchmarks, including MMLU, HumanEval, and GSM8K. We've focused particularly on reducing hallucinations and improving factual accuracy.</p>
      
      <h2>Looking Forward</h2>
      <p>This release is just the beginning. We're already working on VishwamAI V2, which will feature even more advanced capabilities and specialized domain knowledge. Stay tuned for updates!</p>
    `,
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
    author: "Kasinadhsarma",
    content: `
      <p>Reinforcement learning (RL) has emerged as one of the most promising approaches in AI development. At VishwamAI, we've been leveraging RL techniques to significantly improve our models' performance and capabilities.</p>
      
      <h2>What is Reinforcement Learning?</h2>
      <p>Reinforcement learning is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of cumulative reward. Unlike supervised learning, RL doesn't require labeled input/output pairs, making it particularly valuable for complex, real-world problems.</p>
      
      <h2>Our Approach</h2>
      <p>We've implemented a hybrid approach combining RLHF (Reinforcement Learning from Human Feedback) with more traditional RL methods. This allows our models to learn from both explicit human preferences and from their own interactions with environments.</p>
      
      <h2>Results and Improvements</h2>
      <p>The integration of RL has led to several notable improvements:</p>
      <ul>
        <li>30% reduction in harmful outputs</li>
        <li>25% improvement in following complex instructions</li>
        <li>Significant enhancement in reasoning capabilities</li>
        <li>More natural and contextually appropriate responses</li>
      </ul>
      
      <h2>Future Directions</h2>
      <p>We're continuing to explore new RL techniques, including multi-agent reinforcement learning and hierarchical RL approaches. These methods hold promise for developing AI systems with even greater capabilities and more nuanced understanding of human preferences.</p>
    `,
  },
  // Additional blog posts would be defined here
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>

          {/* Article header */}
          <div className="max-w-3xl mx-auto mb-10">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="aspect-video relative mb-10 rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=400&width=800&text=${post.title}`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-lg prose-blue">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author info */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt={post.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Developer at VishwamAI</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

