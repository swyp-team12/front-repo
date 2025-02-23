import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import { MenuButton, Divider } from "./styled"
import { useFlow } from "@src/utils/StackFlowRegistry"

const HomeRecipeMenuCard = () => {
  const { push } = useFlow()

  const handleChooseRecipeClick = () => {
    push("RecipeChooseActivity", {})
  }

  return (
    <Card>
      <HStack justifyContent="space-between" p="12px 0px">
        <MenuButton onClick={() => console.log("home clicked")}>
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

        <MenuButton onClick={() => console.log("light clicked")}>
          <Svg
            src="/icon/img_light.svg"
            width={32}
            height={32}
            alt="새로운 재료"
          />
          <VStack gap={0}>
            <Typography variant="label-b" color="gray-900" textAlign="center">
              새로운 재료와 함께
            </Typography>
            <Typography variant="label-b" color="gray-900" textAlign="center">
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
    </Card>
  )
}

export default HomeRecipeMenuCard
