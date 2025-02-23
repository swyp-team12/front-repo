import RootLayoutRegistry from "@src/utils/RootLayoutRegistry"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <RootLayoutRegistry>{children}</RootLayoutRegistry>
      </body>
    </html>
  )
}
