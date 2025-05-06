"use client"

import { useState } from "react"
import { Play, Info } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"

export default function SolarEvent() {
  const [showInfo, setShowInfo] = useState(false)
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
        <SectionHeading light>El Evento Solar</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-gray-300">
              Desde su construcción en el siglo XVII, la Catedral San Pedro de Buga ha sido testigo de un fenómeno solar
              extraordinario. Cada 17 de mayo y 26 de julio (si las condiciones climáticas lo permiten) un rayo de sol
              del atardecer atraviesa el óculo ubicado sobre la fachada principal, se refleja en el centro de la nave
              principal, y comienza un recorrido que lo lleva hasta el altar, donde culmina iluminando el sagrario,
              junto a otros dos rayos paralelos que hacen su propio recorrido por las naves laterales.
            </p>
            <p className="mb-6 text-gray-300">
              Este evento ha sido documentado a lo largo de la historia y es considerado un legado arquitectónico y
              espiritual de gran relevancia y unicidad especial: en solo 19 lugares del mundo suceden eventos similares:
            </p>

            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setShowPlaces(!showPlaces)}
                className="flex items-center gap-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Info className="h-4 w-4" />
                {showPlaces ? "Ocultar listado de lugares" : "Ver listado de lugares"}
              </Button>

              {showPlaces && (
                <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm max-h-80 overflow-y-auto">
                  <h4 className="mb-4 font-semibold text-orange-400 text-center">
                    LISTADO DE LUGARES EN EL MUNDO DONDE EL SOL Y LA ARQUITECTURA CONVERGEN TRASCENDENTALMENTE
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="p-2">#</th>
                          <th className="p-2">LUGAR</th>
                          <th className="p-2">UBICACIÓN</th>
                          <th className="p-2">FECHAS</th>
                          <th className="p-2">FENÓMENO SOLAR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {solarPlaces.map((place, index) => (
                          <tr key={index} className="border-b border-gray-800">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{place.place}</td>
                            <td className="p-2">{place.location}</td>
                            <td className="p-2">{place.dates}</td>
                            <td className="p-2">{place.phenomenon}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <p className="mb-6 text-gray-300">
              El fenómeno solar de la Catedral San Pedro es un testimonio del conocimiento astronómico y arquitectónico
              de su época. La precisa alineación de su estructura refleja una intención de conectar la luz con la
              experiencia espiritual, simbolizando la iluminación divina y la trascendencia.
            </p>

            <div>
              <h4 className="mb-3 text-lg font-semibold">Próxima transmisión en vivo</h4>
              <div className="mb-4">
                <CountdownTimer targetDate="2025-05-17T12:00:00" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/solar-phenomenon.jpg"
                  alt="Rayo de luz en la Catedral de San Pedro"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                  <Play className="h-4 w-4" />
                  Ver simulación 3D
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold">Transmisión en vivo</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center rounded">
                <div className="text-center p-6">
                  <Play className="h-12 w-12 mx-auto mb-4 text-orange-500 opacity-50" />
                  <p className="text-gray-400">La transmisión en vivo estará disponible durante el evento</p>
                  <p className="text-sm text-gray-500 mt-2">17 de mayo y 26 de julio de 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
