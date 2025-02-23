import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import { ContentContainer } from "./styled"

interface NoneHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
}

const NoneHeader = ({ children }: NoneHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        height: "48px",
        border: false,
      }}
    >
      <ContentContainer>{children}</ContentContainer>
    </AppScreen>
  )
}

export default NoneHeader
