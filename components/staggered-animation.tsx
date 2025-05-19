"use client"

import { type ReactNode, Children, cloneElement, isValidElement } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  itemClassName?: string
  baseDelay?: number
  delayIncrement?: number
  duration?: number
  animation?: "fade-in" | "slide-up" | "scale-in" | "slide-right" | "slide-left"
  threshold?: number
  rootMargin?: string
}

export function StaggeredAnimation({
  children,
  className = "",
  itemClassName = "",
  baseDelay = 0,
  delayIncrement = 100,
  duration = 500,
  animation = "fade-in",
  threshold = 0.1,
  rootMargin = "0px",
}: StaggeredAnimationProps) {
  const [ref, isInView] = useInView({ threshold, rootMargin })

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-8 transition-all",
    "scale-in": "opacity-0 scale-95 transition-all",
    "slide-right": "opacity-0 -translate-x-8 transition-all",
    "slide-left": "opacity-0 translate-x-8 transition-all",
  }

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child

        const delay = baseDelay + index * delayIncrement
        const style = {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }

        return cloneElement(child, {
          className: cn(
            child.props.className,
            animationClasses[animation],
            isInView && "opacity-100 translate-y-0 translate-x-0 scale-100",
            itemClassName,
          ),
          style: { ...child.props.style, ...style },
          key: index,
        })
      })}
    </div>
  )
}
