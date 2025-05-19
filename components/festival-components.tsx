import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import { StaggeredAnimation } from "./staggered-animation"
import { Sun, Building2, Lightbulb, Users } from "lucide-react"

export default function FestivalComponents() {
  const components = [
    {
      title: "PATH OF LIFE",
      description:
        "372 asistentes presenciarán como la luz solar recorre la nave central de la Catedral San Pedro, generando una experiencia espiritual y arquitectónica inigualable.",
      icon: <Sun className="h-10 w-10 text-orange-500" />,
      color: "from-orange-500/20 to-orange-500/5",
      hoverColor: "group-hover:text-orange-600",
    },
    {
      title: "SUNERGY EXPO",
      description:
        "Feria de energías renovables, tecnología solar y soluciones sostenibles. Un espacio para las empresas afiliadas al gremio licenciado en donde presentarán sus avances en energías renovables.",
      icon: <Building2 className="h-10 w-10 text-green-500" />,
      color: "from-green-500/20 to-green-500/5",
      hoverColor: "group-hover:text-green-600",
    },
    {
      title: "LUMIA",
      description:
        "Mapping, instalaciones lumínicas y esculturas de luz toman la ciudad histórica, iluminando su memoria colectiva.",
      icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
      color: "from-purple-500/20 to-purple-500/5",
      hoverColor: "group-hover:text-purple-600",
    },
    {
      title: "SOLIS MUNDI",
      description:
        "Foro académico sobre cultura solar, transición energética y sostenibilidad, donde expertos panelistas del sector privado y público analizarán temas del sector energético renovable.",
      icon: <Users className="h-10 w-10 text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/5",
      hoverColor: "group-hover:text-blue-600",
    },
  ]

  return (
    <section id="components" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading>Componentes del Festival</SectionHeading>
        </AnimateOnScroll>

        <StaggeredAnimation
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          animation="scale-in"
          baseDelay={100}
          delayIncrement={100}
        >
          {components.map((component, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className={`transition-colors duration-300 ${component.hoverColor}`}>{component.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
                  {component.title}
                </h3>

                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {component.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
