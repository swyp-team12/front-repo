"use client"

import GlobalStyles from "@styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import StyledComponentsRegistry from "@utils/StyledComponentsRegistry"
import theme from "@styles/commonTheme"

export default function StylesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
