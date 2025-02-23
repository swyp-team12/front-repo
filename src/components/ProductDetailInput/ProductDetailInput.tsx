import HStack from "../FlexBoxGroup/HStack";
import Svg from "../Svg/Svg";
import Typography from "../Typography/Typograpy";

    <HStack border={`1px solid #C5C5C5`} justifyContent="space-between" pl={8} pr={8} pb={8}>
       <HStack gap={8}>
          <Svg src='/icon/icon_number.svg' width={20} height={20}/>
          <Typography variant="body-m" color="gray-500">
            제품 개수
          </Typography>
        </HStack>
        <HStack gap={8} alignItems="center">
          <Typography variant="body-m" color="gray-500">
            개수 선택
          </Typography>
          <Svg src="/icon/icon_vector.svg" width={12} height={18}/>
        </HStack>
    </HStack> 