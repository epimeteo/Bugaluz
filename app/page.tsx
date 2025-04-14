import { Suspense } from "react"
import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Program from "@/components/program"
import SolarEvent from "@/components/solar-event"
import EnergyFair from "@/components/energy-fair"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import LoadingFallback from "@/components/loading-fallback"

export const metadata: Metadata = {
  title: "BUGALUZ | Festival de Luz y Energía en Buga",
  description:
    "Descubre BUGALUZ, el festival que celebra el fenómeno solar único de Buga y la transición energética. 17 de mayo y 26 de julio de 2025.",
  keywords: ["BUGALUZ", "festival de luz", "Buga", "transición energética", "fenómeno solar", "Colombia"],
  openGraph: {
    title: "BUGALUZ | Festival de Luz y Energía en Buga",
    description:
      "Descubre BUGALUZ, el festival que celebra el fenómeno solar único de Buga y la transición energética. 17 de mayo y 26 de julio de 2025.",
    url: "https://bugaluz.vercel.app",
    siteName: "BUGALUZ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BUGALUZ Festival",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <About />
      <Program />
      <SolarEvent />
      <EnergyFair />
      <Partners />
      <Contact />
    </main>
  )
}
