"use client"

import StylesThemeProvider from "@utils/StylesThemeProvider"
import ReactQueryProviders from "@utils/ReactQueryProviders"
import { Stack } from "@src/utils/StackFlowRegistry"
import "@stackflow/plugin-basic-ui/index.css"
import { useEffect, useState } from "react"
export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StylesThemeProvider>
          <ReactQueryProviders>
            {children}
          </ReactQueryProviders>
        </StylesThemeProvider>
      </body>
    </html>
  )
}
