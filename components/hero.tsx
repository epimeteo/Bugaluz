"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoPlaceholder from "./video-placeholder"
import LazyYouTube from "./lazy-youtube"
import { AnimateOnScroll } from "./animate-on-scroll"

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  // Función para manejar el scroll y detectar cuando el hero está en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el hero está visible, comenzamos a cargar el video
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // 10% del elemento visible
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleScroll = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Video background con lazy loading */}
      <div className="absolute inset-0 z-0 bg-black">
        {!isVideoLoaded && <VideoPlaceholder onLoad={() => setShouldLoadVideo(true)} />}

        {shouldLoadVideo && (
          <div className="relative h-full w-full">
            <LazyYouTube
              videoId="mOOEQBj6m6s"
              title="BUGALUZ Cathedral Light Phenomenon"
              onLoad={() => setIsVideoLoaded(true)}
            />

            {/* Side fades for the video */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <AnimateOnScroll animation="fade-in" duration={800}>
          <div className="mb-6 w-48 md:w-64">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bugaluz-logo-p4FQXv2CMSxufPYLertjECAlNhN7pS.svg"
              alt="BUGALUZ"
              className="w-full"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={200} duration={800}>
          <h1 className="mb-8 max-w-full text-3xl font-bold leading-tight md:text-5xl md:whitespace-nowrap">
            La Luz Nos Une, La Energía Nos Impulsa
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={400} duration={800}>
          <p className="mb-8 text-xl font-medium md:text-2xl">26 de julio de 2026</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={600} duration={800}>
          <Button
            onClick={handleScroll}
            variant="outline"
            size="lg"
            className="group border-orange-500 bg-transparent text-white hover:bg-orange-500"
          >
            Descubre más
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
