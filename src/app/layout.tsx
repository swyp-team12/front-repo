"use client"

import StylesThemeProvider from "@utils/StylesThemeProvider"
import ReactQueryProviders from "@utils/ReactQueryProviders"
import { Stack } from "@src/utils/StackFlowRegistry"
import "@stackflow/plugin-basic-ui/index.css"

export default function RootLayout({ }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StylesThemeProvider>
          <ReactQueryProviders>
            <div>
              <Stack initialContext={{ req: { path: "/" } }} />
            </div>
          </ReactQueryProviders>
        </StylesThemeProvider>
      </body>
    </html>
  )
}
