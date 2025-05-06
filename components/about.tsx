import { SectionHeading } from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>¿Qué es BUGALUZ?</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg text-gray-800">
              <span className="font-bold text-orange-500">BUGALUZ</span> es un festival concebido y gestado en la ciudad
              de Buga, Colombia, inspirado en el extraordinario fenómeno que ocurre dos veces al año -17 de mayo y 26 de
              julio- en la Catedral de San Pedro, cuando rayos de luz atraviesan el óculo y dos saeteras de fachada
              principal de templo, creando un espectáculo luminoso que ha inspirado a generaciones. Hemos escogido la
              fecha del 26 de julio de cada año, como el punto de partida para imaginar un evento que celebre la luz
              como arte, como energía y como un puente entre la historia y el futuro.
            </p>
            <p className="mb-6 text-lg text-gray-800">
              BUGALUZ combinará arte lumínico y tecnología en un evento anual que integrará mapping y videomapping el
              cualquiera de 19 principales edificios históricos de la ciudad, experiencias e instalaciones de luz en
              espacios públicos, conferencias y paneles académicas, científicas y gubernamentales, teniendo como telón
              de fondo la feria exposición donde los gremios y empresas relacionadas con energía solar -patrocinadores
              del evento BUGALUZ-, anunciarán al mundo en cada versión, sus recientes avances tecnológicos.
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
