import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import SearchBar from "../SearchBar/SearchBar"
import { ContentContainer } from "./styled"

interface SearchHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
  value?: string
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchHeader = ({ children, value, onSearch }: SearchHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        title: (
          <SearchBar
            placeholder="제품을 검색해보세요."
            value={value}
            onSearch={onSearch}
          />
        ),
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
