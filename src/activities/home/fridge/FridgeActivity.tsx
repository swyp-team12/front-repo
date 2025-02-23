import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import SearchBar from "@src/components/SearchBar/SearchBar"
import SearchHeader from "@src/components/HeaderGroup/SearchHeader"
import FridgeList from "@src/components/FridgeList/FridgeList"
import {
  mockExpireIngredients,
  mockRefrigeratedItems,
  mockFrozenItems,
} from "@src/mocks/mockData"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import SearchTag from "@src/components/SearchTag/SearchTag"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Svg from "@src/components/Svg/Svg"
import styled from "styled-components"
import { useState } from "react"
import FilterBottomSheet from "@src/components/BottomSheet/FilterBottomSheet"

const mockRecentSearches = ["치즈", "우유", "계란"]

const FridgeActivity: ActivityComponentType = () => {
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

  return (
    <SearchHeader>
      <VStack pl={20} pr={20} gap={16}>
        <VStack pt={16} gap={12}>
          <Typography variant="body-b" color="primary">
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
          </HStack>
        </VStack>

        <VStack gap={8}>
          <HStack justifyContent="flex-end">
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
          </HStack>
          <FridgeList
            refrigeratedItems={mockRefrigeratedItems}
            frozenItems={mockFrozenItems}
          />
        </VStack>
      </VStack>
      <FilterBottomSheet isOpen={isFilterOpen} onClose={handleFilterClose} />
    </SearchHeader>
  )
}

export default FridgeActivity
