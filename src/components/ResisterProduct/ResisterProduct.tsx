import { AppScreen } from "@stackflow/plugin-basic-ui"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import FlexBox from "@src/components/FlexBoxGroup/FlexBox"
import Svg from "@src/components/Svg/Svg"
import Typography from "../Typography/Typograpy"
import ProductDetailInput from "../ProductDetailInput/ProductDetailInput"
import Button from "../Button/Button"
import TitleHeader from "../HeaderGroup/TitleHeader"
import SortDropdown from "../Dropdown/SortDropdown"
import CategoryDropdown from "../Dropdown/CategoryDropdown"

const ResisterProduct = () => {
  return (
    <AppScreen>
      <TitleHeader title="제품등록">
        <VStack p="20px">
          <VStack gap={20}>
            <Typography variant="title">제품을 등록해볼까요?</Typography>
            <VStack
              gap={4}
              alignItems="center"
              justifyContent="center"
              width="100px"
              height="100px"
              borderRadius={8}
              boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.08)"
            >
              <Svg
                width={20}
                height={20}
                src="/icon/icon_camera.svg"
                alt="camera icon"
              />
              <Typography color="gray-600" variant="text-m">
                0/5(선택)
              </Typography>
            </VStack>
          </VStack>
          <VStack mt={38} gap={16}>
            <HStack pl={8} pb={8} border="1px solid #C5C5C5" gap={10}>
              <Svg width={16} height={16} src="/icon/icon_pen.svg" alt="pen" />
              <Typography color="gray-500" variant="body-m">
                제품명을 입력해주세요
              </Typography>
            </HStack>
            <ProductDetailInput
              src="/icon/icon_number.svg"
              inputName="제품 개수"
              dropdownType="number"
            />
            <ProductDetailInput
              src="/icon/icon_amount.svg"
              inputName="제품 용량"
              dropdownType="amount"
            />
            <ProductDetailInput
              src="/icon/icon_calender.svg"
              inputName="소비기한"
            />
            <HStack gap={20} justifyContent="space-between">
              <HStack pl={8} pr={8} pb={8} border="1px solid #C5C5C5">
                <HStack alignItems="center" gap={4} width="148px" height="24px">
                  <Svg
                    width={20}
                    height={20}
                    src="/icon/icon_folder.svg"
                    alt="folder"
                  />
                  <CategoryDropdown width="122px" height="22px" />
                </HStack>
              </HStack>
              <HStack
                gap={4}
                border="1px solid #C5C5C5"
                pl={8}
                pr={8}
                pb={8}
                alignItems="center"
              >
                <Svg src="/icon/icon_tag.svg" width={18} height={18} />
                <SortDropdown width="122px" />
              </HStack>
            </HStack>
            <FlexBox
              p="8px 12px"
              border="1px solid #C5C5C5"
              borderRadius={12}
              height="146px"
            >
              <Typography color="gray-500" variant="body-m">
                메모
              </Typography>
            </FlexBox>
          </VStack>
          <VStack mt={30}>
            <Button variant="secondary" size="lg" label="작성 완료" />
          </VStack>
        </VStack>
      </TitleHeader>
    </AppScreen>
  )
}

export default ResisterProduct
