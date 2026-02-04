import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 scroll-mt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00BFFF]">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Interested in collaborating or learning more about our projects? Get in touch with us.
          </p>
          <Button
            asChild
            className="bg-[#00BFFF] hover:bg-[#3367D6] text-white font-semibold px-8 py-6 rounded-full text-lg"
          >
            <a href="mailto:kasinadhsarma@gmail.com">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

