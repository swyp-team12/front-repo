import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import VStack from "../FlexBoxGroup/VStack"
import SearchBar from "../SearchBar/SearchBar"

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
      <VStack pt={16} pb={16}>
        {children}
      </VStack>
      {hasNavigation && <Navigation />}
    </AppScreen>
  )
}

export default CustomHeader
