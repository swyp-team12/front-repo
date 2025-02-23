"use client"

import StylesThemeProvider from "@utils/StylesThemeProvider"
import ReactQueryProviders from "@utils/ReactQueryProviders"
import { Stack } from "@src/utils/StackFlowRegistry"
import "@stackflow/plugin-basic-ui/index.css"
import { useEffect, useState } from "react"

import styled from "styled-components"

export default function RootLayout({}: Readonly<{
  children: React.ReactNode
}>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Stack initialContext={{ req: { path: "/home" } }} />
      <div id="portal-container" />
    </>
  )
}
