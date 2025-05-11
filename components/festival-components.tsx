import { Sun, Lightbulb, Building2, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export default function FestivalComponents() {
  const components = [
    {
      id: "path-of-life",
      title: "PATH OF LIFE",
      description:
        "372 asistentes presenciarán como la luz solar recorre la nave central de la Catedral San Pedro, generando una experiencia espiritual y arquitectónica inigualable. Evento Solar en la Catedral: Una experiencia visual única que marca el punto culminante del festival.",
      icon: <Sun className="h-10 w-10 text-orange-500" />,
      color: "from-orange-500 to-yellow-500",
      hoverColor: "group-hover:from-orange-600 group-hover:to-yellow-600",
    },
    {
      id: "sunergy-expo",
      title: "SUNERGY EXPO",
      description:
        "Feria de energías renovables, tecnología solar y soluciones sostenibles. Un espacio para las empresas afiliadas al gremio licenciado. Feria de Energía Solar y Sostenibilidad: Stands donde los gremios y empresas patrocinadoras presentarán sus avances en energías renovables.",
      icon: <Building2 className="h-10 w-10 text-green-500" />,
      color: "from-green-500 to-emerald-500",
      hoverColor: "group-hover:from-green-600 group-hover:to-emerald-600",
    },
    {
      id: "lumia",
      title: "LUMIA",
      description:
        "Mapping, instalaciones lumínicas y esculturas de luz toman la ciudad histórica, iluminando su memoria colectiva. Mapping y videommaping sobre edificios históricos, exhibiciones de arte lumínico en espacios públicos.",
      icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
      color: "from-purple-500 to-indigo-500",
      hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-600",
    },
    {
      id: "solis-mundi",
      title: "SOLIS MUNDI",
      description:
        "Foro académico sobre cultura solar, transición energética y sostenibilidad. Expertos panelistas del sector privado y público analizarán temas del sector energético renovable.",
      icon: <Users className="h-10 w-10 text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-600",
    },
  ]

  return (
    <section id="components" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>Componentes del Festival</SectionHeading>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {components.map((component) => (
            <div
              key={component.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Gradient background that changes on hover */}
              <div
                className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${component.color} ${component.hoverColor} transition-all duration-300`}
              ></div>

              <div className="p-6 pt-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 group-hover:scale-110">
                    {component.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:text-gray-600">
                    3.2.{components.indexOf(component) + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                  {component.title}
                </h3>

                <p className="text-gray-600">{component.description}</p>

                {/* Animated arrow that appears on hover */}
                <div className="mt-4 flex items-center justify-end overflow-hidden">
                  <div className="transform translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
