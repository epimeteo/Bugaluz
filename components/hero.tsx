"use client"

import { useState } from "react"
import { ArrowDown } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleScroll = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video background from YouTube */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="relative h-full w-full">
          <iframe
            src="https://www.youtube.com/embed/mOOEQBj6m6s?autoplay=1&mute=1&controls=0&loop=1&playlist=mOOEQBj6m6s&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
            className="absolute top-0 left-0 h-full w-full object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="BUGALUZ Cathedral Light Phenomenon"
          ></iframe>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="mb-6 w-40 md:w-56">
          <img src="/bugaluz-logo.svg" alt="BUGALUZ" className="w-full" />
        </div>

        <h1 className="mb-8 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          La Luz Nos Une, La Energía Nos Impulsa
        </h1>

        <p className="mb-8 text-xl font-medium md:text-2xl">26 de julio de 2025</p>

        <div className="mb-12 w-full max-w-2xl">
          <CountdownTimer targetDate="2025-07-26T16:45:00" />
        </div>

        <Button
          onClick={handleScroll}
          variant="outline"
          size="lg"
          className="group border-orange-500 bg-transparent text-white hover:bg-orange-500"
        >
          Descubre más
          <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </div>
    </section>
  )
}
