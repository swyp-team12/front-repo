import Svg from "../Svg/Svg"
import { SearchBarContainer, SearchInput, SearchIcon } from "./styled"

interface SearchBarProps {
  placeholder?: string
}

const SearchBar = ({ placeholder = "검색" }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <Svg src="/icon/icon_search.svg" width={12} height={12} alt="검색" />
      </SearchIcon>
      <SearchInput placeholder={placeholder} />
    </SearchBarContainer>
  )
}

export default SearchBar
