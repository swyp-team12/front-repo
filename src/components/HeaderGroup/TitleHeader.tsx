import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import { ContentContainer } from "./styled"

interface TitleHeaderProps {
  children: React.ReactNode
  title: string
  hasNavigation?: boolean
}

const TitleHeader = ({
  children,
  title,
  hasNavigation = false,
}: TitleHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        title: title,
        height: "48px",
        border: false,
      }}
    >
      <ContentContainer>{children}</ContentContainer>
      {hasNavigation && <Navigation />}
    </AppScreen>
  )
}

export default TitleHeader
