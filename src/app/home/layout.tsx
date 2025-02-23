"use client"

import StylesThemeProvider from "@utils/StylesThemeProvider"
import ReactQueryProviders from "@utils/ReactQueryProviders"
import { Stack } from "@src/utils/StackFlowRegistry"
import "@stackflow/plugin-basic-ui/index.css"
import { useEffect, useState } from "react"

import styled from "styled-components"

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f5f5f5;
`

const MobileWrapper = styled.div`
  width: 399px;
  height: 100vh;
  background-color: white;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

export default function RootLayout({}: Readonly<{
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
            <AppContainer>
              <MobileWrapper>
                <Stack initialContext={{ req: { path: "/home" } }} />
                <div id="portal-container" />
              </MobileWrapper>
            </AppContainer>
          </ReactQueryProviders>
        </StylesThemeProvider>
      </body>
    </html>
  )
}
