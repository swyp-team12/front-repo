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

const mockExpireIngredients = [
  {
    name: "치즈",
    expireDate: "2025-02-28",
    category: "milk",
  },
  {
    name: "신선란",
    expireDate: "2025-02-28",
    category: "egg",
  },
  {
    name: "목전지",
    expireDate: "2025-02-28",
    category: "meat",
  },
  {
    name: "목전지",
    expireDate: "2025-02-28",
    category: "meat",
  },
  {
    name: "목전지",
    expireDate: "2025-02-28",
    category: "meat",
  },
]

const mockRefrigeratedItems = [
  {
    name: "치즈",
    category: "milk",
  },
  {
    name: "신선란",
    category: "egg",
  },
  {
    name: "목살",
    category: "meat",
  },
  {
    name: "양파",
    category: "vege",
  },
  {
    name: "당근",
    category: "vege",
  },
  {
    name: "우유",
    category: "milk",
  },
  {
    name: "요구르트",
    category: "milk",
  },
  {
    name: "오이",
    category: "vege",
  },
  {
    name: "토마토",
    category: "vege",
  },
  {
    name: "닭가슴살",
    category: "meat",
  },
]

const mockFrozenItems = [
  {
    name: "만두",
    category: "fastfood",
  },
  {
    name: "새우",
    category: "fish",
  },
  {
    name: "돈까스",
    category: "fastfood",
  },
  {
    name: "감자",
    category: "vege",
  },
  {
    name: "고등어",
    category: "fish",
  },
  {
    name: "피자",
    category: "fastfood",
  },
]

interface HomeFridgeViewProps {}

const HomeFridgeView = ({}: HomeFridgeViewProps) => {
  const { push } = useFlow()

  const handleExpiredMoreClick = () => {
    push("FridgeActivity", {})
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
