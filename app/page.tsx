import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import DeveloperProfile from "@/components/developer-profile"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <DeveloperProfile />
      <ContactSection />
      <Footer />
    </main>
  )
}

