import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogHero from "@/components/blog/blog-hero"
import BlogList from "@/components/blog/blog-list"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0f4ff] to-[#e0e8ff] dark:from-black dark:to-[#101020]">
      <Header />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  )
}

