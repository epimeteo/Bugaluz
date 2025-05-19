"use client"

import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "./animate-on-scroll"
import { StaggeredAnimation } from "./staggered-animation"
import { Sun, Battery, Network, Wind } from "lucide-react"

export default function EnergyFair() {
  const innovations = [
    {
      title: "Paneles Solares de Alta Eficiencia",
      description: "Última generación de paneles solares con eficiencia superior al 30%.",
      icon: <Sun className="h-6 w-6" />,
      category: "Solar",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      title: "Almacenamiento Energético Avanzado",
      description: "Baterías de estado sólido con mayor capacidad y vida útil.",
      icon: <Battery className="h-6 w-6" />,
      category: "Almacenamiento",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      title: "Microrredes Inteligentes",
      description: "Sistemas de distribución local que optimizan el consumo energético.",
      icon: <Network className="h-6 w-6" />,
      category: "Distribución",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      title: "Turbinas Eólicas Urbanas",
      description: "Diseñadas para funcionar eficientemente en entornos urbanos con poco viento.",
      icon: <Wind className="h-6 w-6" />,
      category: "Eólica",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
  ]

  const conferences = [
    {
      title: "El Futuro de la Energía Solar en Latinoamérica",
      speaker: "Dra. María Rodríguez",
      institution: "Instituto de Energías Renovables",
      date: "26 de julio, 2026",
      time: "14:00 - 15:30",
    },
    {
      title: "Transición Energética: Desafíos y Oportunidades",
      speaker: "Dr. Carlos Mendoza",
      institution: "Universidad Nacional de Colombia",
      date: "26 de julio, 2026",
      time: "16:00 - 17:30",
    },
    {
      title: "Comunidades Energéticas: Modelos de Éxito",
      speaker: "Ing. Laura Gómez",
      institution: "Asociación Colombiana de Energías Renovables",
      date: "27 de julio, 2026",
      time: "10:00 - 11:30",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="energy-fair" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading>Feria de Energía y Transición</SectionHeading>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <AnimateOnScroll animation="slide-up" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                Innovaciones Destacadas
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 animate-scaleX"></span>
              </h3>
            </AnimateOnScroll>

            <StaggeredAnimation
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              animation="scale-in"
              baseDelay={300}
              delayIncrement={150}
            >
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full ${innovation.color.split(" ")[0]} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {innovation.icon}
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900">{innovation.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${innovation.color}`}>
                          {innovation.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{innovation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>

          <div>
            <AnimateOnScroll animation="slide-up" delay={200}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                Conferencias y Paneles
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 animate-scaleX"></span>
              </h3>
            </AnimateOnScroll>

            <StaggeredAnimation className="space-y-4" animation="slide-up" baseDelay={300} delayIncrement={150}>
              {conferences.map((conference, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 group"
                >
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                    {conference.title}
                  </h4>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>
                      {conference.speaker} · {conference.institution}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span>{conference.date}</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium group-hover:bg-blue-200 transition-colors duration-300">
                        {conference.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>
        </div>

        <AnimateOnScroll animation="slide-up" delay={400} className="mt-16">
          <div className="bg-orange-50 p-8 rounded-lg border border-orange-100 hover:shadow-lg transition-all duration-300 hover:border-orange-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200 rounded-full -translate-x-20 -translate-y-20 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-200 rounded-full translate-x-10 translate-y-10 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h3 className="mb-4 text-xl font-bold text-gray-900 text-center">¿Quieres participar como expositor?</h3>
              <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
                Invitamos a empresas del sector energético renovable a presentar sus innovaciones y soluciones
                sostenibles en nuestra feria tecnológica.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 transition-transform duration-300 hover:scale-105"
                  onClick={scrollToContact}
                >
                  Solicitar información
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
