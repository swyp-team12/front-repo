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
import HomeRecipeMenuCard from "./HomeRecipeMenuCard"
import RecipeList from "@src/components/RecipeList/RecipeList"
import { mockRecipes } from "@src/mocks/mockApiData"
import useRecipeList from "@src/hooks/useRecipeList"
interface HomeRecipeViewProps {}

const HomeRecipeView = ({}: HomeRecipeViewProps) => {
  const { push } = useFlow()
  const { recipeList, isLoading } = useRecipeList()
  const handleRecipeClick = () => {
    push("RecipeActivity", {})
  }

  return (
    <VStack gap={24} pt={24} pl={20} pr={20}>
      <VStack gap={16}>
        <Typography variant="body-b" color="primary">
          {"회원님을 위한 레시피 추천 🧑🏻‍🍳"}
        </Typography>

        <HomeRecipeMenuCard />
      </VStack>

      <VStack gap={16}>
        <TitleWithMore
          title="이전에 맛본 레시피 모음 🥦"
          onClickMore={handleRecipeClick}
        />

        <VStack gap={14}>
          <HStack gap={4}>
            <SearchBar placeholder="이전에 사용한 레시피 재료를 검색해보세요." />
            <Button variant="primary" size="xs" label="검색" />
          </HStack>
          <RecipeList recipes={recipeList} />
        </VStack>
      </VStack>
    </VStack>
  )
}

export default HomeRecipeView
