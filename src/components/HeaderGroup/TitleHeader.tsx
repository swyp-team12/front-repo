import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import VStack from "../FlexBoxGroup/VStack"
import SearchBar from "../SearchBar/SearchBar"

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
      }}
    >
      <VStack pt={16} pb={16}>
        {children}
      </VStack>
      {hasNavigation && <Navigation />}
    </AppScreen>
  )
}

export default TitleHeader
