import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>¿Qué es BUGALUZ?</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-orange-500">BUGALUZ</span> es un festival único que celebra un fenómeno
              solar extraordinario que ocurre en la Catedral de San Pedro en Buga, Colombia. Dos veces al año, el 17 de
              mayo y el 26 de julio, un rayo de luz atraviesa el óculo de la catedral, creando un espectáculo luminoso
              que ha inspirado a generaciones.
            </p>
            <p className="mb-6 text-lg text-gray-800">
              Este festival transforma este fenómeno natural en una celebración de la luz, el arte y la transición
              energética. A través de instalaciones lumínicas, video mappings, conferencias y exposiciones, BUGALUZ
              conecta la tradición con la innovación, invitando a reflexionar sobre nuestro futuro energético.
            </p>
            <p className="mb-8 text-lg text-gray-800">
              Desde su primera edición en 2025, BUGALUZ aspira a convertirse en un referente internacional, atrayendo
              visitantes de todo el mundo para presenciar este fenómeno único y participar en un diálogo sobre la
              energía sostenible.
            </p>

            <Button className="group w-fit bg-orange-500 hover:bg-orange-600">
              Conoce nuestra historia
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-w-4 aspect-h-3 relative h-full w-full">
              <img
                src="/cathedral-exterior.jpg"
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fenómeno Solar",
              description: "Un rayo de luz que atraviesa la catedral dos veces al año, creando un espectáculo único.",
              icon: "✨",
            },
            {
              title: "Arte Lumínico",
              description: "Instalaciones y video mappings que transforman los espacios urbanos de Buga.",
              icon: "🎨",
            },
            {
              title: "Transición Energética",
              description: "Conferencias y exposiciones sobre el futuro sostenible de la energía.",
              icon: "⚡",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
