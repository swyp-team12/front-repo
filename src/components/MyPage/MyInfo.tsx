import Button from "../Button/Button";
import HStack from "../FlexBoxGroup/HStack";
import VStack from "../FlexBoxGroup/VStack";
import TitleHeader from "../HeaderGroup/TitleHeader";
import Svg from "../Svg/Svg";
import Typography from "../Typography/Typograpy";


const Myinfo = () => {
    return (
      <TitleHeader title="내 정보">
          <VStack p="20px" gap={14}>
          <VStack gap={8}>
            <Typography variant="body-b">
              이름
            </Typography>
            <HStack p="10px" border="1px solid #E5E5E5" borderRadius={4} justifyContent="space-between" alignItems="center">
              <Typography variant="label-m">
                이름
              </Typography>
              <Svg src="/icon/icon_remove.svg" />
            </HStack>
            <Typography variant="label-m">
              이름은 14일 안에 한 번만 변경할 수 있어요.
            </Typography>
          </VStack>
          <VStack gap={8}>
            <Typography variant="body-b">
              계정정보
            </Typography>
            <Button
                variant="secondary"
                size="sm"
                label="카카오톡 로그인"
              />
          </VStack>
          <VStack m="150px 0 0 0" gap={18}>
            <Button
                variant="secondary"
                size="sm"
                label="로그아웃"
              />
              <Button
                variant="secondary"
                size="sm"
                label="계정삭제"
              />
            </VStack>
        </VStack>
      </TitleHeader>
    );
}

export default Myinfo;