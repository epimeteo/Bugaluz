import type React from "react"
interface SectionHeadingProps {
  children: React.ReactNode
  light?: boolean
}

export function SectionHeading({ children, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-gray-900"}`}>{children}</h2>
      <div className="mx-auto mt-4 h-1 w-20 bg-orange-500"></div>
    </div>
  )
}
