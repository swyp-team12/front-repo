import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import { ContentContainer } from "./styled"

interface TitleHeaderProps {
  children: React.ReactNode
  title: string
}

const TitleHeader = ({ children, title }: TitleHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        title: title,
        height: "48px",
        border: false,
      }}
    >
      <ContentContainer>{children}</ContentContainer>
    </AppScreen>
  )
}

export default TitleHeader
