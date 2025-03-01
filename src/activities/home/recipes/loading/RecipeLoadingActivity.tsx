import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import styled from "styled-components"
import Spinner from "@src/components/Spinner/Spinner"
import { useEffect } from "react"
import { useFlow } from "@src/utils/StackFlowRegistry"

const SpinnerWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const RecipeLoadingActivity: ActivityComponentType = () => {
  const { replace } = useFlow()
  useEffect(() => {
    setTimeout(() => {
      replace("RecipeDetailActivity", { recipesId: 1 })
    }, 3000)
  }, [])
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
    </AppScreen>
  )
}

export default RecipeLoadingActivity
