"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleScroll = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video background with poster for faster initial load */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/video-poster.jpg"
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/cathedral-light.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="mb-6 w-40 md:w-56">
          <img src="/bugaluz-logo.svg" alt="BUGALUZ" className="w-full" />
        </div>

        <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          La luz ha llegado a Buga. Descubre su historia, su poder y su futuro.
        </h1>

        <p className="mb-8 text-xl font-medium md:text-2xl">17 de mayo y 26 de julio de 2025</p>

        <div className="mb-12 w-full max-w-2xl">
          <CountdownTimer targetDate="2025-05-17T00:00:00" />
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
