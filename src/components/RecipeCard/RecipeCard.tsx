import Card from "@src/components/Card/Card"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import IngredientLabel from "@src/components/IngredientLabel/IngredientLabel"
import Svg from "@src/components/Svg/Svg"
import styled from "styled-components"
import { Recipe } from "@src/types/apiTypes"
import { truncateText } from "@src/utils/commonUtils"

const ScrapButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const Container = styled(VStack)`
  position: relative;
`

interface RecipeCardProps {
  recipe: Recipe
  onToggleScrap: () => void
  onClick?: () => void
}

const RecipeCard = ({ recipe, onToggleScrap, onClick }: RecipeCardProps) => {
  const handleScrap = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onToggleScrap()
  }
  return (
    <Card onClick={onClick}>
      <Container gap={8}>
        <Typography variant="body-b" color="gray-900">
          {recipe.recipesName}
        </Typography>

        <VStack gap={4}>
          <HStack gap={8} alignItems="center">
            <IngredientLabel label="필요 재료" />
            <Typography variant="label-b" color="gray-500">
              {truncateText(
                recipe.recipeIngredients
                  .map((ingredient) => ingredient.recipeIngredientName)
                  .join(", "),
                25
              )}
            </Typography>
          </HStack>

          <HStack gap={8} alignItems="center" justifyContent="space-between">
            <HStack gap={8} alignItems="center">
              <IngredientLabel label="결과 요약" />
              <Typography variant="label-b" color="gray-500">
                {truncateText(recipe.recipeContent, 25)}
              </Typography>
            </HStack>
            <ScrapButton onClick={handleScrap}>
              <Svg
                src={`/icon/icon_scrap_${
                  recipe.isScrap ? "fill" : "empty_primary"
                }.svg`}
                width={20}
                height={20}
                alt={recipe.isScrap ? "스크랩 취소" : "스크랩"}
              />
            </ScrapButton>
          </HStack>
        </VStack>
      </Container>
    </Card>
  )
}

export default RecipeCard
