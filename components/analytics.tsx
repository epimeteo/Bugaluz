"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// Add type declaration for gtag
declare global {
  interface Window {
    gtag: (command: "config" | "event" | "js" | "set", targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}

// This component uses the hooks
function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag === "undefined") return

    const url = pathname + searchParams.toString()

    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

// This is the main component that includes the script tags
export function Analytics() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      <AnalyticsTracker />
    </>
  )
}
