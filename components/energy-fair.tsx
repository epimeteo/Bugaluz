import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Zap, Wind, Sun, Leaf } from "lucide-react"

export default function EnergyFair() {
  const innovations = [
    {
      title: "Paneles Solares de Alta Eficiencia",
      description: "Última generación de paneles solares con eficiencia superior al 30%.",
      icon: <Sun className="h-6 w-6 text-orange-500" />,
      category: "Solar",
    },
    {
      title: "Almacenamiento Energético Avanzado",
      description: "Baterías de estado sólido con mayor capacidad y vida útil.",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      category: "Almacenamiento",
    },
    {
      title: "Microredes Inteligentes",
      description: "Sistemas de distribución local que optimizan el consumo energético.",
      icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
      category: "Distribución",
    },
    {
      title: "Turbinas Eólicas Urbanas",
      description: "Diseñadas para funcionar eficientemente en entornos urbanos con poco viento.",
      icon: <Wind className="h-6 w-6 text-orange-500" />,
      category: "Eólica",
    },
  ]

  const talks = [
    {
      title: "El Futuro de la Energía Solar en Latinoamérica",
      speaker: "Dra. María Rodríguez",
      organization: "Instituto de Energías Renovables",
      time: "14:00 - 15:30",
      date: "26 de julio, 2025",
    },
    {
      title: "Transición Energética: Desafíos y Oportunidades",
      speaker: "Dr. Carlos Mendoza",
      organization: "Universidad Nacional de Colombia",
      time: "16:00 - 17:30",
      date: "26 de julio, 2025",
    },
    {
      title: "Comunidades Energéticas: Modelos de Éxito",
      speaker: "Ing. Laura Gómez",
      organization: "Asociación Colombiana de Energías Renovables",
      time: "10:00 - 11:30",
      date: "27 de julio, 2025",
    },
  ]

  return (
    <section id="energy-fair" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Feria de Energía y Transición</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Innovaciones Destacadas</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {innovations.map((innovation, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-orange-100 p-2">{innovation.icon}</div>
                      <Badge variant="outline" className="bg-orange-50 text-orange-700">
                        {innovation.category}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3 text-lg">{innovation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{innovation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-orange-50 p-6 border border-orange-100">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Leaf className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Stands Interactivos</h4>
                  <p className="mt-2 text-gray-600">
                    Visita nuestros stands interactivos donde podrás experimentar de primera mano las últimas
                    tecnologías en energía renovable. Aprende sobre el funcionamiento de paneles solares,
                    aerogeneradores y sistemas de almacenamiento energético a través de demostraciones prácticas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Conferencias y Paneles</h3>
            <div className="space-y-4">
              {talks.map((talk, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{talk.title}</CardTitle>
                    <CardDescription>
                      {talk.speaker} · {talk.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{talk.date}</span>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{talk.time}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">Participa como Expositor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    ¿Tu empresa está innovando en el campo de la energía sostenible? Forma parte de nuestra feria y
                    conecta con profesionales, inversores y el público interesado en la transición energética.
                  </p>
                  <ul className="mb-4 space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Stands personalizados de 3x3m y 6x3m</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Inclusión en el catálogo digital del evento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Oportunidad de presentar en el escenario principal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span>
                      <span>Networking con líderes de la industria</span>
                    </li>
                  </ul>
                  <a
                    href="#contact"
                    className="inline-block rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                  >
                    Solicitar información
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
