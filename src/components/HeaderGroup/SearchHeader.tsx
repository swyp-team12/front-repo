import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import VStack from "../FlexBoxGroup/VStack"
import SearchBar from "../SearchBar/SearchBar"

interface SearchHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
}

const SearchHeader = ({
  children,
  hasNavigation = false,
}: SearchHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        title: <SearchBar placeholder="제품을 검색해보세요." />,
        renderLeft: undefined,
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

export default SearchHeader
