"use client"

import { useEffect, useState } from "react"

interface VideoPlaceholderProps {
  onLoad: () => void
}

export default function VideoPlaceholder({ onLoad }: VideoPlaceholderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular carga progresiva
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onLoad()
          }, 200) // Pequeño retraso para una transición suave
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onLoad])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
      <div className="w-24 h-24 mb-4">
        <img src="/bugaluz-logo.svg" alt="BUGALUZ" className="w-full animate-pulse" />
      </div>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
