import { SectionHeading } from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>¿Qué es BUGALUZ?</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-orange-500">BUGALUZ</span> es un concepto integral concebido como una
              celebración de la luz en sus manifestaciones como puente entre la historia y el futuro, tecnología,
              ciencia y arte.
            </p>
            <p className="mb-6 text-lg text-gray-800">
              BUGALUZ se compone de cuatro grandes experiencias para cada una de esas áreas.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-w-4 aspect-h-3 relative h-full w-full">
              <img
                src="/cathedral-exterior.jpeg"
                alt="Catedral de San Pedro en Buga"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 backdrop-blur-sm">
              <p className="text-sm text-white md:text-base">
                La Catedral de San Pedro, epicentro del fenómeno solar que inspira BUGALUZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
