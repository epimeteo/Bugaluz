import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading>¿Qué es BUGALUZ?</SectionHeading>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <AnimateOnScroll animation="slide-right" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Un festival único de luz y energía</h3>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <p className="text-gray-700 mb-6">
                BUGALUZ es un concepto integral concebido como una celebración de la luz en sus manifestaciones como
                puente entre la historia y el futuro, tecnología, ciencia y arte.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={400}>
              <p className="text-gray-700">
                BUGALUZ se compone de cuatro grandes experiencias para cada una de esas áreas.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="slide-left" delay={300}>
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20section%20cathedral-exterior.jfif-h4W83oVBdj40SjwtOVk9rBmBqthtb6.jpeg"
                  alt="Catedral San Pedro de Buga"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="mt-3 text-sm text-gray-600 italic text-center">
                La Catedral de San Pedro, epicentro del fenómeno solar que inspira Bugaluz.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
