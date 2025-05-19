"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "./animate-on-scroll"
import { StaggeredAnimation } from "./staggered-animation"

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
        category: "SUNERGY EXPO",
      },
      {
        time: "14:00",
        title: "Paneles y exposiciones académicas y de negocios",
        description: "Conferencias y paneles con expertos en energía solar y sostenibilidad.",
        location: "Auditorios",
        category: "SOLIS MUNDI",
      },
      {
        time: "20:00",
        title: "Mapping",
        description: "Espectáculo de mapping en la fachada de la Catedral de San Pedro.",
        location: "Catedral",
        category: "LUMIA",
      },
    ],
    day2: [
      {
        time: "09:00",
        title: "Feria de Energía y Transición",
        description: "Segundo día de la feria tecnológica con exhibiciones y demostraciones.",
        location: "Parque Cabal",
        category: "SUNERGY EXPO",
      },
      {
        time: "09:00 - 12:00",
        title: "Paneles y exposiciones académicas y de negocios",
        description: "Continuación de conferencias y paneles sobre innovación en energía solar.",
        location: "Auditorios",
        category: "SOLIS MUNDI",
      },
      {
        time: "16:00",
        title: "Evento Solar Catedral. Concierto Música de Cámara",
        description: "Observación del fenómeno solar en la Catedral acompañado de un concierto de música de cámara.",
        location: "Catedral",
        category: "PATH OF LIFE",
      },
      {
        time: "20:00",
        title: "Mapping",
        description: "Espectáculo de mapping en la fachada de la Catedral de San Pedro.",
        location: "Catedral",
        category: "LUMIA",
      },
    ],
    day3: [
      {
        time: "09:00 - 19:00",
        title: "Feria de Energía y Transición. Cierre",
        description: "Último día de la feria tecnológica y ceremonia de clausura.",
        location: "Parque Cabal",
        category: "SUNERGY EXPO",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const categoryMap: Record<string, string> = {
      "PATH OF LIFE": "bg-orange-100 text-orange-800 border-orange-200",
      "SOLIS MUNDI": "bg-blue-100 text-blue-800 border-blue-200",
      LUMIA: "bg-purple-100 text-purple-800 border-purple-200",
      "SUNERGY EXPO": "bg-green-100 text-green-800 border-green-200",
    }

    return categoryMap[category] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <section id="program" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading>Programa 2026</SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={200} className="mt-12">
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
                <AnimateOnScroll animation="fade-in" delay={100}>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <h3 className="text-xl font-semibold">
                      {day === "day1"
                        ? "25 de Julio, 2026"
                        : day === "day2"
                          ? "26 de Julio, 2026"
                          : "27 de Julio, 2026"}
                    </h3>
                  </div>
                </AnimateOnScroll>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 md:left-12"></div>

                  <StaggeredAnimation className="space-y-8" animation="slide-up" baseDelay={200} delayIncrement={150}>
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
                            <Badge
                              className={`mt-3 px-3 py-1.5 text-sm font-medium ${getCategoryColor(event.category)}`}
                            >
                              {event.category}
                            </Badge>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </StaggeredAnimation>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={400} className="mt-16">
          <div className="rounded-lg bg-orange-50 p-6 border border-orange-100">
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
        </AnimateOnScroll>
      </div>
    </section>
  )
}
