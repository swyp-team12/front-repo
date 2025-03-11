import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import styled from "styled-components"
import Spinner from "@src/components/Spinner/Spinner"
import { useEffect } from "react"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { useRecipeStore } from "@src/stores/useStores"
import Modal from "@src/components/ModalGroup/Modal"

const SpinnerWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const RecipeLoadingActivity: ActivityComponentType = () => {
  const { replace } = useFlow()
  const { isCreatingRecipe, isNoRecipe, setIsNoRecipe } = useRecipeStore()
  const onCloseModal = () => {
    setIsNoRecipe(false)
    replace("RecipeActivity", {})
  }
  useEffect(() => {
    if (!isCreatingRecipe) {
      if (isNoRecipe) {
        console.log("isNoRecipe", isNoRecipe)
        return
      }
      setTimeout(() => {
        replace("RecipeActivity", {})
      }, 2000)
    }
  }, [isCreatingRecipe])
  return (
    <AppScreen>
      <VStack
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <VStack alignItems="center" gap={24}>
          <Svg
            src="/icon/icon_search_circle.svg"
            width={64}
            height={64}
            alt="검색"
          />
          <VStack alignItems="center" gap={10}>
            <Typography variant="title" color="black">
              레시피 검색중 🔍
            </Typography>
            <VStack gap={2} alignItems="center">
              <Typography variant="body-m" color="black">
                회원님을 위한
              </Typography>
              <Typography variant="body-m" color="black">
                맛있는 한 끼를 검색합니다 🍴
              </Typography>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
      <Modal isOpen={isNoRecipe} onClose={onCloseModal} title="검색결과">
        <VStack gap={10}>
          <Typography variant="body-m" color="black">
            레시피 검색 결과가 없습니다 🥦
          </Typography>
          <VStack gap={2}>
            <Typography variant="label-r" color="black">
              ai의 응답이므로 정확하지 않을 수 있습니다.
            </Typography>
            <Typography variant="label-r" color="black">
              다시 한 번 시도해주세요.
            </Typography>
          </VStack>
        </VStack>
      </Modal>
    </AppScreen>
  )
}

export default RecipeLoadingActivity
