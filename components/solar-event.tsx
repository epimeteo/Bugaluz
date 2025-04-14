"use client"

import { useState } from "react"
import { Play, Info } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"

export default function SolarEvent() {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <section id="solar-event" className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading light>El Evento Solar</SectionHeading>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">Un fenómeno único en el mundo</h3>
            <p className="mb-6 text-gray-300">
              Dos veces al año, el 17 de mayo y el 26 de julio, ocurre un fenómeno extraordinario en la Catedral de San
              Pedro en Buga. Un rayo de luz solar atraviesa el óculo de la cúpula y recorre la nave central hasta
              iluminar el sagrario, creando un espectáculo luminoso que ha maravillado a generaciones.
            </p>
            <p className="mb-6 text-gray-300">
              Este fenómeno, estudiado por el arquitecto Henry Paz, no es casualidad. Fue diseñado con precisión
              astronómica por los constructores de la catedral hace más de 450 años, alineando perfectamente la
              arquitectura con los movimientos solares.
            </p>

            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center gap-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              >
                <Info className="h-4 w-4" />
                {showInfo ? "Ocultar detalles técnicos" : "Ver detalles técnicos"}
              </Button>

              {showInfo && (
                <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm">
                  <h4 className="mb-2 font-semibold text-orange-400">Detalles técnicos del fenómeno</h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-300">
                    <li>El óculo tiene un diámetro de 1.2 metros</li>
                    <li>La luz recorre aproximadamente 45 metros desde el óculo hasta el sagrario</li>
                    <li>El fenómeno dura aproximadamente 15-20 minutos</li>
                    <li>La alineación ocurre cuando el sol alcanza un ángulo de 75° sobre el horizonte</li>
                    <li>Las fechas coinciden con momentos significativos en el calendario religioso</li>
                  </ul>
                </div>
              )}
            </div>

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
