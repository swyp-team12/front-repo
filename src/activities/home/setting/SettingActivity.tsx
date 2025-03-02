import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import HStack from "@src/components/FlexBoxGroup/HStack"
import { useFlow } from "@src/utils/StackFlowRegistry"
const SettingActivity: ActivityComponentType = () => {
  const { push } = useFlow()
  const handleMyInfoClick = () => {
    push("MyInfoActivity", {})
  }
  return (
    <TitleHeader title="설정">
      <VStack p="20px" gap={44}>
        <VStack gap={22}>
          <Typography variant="body-b">사용자 설정</Typography>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            onClick={handleMyInfoClick}
          >
            <Typography variant="body-r">내 정보</Typography>
            <Svg src="/icon/icon_arrow_right.svg" width={12} height={12} />
          </HStack>
        </VStack>
        <VStack gap={16}>
          <Typography variant="body-m">의견 보내기</Typography>
          <HStack justifyContent="space-between">
            <Typography variant="body-r">담당자 이메일</Typography>
            <Typography variant="body-r">ptss0129@gmail.com</Typography>
          </HStack>
        </VStack>
      </VStack>
    </TitleHeader>
  )
}

export default SettingActivity
