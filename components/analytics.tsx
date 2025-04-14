"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

// This component uses the hooks and will be wrapped in Suspense
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

// This is the main component that includes the script tags and the tracker
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
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  )
}
