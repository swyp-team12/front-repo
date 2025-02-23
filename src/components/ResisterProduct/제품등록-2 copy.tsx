import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import { useFlow } from "@src/utils/StackFlowRegistry"
import Card from "@src/components/Card/Card"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import { ExpirationProductSvg } from "@src/components/NearExpiration/expirationProductSvg"
import FlexBox from "@src/components/FlexBoxGroup/FlexBox"
import { ExpirationProductAlertContainer } from "@src/components/NearExpiration/styled"
import Svg from "@src/components/Svg/Svg"


const InitActivity: ActivityComponentType = () => {
  const { replace } = useFlow()

  const onClick = () => {
    replace("HomeActivity", {})
  }

  return (
    <AppScreen>
      <VStack alignItems="center" >
        <HStack width="390px" height="44px" border="1px solid red"> 
          Status Bar
        </HStack>
        <HStack width="390px" height="64px" boxShadow="0px 4px 24px 0px rgba(0, 0, 0, 0.04)"> 
          <HStack alignItems="center" ml={20} gap={128} width="210px" height="44px">
            <Svg width="8px" height="18px"src="/vector423.svg" alt="vector423" />
            <FlexBox fontSize="head-m" fontWeight="head-m" lineHeight="head-m">
              제품등록
            </FlexBox>
          </HStack>
        </HStack>
        <VStack mt={28} gap={20} p="0 20px" width="350px" height="152px" >
          <FlexBox fontSize="title" fontWeight="title" lineHeight="title">
            제품을 등록해볼까요?
          </FlexBox>
          <VStack gap={4} alignItems="center" justifyContent="center" width="100px" height="100px" borderRadius={8} boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.08)">
            <Svg width="20px" height="20px" src="/camera.svg" alt="camera" />
            <FlexBox color="gray-scale-5"fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
              0/5(선택)
            </FlexBox>
          </VStack>
        </VStack>
        <VStack color="gray-scale-4" mt={38} gap={16} p="0 20px" width="350px" height="386px">
          <HStack bb="1px solid #C5C5C5" p="0 8px" width="334px" height="32px">
            제품명을 입력해주세요
          </HStack>
          <HStack justifyContent="space-between" bb="1px solid #C5C5C5" p="0 8px" width="334px" height="32px">
            <FlexBox>
              제품 개수
            </FlexBox>
            <FlexBox>
              개수 선택
            </FlexBox>
          </HStack>
          <HStack justifyContent="space-between" bb="1px solid #C5C5C5" p="0 8px" width="334px" height="32px" >
            <FlexBox>
              제품 용량
            </FlexBox>
            <FlexBox>
              용량 선택
            </FlexBox>
          </HStack>
          <HStack justifyContent="space-between" bb="1px solid #C5C5C5" p="0 8px" width="334px" height="32px">
            <FlexBox>
              유통기한
            </FlexBox>
            <FlexBox>
              기간 선택
            </FlexBox>
          </HStack>
          <HStack justifyContent="space-between" width="350px" height="32px">
            <HStack justifyContent="center" width="164px" height="32px" bb="1px solid #C5C5C5">
              <HStack justifyContent="space-between" width="148px" height="24px">
                <FlexBox>
                  카테고리
                </FlexBox>
              </HStack>
            </HStack>
            <VStack alignItems="end" position="relative">
              <HStack justifyContent="center" width="164px" height="32px" bb="1px solid #C5C5C5">
                <HStack justifyContent="space-between" width="148px" height="24px">
                  <FlexBox>
                    분류
                  </FlexBox>
                  <FlexBox>
                    v
                  </FlexBox>
                </HStack>
              </HStack>
              <VStack gap={10} alignItems="center" position="absolute" top="calc(100% - 1px)" bg="white" border="1px solid #F7F9FA" width="100px" height="50px" borderRadius={8} boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.08)">
                <FlexBox mt={8} fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  2개
                </FlexBox>
                <FlexBox fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  3개
                </FlexBox>
                <FlexBox fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  4개
                </FlexBox>
                <FlexBox fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  5개
                </FlexBox>
                <FlexBox fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  6개
                </FlexBox>
                <FlexBox fontSize="text-m" fontWeight="text-m" lineHeight="text-m">
                  7개
                </FlexBox>
              </VStack>
            </VStack>
          </HStack>
          <FlexBox p="8px 12px" border="1px solid #C5C5C5" borderRadius={12} width="324px" height="130px">
            메모
          </FlexBox>
        </VStack>
        <FlexBox mt={48} alignItems="center" justifyContent="center" borderRadius={12} bg="gray-scale-2" width="350px" height="60px" >
          <FlexBox color="white" fontSize="head-b" fontWeight="head-b" lineHeight="head-b" >
            작성완료
          </FlexBox>
        </FlexBox>
      </VStack>
    </AppScreen>
  )
}

export default InitActivity
