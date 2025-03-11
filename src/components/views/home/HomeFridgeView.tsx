import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import { useFlow } from "@src/utils/StackFlowRegistry"
import TitleWithMore from "@src/components/TitleWithMore/TitleWithMore"
import HomeExpiredCard from "./HomeExpiredCard"
import FridgeList from "@src/components/FridgeList/FridgeList"
import SearchBar from "@src/components/SearchBar/SearchBar"
import Button from "@src/components/Button/Button"
import useIngredientList from "@src/hooks/useIngredientList"
import { useState, useMemo } from "react"
interface HomeFridgeViewProps {}

const HomeFridgeView = ({}: HomeFridgeViewProps) => {
  const { push } = useFlow()

  const [searchValue, setSearchValue] = useState("")
  const { expiredItems, refrigeratedItems, frozenItems } = useIngredientList()

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

  const handleExpiredMoreClick = () => {
    push("IngExpiredActivity", {})
  }

  const handleFridgeMoreClick = () => {
    push("FridgeActivity", {})
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <VStack gap={24} pt={24} pl={20} pr={20}>
      <VStack gap={16}>
        <TitleWithMore
          title="소비기한 임박 ⚠"
          onClickMore={handleExpiredMoreClick}
        />
        <HomeExpiredCard
          ingredients={expiredItems}
          onClickMore={handleExpiredMoreClick}
        />
      </VStack>

      <VStack gap={16}>
        <TitleWithMore
          title="우리집 냉장고"
          onClickMore={handleFridgeMoreClick}
        />
        <VStack gap={14}>
          <HStack gap={4}>
            <SearchBar
              placeholder="냉장고 안의 재료를 검색해보세요."
              value={searchValue}
              onSearch={handleSearch}
            />
            <Button
              variant="primary"
              size="xs"
              label="검색"
              onClick={handleFridgeMoreClick}
            />
          </HStack>
          <FridgeList
            refrigeratedItems={filteredRefrigeratedItems}
            frozenItems={filteredFrozenItems}
          />
        </VStack>
      </VStack>
    </VStack>
  )
}

export default HomeFridgeView
