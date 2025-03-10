import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import { ContentContainer } from "./styled"

interface CustomHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
  appBar: any
}

const CustomHeader = ({
  children,
  appBar,
  hasNavigation = false,
}: CustomHeaderProps) => {
  return (
    <AppScreen appBar={appBar}>
      <ContentContainer>{children}</ContentContainer>
      {hasNavigation && <Navigation />}
    </AppScreen>
  )
}

export default CustomHeader
