import Svg from "../Svg/Svg"
import { SearchBarContainer, SearchInput, SearchIcon } from "./styled"

interface SearchBarProps {
  placeholder?: string
  value?: string
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({
  placeholder = "검색",
  value,
  onSearch,
}: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <SearchIcon>
        <Svg src="/icon/icon_search.svg" width={12} height={12} alt="검색" />
      </SearchIcon>
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChange={onSearch}
      />
    </SearchBarContainer>
  )
}

export default SearchBar
