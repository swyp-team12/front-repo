import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import IconCard from "@src/components/IconCard/IconCard"
import Typography from "@src/components/Typography/Typograpy"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Svg from "@src/components/Svg/Svg"
import { useMemo } from "react"
import { calculateDday } from "@src/utils/commonUtils"

interface HomeExpiredCardProps {
  ingredients: {
    name: string
    expireDate: string
    category: string
  }[]
  onClickMore: () => void
}

const HomeExpiredCard = ({
  ingredients,
  onClickMore,
}: HomeExpiredCardProps) => {
  const renderExpireIngredients = useMemo(() => {
    return ingredients.filter(
      (_, idx) => idx < (ingredients.length > 4 ? 3 : 4)
    )
  }, [ingredients])

  return (
    <Card>
      {ingredients.length > 0 ? (
        <HStack
          gap={16}
          justifyContent={ingredients.length > 3 ? "space-between" : ""}
        >
          {renderExpireIngredients.map((ingredient) => (
            <VStack
              key={ingredient.name}
              alignItems="center"
              width="60px"
              gap={4}
            >
              <IconCard>
                <VStack alignItems="center" justifyContent="center" gap={4}>
                  <Svg
                    src={`/icon/category/icon_${ingredient.category}.svg`}
                    width={24}
                    height={24}
                    alt={ingredient.name}
                  />
                  <Typography variant="text-b" color="gray-800">
                    {ingredient.name}
                  </Typography>
                </VStack>
              </IconCard>

              <Typography variant="label-b" color="primary">
                {calculateDday(ingredient.expireDate)}
              </Typography>
            </VStack>
          ))}
          {ingredients.length > 4 && (
            <VStack
              alignItems="center"
              width="60px"
              gap={4}
              onClick={onClickMore}
            >
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
        </HStack>
      ) : (
        <VStack alignItems="center" gap={8}>
          <Svg
            src="/icon/icon_empty_box.svg"
            width={32}
            height={32}
            alt="빈 박스"
          />
          <Typography variant="label-m" color="primary">
            유통기한 임박 제품이 없어요!
          </Typography>
        </VStack>
      )}
    </Card>
  )
}

export default HomeExpiredCard
