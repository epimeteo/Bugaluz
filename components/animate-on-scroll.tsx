"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type AnimationType = "fade-in" | "slide-up" | "scale-in" | "slide-right" | "slide-left"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export function AnimateOnScroll({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 500,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: AnimateOnScrollProps) {
  const [ref, isInView] = useInView({ threshold, rootMargin })

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-8 transition-all",
    "scale-in": "opacity-0 scale-95 transition-all",
    "slide-right": "opacity-0 -translate-x-8 transition-all",
    "slide-left": "opacity-0 translate-x-8 transition-all",
  }

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isInView && "opacity-100 translate-y-0 translate-x-0 scale-100",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
