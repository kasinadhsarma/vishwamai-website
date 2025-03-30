export default function BlogHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-600/5 dark:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            VishwamAI Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Insights, research, and updates from our team on the latest in AI technology and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}

