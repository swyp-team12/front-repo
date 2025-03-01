import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import SearchBar from "../SearchBar/SearchBar"
import { ContentContainer } from "./styled"

interface SearchHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
}

const SearchHeader = ({ children }: SearchHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        title: <SearchBar placeholder="제품을 검색해보세요." />,
        renderLeft: undefined,
        border: false,
        height: "48px",
      }}
    >
      <ContentContainer>{children}</ContentContainer>
    </AppScreen>
  )
}

export default SearchHeader
