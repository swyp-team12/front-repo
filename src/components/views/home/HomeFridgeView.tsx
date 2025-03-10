import VStack from "@src/components/FlexBoxGroup/VStack"
import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconCard from "@src/components/IconCard/IconCard"
import { useMemo } from "react"
import { calculateDday } from "@src/utils/commonUtils"
import { useFlow } from "@src/utils/StackFlowRegistry"
import TitleWithMore from "@src/components/TitleWithMore/TitleWithMore"
import HomeExpiredCard from "./HomeExpiredCard"
import FridgeList from "@src/components/FridgeList/FridgeList"
import SearchBar from "@src/components/SearchBar/SearchBar"
import Button from "@src/components/Button/Button"
import {
  mockExpireIngredients,
  mockRefrigeratedItems,
  mockFrozenItems,
} from "@src/mocks/mockData"

interface HomeFridgeViewProps {}

const HomeFridgeView = ({}: HomeFridgeViewProps) => {
  const { push } = useFlow()

  const handleExpiredMoreClick = () => {
    console.log("유통기한 임박 더보기")
  }

  const handleFridgeMoreClick = () => {
    push("FridgeActivity", {})
  }
  return (
    <VStack gap={24} pt={24} pl={20} pr={20}>
      <VStack gap={16}>
        <TitleWithMore
          title="유통기한 임박 ⚠"
          onClickMore={handleExpiredMoreClick}
        />
        <HomeExpiredCard
          ingredients={mockExpireIngredients}
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
            <SearchBar placeholder="냉장고 안의 재료를 검색해보세요." />
            <Button variant="primary" size="xs" label="추가" />
          </HStack>
          <FridgeList
            refrigeratedItems={mockRefrigeratedItems}
            frozenItems={mockFrozenItems}
          />
        </VStack>
      </VStack>
    </VStack>
  )
}

export default HomeFridgeView
