import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import { ContentContainer } from "./styled"

interface CustomHeaderProps {
  children: React.ReactNode
  appBar: any
}

const CustomHeader = ({ children, appBar }: CustomHeaderProps) => {
  return (
    <AppScreen appBar={appBar}>
      <ContentContainer>{children}</ContentContainer>
    </AppScreen>
  )
}

export default CustomHeader
