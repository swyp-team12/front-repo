import Card from "@src/components/Card/Card"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconCard from "@src/components/IconCard/IconCard"
import { useMemo } from "react"
import { calculateDday } from "@src/utils/commonUtils"
import styled from "styled-components"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { Ingredient } from "@src/types/apiTypes"

interface HomeExpiredCardProps {
  ingredients: Ingredient[]
  onClickMore: () => void
}

const truncateName = (name: string) => {
  if (name.length > 4) {
    return name.slice(0, 4) + "..."
  }
  return name
}

const HomeExpiredCard = ({
  ingredients,
  onClickMore,
}: HomeExpiredCardProps) => {
  const { push } = useFlow()

  const renderExpireIngredients = useMemo(() => {
    return ingredients.filter(
      (_, idx) => idx < (ingredients.length > 4 ? 3 : 4)
    )
  }, [ingredients])

  const handleItemClick = (id: number) => {
    push("IngDetailActivity", {
      ingId: id,
    })
  }

  return (
    <Card>
      {ingredients.length > 0 ? (
        <GridContainer>
          {renderExpireIngredients.map((ingredient) => (
            <VStack key={ingredient.name} alignItems="center" gap={4}>
              <IconCard onClick={() => handleItemClick(ingredient.ingId)}>
                <VStack alignItems="center" justifyContent="center" gap={4}>
                  <Svg
                    src={`/icon/category/icon_${ingredient.category}.svg`}
                    width={24}
                    height={24}
                    alt={ingredient.name}
                  />
                  <Typography variant="label-b" color="gray-800">
                    {truncateName(ingredient.name)}
                  </Typography>
                </VStack>
              </IconCard>

              <Typography variant="label-b" color="primary">
                {calculateDday(ingredient.expiryDate)}
              </Typography>
            </VStack>
          ))}
          {ingredients.length > 4 && (
            <VStack alignItems="center" gap={4} onClick={onClickMore}>
              <IconCard>
                <Svg
                  src={`/icon/icon_three_dots.svg`}
                  width={34}
                  height={24}
                  alt={"더보기"}
                />
              </IconCard>

              <Typography variant="label-b" color="primary">
                더보기
              </Typography>
            </VStack>
          )}
        </GridContainer>
      ) : (
        <VStack alignItems="center" gap={8} pt={16} pb={16}>
          <Svg
            src="/icon/icon_empty_box.svg"
            width={32}
            height={32}
            alt="빈 박스"
          />
          <Typography variant="label-m" color="primary">
            소비기한 임박 제품이 없어요!
          </Typography>
        </VStack>
      )}
    </Card>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`

export default HomeExpiredCard
