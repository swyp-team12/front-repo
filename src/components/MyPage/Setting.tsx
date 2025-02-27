import HStack from "../FlexBoxGroup/HStack";
import VStack from "../FlexBoxGroup/VStack";
import TitleHeader from "../HeaderGroup/TitleHeader";
import Svg from "../Svg/Svg";
import Typography from "../Typography/Typograpy";

const Setting = () => {
  return (
    <TitleHeader title="설정">
      <VStack p="20px" gap={22} >
        <VStack gap={22}>
          <Typography variant="body-b">
            사용자 설정
          </Typography>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body-m">
              내 정보
            </Typography>
            <Svg src="/icon/icon_vector_right.svg" width={5} height={8} />
          </HStack>
        </VStack>
        <VStack gap={22}>
          <Typography variant="body-b">
            설정
          </Typography>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body-m">
              의견 보내기
            </Typography>
            <Svg src="/icon/icon_vector_right.svg" width={5} height={8} />
          </HStack>
        </VStack>
      </VStack>
    </TitleHeader>
  )
}

export default Setting; 