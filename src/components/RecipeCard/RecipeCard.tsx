import Card from "@src/components/Card/Card"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import IngredientTag from "@src/components/IngredientTag/IngredientTag"
import Svg from "@src/components/Svg/Svg"
import styled from "styled-components"

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
  title: string
  requiredIngredients: string[]
  missingIngredients: string[]
  isScrap: boolean
  onToggleScrap: () => void
}

const RecipeCard = ({
  title,
  requiredIngredients,
  missingIngredients,
  isScrap,
  onToggleScrap,
}: RecipeCardProps) => {
  return (
    <Card>
      <Container gap={8}>
        <Typography variant="body-b" color="gray-900">
          {title}
        </Typography>

        <VStack gap={4}>
          <HStack gap={8} alignItems="center">
            <IngredientTag label="필요 재료" />
            <Typography variant="label-b" color="gray-500">
              {requiredIngredients.join(", ")}
            </Typography>
          </HStack>

          <HStack gap={8} alignItems="center" justifyContent="space-between">
            <HStack gap={8} alignItems="center">
              <IngredientTag label="없는 재료" />
              <Typography variant="label-b" color="gray-500">
                {missingIngredients.join(", ")}
              </Typography>
            </HStack>
            <ScrapButton onClick={onToggleScrap}>
              <Svg
                src={`/icon/icon_scrap_${isScrap ? "fill" : "empty"}.svg`}
                width={20}
                height={20}
                alt={isScrap ? "스크랩 취소" : "스크랩"}
              />
            </ScrapButton>
          </HStack>
        </VStack>
      </Container>
    </Card>
  )
}

export default RecipeCard
