import { ActivityComponentType } from "@stackflow/react"
import SearchHeader from "@src/components/HeaderGroup/SearchHeader"
import FridgeList from "@src/components/FridgeList/FridgeList"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import SearchTag from "@src/components/SearchTag/SearchTag"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Svg from "@src/components/Svg/Svg"
import { useState, useMemo } from "react"
import FilterBottomSheet from "@src/components/BottomSheet/FilterBottomSheet"
import useIngredientList from "@src/hooks/useIngredientList"

const mockRecentSearches = ["치즈", "우유", "계란"]

const FridgeActivity: ActivityComponentType = () => {
  const { refrigeratedItems, frozenItems, isLoading } = useIngredientList()

  const [searchValue, setSearchValue] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleDeleteSearch = (search: string) => {
    // 검색어 삭제 로직
    console.log("delete", search)
  }

  const handleFilterClick = () => {
    setIsFilterOpen(true)
  }

  const handleFilterClose = () => {
    setIsFilterOpen(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const filteredRefrigeratedItems = useMemo(() => {
    return refrigeratedItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [searchValue, refrigeratedItems])

  const filteredFrozenItems = useMemo(() => {
    return frozenItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [searchValue, frozenItems])

  return (
    <SearchHeader value={searchValue} onSearch={handleSearch}>
      <VStack pl={20} pr={20} gap={16}>
        <VStack pt={16} gap={12}>
          {/* <Typography variant="body-b" color="primary">
            최근 검색
          </Typography>
          <HStack gap={8}>
            {mockRecentSearches.map((search) => (
              <SearchTag
                key={search}
                label={search}
                onDelete={() => handleDeleteSearch(search)}
              />
            ))}
          </HStack> */}
          <></>
        </VStack>

        <VStack gap={8}>
          {/* <HStack justifyContent="flex-end">
            <HStack alignItems="center" onClick={handleFilterClick} gap={4}>
              <Svg
                src="/icon/icon_filter.svg"
                width={22}
                height={22}
                alt="필터"
              />
              <Typography variant="label-b" color="primary">
                필터
              </Typography>
            </HStack>
          </HStack> */}
          <FridgeList
            refrigeratedItems={filteredRefrigeratedItems}
            frozenItems={filteredFrozenItems}
          />
        </VStack>
      </VStack>
      <FilterBottomSheet isOpen={isFilterOpen} onClose={handleFilterClose} />
    </SearchHeader>
  )
}

export default FridgeActivity
