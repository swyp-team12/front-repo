import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import { MenuButton, Divider } from "./styled"
import { useFlow } from "@src/utils/StackFlowRegistry"
import useCreateRecipe from "@src/hooks/useCreateRecipe"
import useIngredientList from "@src/hooks/useIngredientList"
import Modal from "@src/components/ModalGroup/Modal"
import { useState } from "react"

const HomeRecipeMenuCard = () => {
  const { push } = useFlow()
  const [isOpen, setIsOpen] = useState(false)
  const { ingredientNames } = useIngredientList()

  const { mutate, isPending, isSuccess } = useCreateRecipe()
  const handleChooseRecipeClick = () => {
    push("RecipeChooseActivity", {})
  }

  const handleExistRecipeClick = () => {
    if (ingredientNames.length === 0) return
    mutate(ingredientNames)
  }

  const handleNewRecipeClick = () => {
    setIsOpen(true)
    // mutate([])
  }

  return (
    <Card>
      <HStack justifyContent="space-between" p="12px 0px">
        <MenuButton onClick={handleExistRecipeClick}>
          <Svg
            src="/icon/img_home.svg"
            width={32}
            height={32}
            alt="우리집 냉장고"
          />
          <VStack gap={0}>
            <Typography variant="label-b" color="gray-900" textAlign="center">
              냉장고 재료로
            </Typography>
            <Typography variant="label-b" color="gray-900" textAlign="center">
              추천 받기
            </Typography>
          </VStack>
        </MenuButton>

        <Divider />

        <MenuButton onClick={handleNewRecipeClick}>
          <Svg
            src="/icon/img_light.svg"
            width={32}
            height={32}
            alt="새로운 재료"
          />
          <VStack gap={0}>
            <Typography variant="label-b" color="gray-500" textAlign="center">
              새로운 재료와 함께
            </Typography>
            <Typography variant="label-b" color="gray-500" textAlign="center">
              추천 받기
            </Typography>
          </VStack>
        </MenuButton>

        <Divider />

        <MenuButton onClick={handleChooseRecipeClick}>
          <Svg
            src="/icon/img_click.svg"
            width={32}
            height={32}
            alt="내가 고른 재료"
          />
          <VStack gap={0}>
            <Typography variant="label-b" color="gray-900" textAlign="center">
              내가 고른 재료로
            </Typography>
            <Typography variant="label-b" color="gray-900" textAlign="center">
              추천 받기
            </Typography>
          </VStack>
        </MenuButton>
      </HStack>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="서비스 준비중"
      >
        <VStack gap={8}>
          <Typography variant="title" color="primary" textAlign="center">
            🚧
          </Typography>
          <Typography variant="label-b" color="primary" textAlign="center">
            서비스 준비중입니다.
          </Typography>
          <Typography variant="label-b" color="primary" textAlign="center">
            조금만 기다려주세요!
          </Typography>
        </VStack>
      </Modal>
    </Card>
  )
}

export default HomeRecipeMenuCard
