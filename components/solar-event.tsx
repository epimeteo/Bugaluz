"use client"

import { useState } from "react"
import { Info, Calendar, Clock } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "./animate-on-scroll"

export default function SolarEvent() {
  const [showPlaces, setShowPlaces] = useState(false)

  const solarPlaces = [
    {
      place: "Catedral San Pedro",
      location: "Buga, Colombia",
      dates: "Mayo 17 / Julio 26",
      phenomenon: "Rayo solar recorre la nave hasta el sagrario",
    },
    {
      place: "Stonehenge",
      location: "Reino Unido",
      dates: "Junio 21 (Solsticio de verano)",
      phenomenon: "Sol naciente se alinea con eje del monumento",
    },
    {
      place: "Chichen Itza (Kukulkan)",
      location: "México",
      dates: "Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Sombra de serpiente desciende la escalinata",
    },
    {
      place: "Abu Simbel",
      location: "Egipto",
      dates: "Febrero 22 / Octubre 22",
      phenomenon: "Sol ilumina estatuas internas",
    },
    {
      place: "Panteón",
      location: "Roma, Italia",
      dates: "21 de abril",
      phenomenon: "Rayo solar ilumina la puerta del templo",
    },
    {
      place: "Angkor Wat",
      location: "Camboya",
      dates: "Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Sol se eleva sobre la torre central",
    },
    {
      place: "Newgrange",
      location: "Irlanda",
      dates: "21 de diciembre",
      phenomenon: "Luz llena la cámara funeraria interior",
    },
    {
      place: "Ahu Akivi",
      location: "Isla de Pascua, Chile",
      dates: "Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Los moáis alineados sol naciente en el equinoccio y el sol poniente otoño",
    },
    {
      place: "Jantar Mantar",
      location: "Jaipur, India",
      dates: "Todo el anio",
      phenomenon: "instrumentos solares miden con precisión eventos celestes",
    },
    {
      place: "Machu Picchu",
      location: "Perú",
      dates: "24 de junio",
      phenomenon: "Rayo ilumina el templo del sol en Inti Raymi",
    },
    {
      place: "Templo de Hathor",
      location: "Endera, Egipto",
      dates: "Junio 21 / Diciembre 21 (Solsticios)",
      phenomenon: "Luz sobre jeroglíficos centrales",
    },
    {
      place: "Monte Albán",
      location: "Oaxaca, México",
      dates: "Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Sombras alineadas con fechas solares",
    },
    {
      place: "Templo Mayor",
      location: "Ciudad de México",
      dates: "Junio 21 / Diciembre 21 (Solsticios)",
      phenomenon: "Sol sale entre las torres gemelas",
    },
    {
      place: "Chaco Canyon",
      location: "Nuevo México, EE.UU",
      dates: "Junio 21 / Diciembre 21 (Solsticios) y Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Luz sobre petroglifos en fechas precisas",
    },
    {
      place: "Chartres",
      location: "Francia",
      dates: "Marzo 21 (Equinoccio)",
      phenomenon: "Luz ilumina clavo de bronce en el piso",
    },
    {
      place: "Teotihuacán",
      location: "México",
      dates: "Marzo 21 (Equinoccio)",
      phenomenon: "Sombras alineadas con la Calzada de los Muertos",
    },
    {
      place: "Catedral de Lima",
      location: "Perú",
      dates: "Junio 21 / Diciembre 21 (Solsticios)",
      phenomenon: "Luz entra según simbología solar virreinal",
    },
    {
      place: "Torre de Hércules",
      location: "España",
      dates: "Marzo 21 y Septiembre 21 (Equinoccios)",
      phenomenon: "Alineación con el sol naciente",
    },
    {
      place: "Catedral de Amiens",
      location: "Francia",
      dates: "Junio 21 (Solsticio de verano)",
      phenomenon: "Vitrales proyectan calendario solar litúrgico",
    },
  ]

  return (
    <section id="solar-event" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-in">
          <SectionHeading light>El Evento Solar</SectionHeading>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <AnimateOnScroll animation="fade-in" delay={200}>
                <p className="mb-6 text-gray-300">
                  Desde su construcción en el siglo XVII, la Catedral San Pedro de Buga ha sido testigo de un fenómeno
                  solar extraordinario. Cada 17 de mayo y 26 de julio (si las condiciones climáticas lo permiten) un
                  rayo de sol del atardecer atraviesa el óculo ubicado sobre la fachada principal, se refleja en el
                  centro de la nave principal, y comienza un recorrido que lo lleva hasta el altar, donde culmina
                  iluminando el sagrario, junto a otros dos rayos paralelos que hacen su propio recorrido por las naves
                  laterales.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in" delay={300}>
                <p className="mb-6 text-gray-300">
                  Este evento ha sido documentado a lo largo de la historia y es considerado un legado arquitectónico y
                  espiritual de gran relevancia y unicidad especial: en solo 19 lugares del mundo suceden eventos
                  similares:
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in" delay={400}>
                <div className="mb-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowPlaces(!showPlaces)}
                    className="flex items-center gap-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Info className="h-4 w-4" />
                    {showPlaces ? "Ocultar listado de lugares" : "Ver listado de lugares"}
                  </Button>

                  {showPlaces && (
                    <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm max-h-80 overflow-y-auto animate-fadeIn">
                      <h4 className="mb-4 font-semibold text-orange-400 text-center">
                        LISTADO DE LUGARES EN EL MUNDO DONDE EL SOL Y LA ARQUITECTURA CONVERGEN TRASCENDENTALMENTE
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solarPlaces.map((place, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 p-3 rounded-md hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
                          >
                            <div className="flex justify-between items-start">
                              <h5 className="font-medium text-white text-sm">{place.place}</h5>
                              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {index + 1}
                              </span>
                            </div>
                            <div className="mt-2 space-y-1 text-xs">
                              <p className="flex">
                                <span className="text-gray-400 w-20 flex-shrink-0">Ubicación:</span>
                                <span className="text-gray-200">{place.location}</span>
                              </p>
                              <p className="flex">
                                <span className="text-gray-400 w-20 flex-shrink-0">Fechas:</span>
                                <span className="text-gray-200">{place.dates}</span>
                              </p>
                              <p className="flex flex-col sm:flex-row">
                                <span className="text-gray-400 w-20 flex-shrink-0">Fenómeno:</span>
                                <span className="text-gray-200">{place.phenomenon}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in" delay={500}>
                <p className="mb-6 text-gray-300">
                  El fenómeno solar de la Catedral San Pedro es un testimonio del conocimiento astronómico y
                  arquitectónico de su época. La precisa alineación de su estructura refleja una intención de conectar
                  la luz con la experiencia espiritual, simbolizando la iluminación divina y la trascendencia.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Reemplazo del contador por un mensaje llamativo */}
            <AnimateOnScroll animation="slide-up" delay={600}>
              <div className="mt-8 mb-4">
                <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-1 rounded-lg shadow-lg">
                  <div className="bg-black rounded-md p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Próximas Transmisiones</h3>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Calendar className="h-6 w-6 text-orange-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
                        17 de Mayo y 26 de Julio de 2026
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">¡No te pierdas este extraordinario fenómeno solar!</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="flex flex-col gap-6">
            {/* Video de YouTube en la parte superior derecha */}
            <div className="w-full">
              <div className="w-full h-0 pb-[56.25%] relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/mOOEQBj6m6s"
                  title="Rayo de luz en la Catedral de San Pedro"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-2 text-center text-white">Rayo de luz en la Catedral de San Pedro</div>
            </div>

            {/* Transmisión en vivo actualizada con fechas y horas */}
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-400" />
                Transmisión en vivo
              </h3>
              <div className="bg-gray-800 rounded-lg p-5">
                <p className="text-white mb-3">Próximas transmisiones en directo:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">17 de Mayo, 2026</span> -
                      <span className="text-orange-300 ml-1">4:45 PM (hora local)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-500 rounded-full w-2 h-2 mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">26 de Julio, 2026</span> -
                      <span className="text-orange-300 ml-1">4:45 PM (hora local)</span>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">
                  Las transmisiones comenzarán 30 minutos antes del fenómeno solar para capturar todo el evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
