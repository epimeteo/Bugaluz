"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Program() {
  const [activeTab, setActiveTab] = useState("day1")

  const programData = {
    day1: [
      {
        time: "10:00",
        title: "Apertura Stands Feria Tecnológica",
        description:
          "Inauguración de los stands de la feria tecnológica con las últimas innovaciones en energía solar.",
        location: "Parque Cabal",
        category: "feria",
      },
      {
        time: "14:00",
        title: "Paneles y exposiciones académicas y de negocios",
        description: "Conferencias y paneles con expertos en energía solar y sostenibilidad.",
        location: "Auditorios",
        category: "conferencia",
      },
      {
        time: "20:00",
        title: "Mapping",
        description: "Espectáculo de mapping en la fachada de la Catedral de San Pedro.",
        location: "Catedral",
        category: "espectáculo",
      },
    ],
    day2: [
      {
        time: "09:00",
        title: "Continuación Stands Feria Tecnológica",
        description: "Segundo día de la feria tecnológica con exhibiciones y demostraciones.",
        location: "Parque Cabal",
        category: "feria",
      },
      {
        time: "09:00 - 12:00",
        title: "Paneles y exposiciones académicas y de negocios",
        description: "Continuación de conferencias y paneles sobre innovación en energía solar.",
        location: "Auditorios",
        category: "conferencia",
      },
      {
        time: "16:00",
        title: "Evento Solar Catedral. Concierto Música de Cámara",
        description: "Observación del fenómeno solar en la Catedral acompañado de un concierto de música de cámara.",
        location: "Catedral",
        category: "evento principal",
      },
      {
        time: "20:00",
        title: "Mapping",
        description: "Espectáculo de mapping en la fachada de la Catedral de San Pedro.",
        location: "Catedral",
        category: "espectáculo",
      },
    ],
    day3: [
      {
        time: "09:00 - 19:00",
        title: "Continuación Stands Feria Tecnológica. Cierre",
        description: "Último día de la feria tecnológica y ceremonia de clausura.",
        location: "Parque Cabal",
        category: "feria",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const categoryMap: Record<string, string> = {
      "evento principal": "bg-orange-100 text-orange-800 border-orange-200",
      conferencia: "bg-blue-100 text-blue-800 border-blue-200",
      espectáculo: "bg-purple-100 text-purple-800 border-purple-200",
      feria: "bg-green-100 text-green-800 border-green-200",
      taller: "bg-yellow-100 text-yellow-800 border-yellow-200",
      ceremonia: "bg-red-100 text-red-800 border-red-200",
    }

    return categoryMap[category] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <section id="program" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Programa 2025</SectionHeading>

        <div className="mt-12">
          <Tabs defaultValue="day1" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="day1" className="text-base">
                25 de Julio
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-base">
                26 de Julio
              </TabsTrigger>
              <TabsTrigger value="day3" className="text-base">
                27 de Julio
              </TabsTrigger>
            </TabsList>

            {Object.entries(programData).map(([day, events]) => (
              <TabsContent key={day} value={day} className="mt-6 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">
                    {day === "day1" ? "25 de Julio, 2025" : day === "day2" ? "26 de Julio, 2025" : "27 de Julio, 2025"}
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 md:left-12"></div>

                  <div className="space-y-8">
                    {events.map((event, index) => (
                      <div key={index} className="relative">
                        <div className="absolute left-8 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-orange-500 bg-white md:left-12"></div>

                        <Card className="ml-12 md:ml-20">
                          <CardHeader className="pb-2">
                            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                              <div>
                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                <CardDescription className="flex items-center gap-1 mt-1">
                                  <MapPin className="h-3 w-3" />
                                  {event.location}
                                </CardDescription>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                                <Clock className="h-4 w-4 mr-1 flex-shrink-0 text-orange-500" />
                                {event.time}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">{event.description}</p>
                            <Badge className={`mt-3 ${getCategoryColor(event.category)}`}>{event.category}</Badge>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 rounded-lg bg-orange-50 p-6 border border-orange-100">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Información Adicional</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Ubicaciones</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span>
                    <strong>Catedral de San Pedro:</strong> Centro histórico de Buga
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span>
                    <strong>Parque Cabal:</strong> Frente a la Catedral
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span>
                    <strong>Auditorio Municipal:</strong> Calle 4 #12-45
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Recomendaciones</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Llegue con anticipación para los eventos principales</li>
                <li>Use ropa cómoda y protección solar</li>
                <li>Traiga su cámara para capturar el fenómeno solar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
