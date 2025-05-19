"use client"

import { useState, useEffect, useRef } from "react"

interface LazyYouTubeProps {
  videoId: string
  title: string
  onLoad?: () => void
}

export default function LazyYouTube({ videoId, title, onLoad }: LazyYouTubeProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.disconnect()
        }
      },
      {
        rootMargin: "200px", // Cargar un poco antes de que sea visible
        threshold: 0,
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleIframeLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {isIntersecting ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          onLoad={handleIframeLoad}
        ></iframe>
      ) : (
        <div className="absolute inset-0 bg-black"></div>
      )}
    </div>
  )
}
