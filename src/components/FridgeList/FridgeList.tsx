import VStack from "@src/components/FlexBoxGroup/VStack"
import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconCard from "@src/components/IconCard/IconCard"
import styled from "styled-components"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { Ingredient } from "@src/types/apiTypes"
import { useState } from "react"

interface BaseFridgeListProps {
  refrigeratedItems: Ingredient[]
  frozenItems: Ingredient[]
}

interface ViewFridgeListProps extends BaseFridgeListProps {
  type?: "view"
}

interface SelectFridgeListProps extends BaseFridgeListProps {
  type: "select"
  onSelect: (id: string, name: string) => void
  selectedIds: string[]
}

type FridgeListProps = ViewFridgeListProps | SelectFridgeListProps

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 100%;
`

const SectionHeader = styled(HStack)`
  cursor: pointer;
`

const AnimatedContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
`

const FridgeList = ({
  refrigeratedItems,
  frozenItems,
  type = "view",
  ...props
}: FridgeListProps) => {
  const { push } = useFlow()
  const [isRefrigeratorOpen, setIsRefrigeratorOpen] = useState(true)
  const [isFreezerOpen, setIsFreezerOpen] = useState(true)

  const handleItemClick = (id: string, name: string) => {
    if (type === "select" && "onSelect" in props) {
      props.onSelect(id, name)
    } else {
      push("IngDetailActivity", {
        ingId: Number(id),
      })
    }
  }

  const toggleRefrigerator = () => {
    setIsRefrigeratorOpen(!isRefrigeratorOpen)
  }

  const toggleFreezer = () => {
    setIsFreezerOpen(!isFreezerOpen)
  }

  return (
    <VStack gap={16}>
      <Card>
        <VStack gap={16}>
          <SectionHeader
            justifyContent="space-between"
            alignItems="center"
            onClick={toggleRefrigerator}
          >
            <Typography variant="body-b" color="primary">
              냉장 🍎
            </Typography>
            <Svg
              src={
                isRefrigeratorOpen
                  ? "/icon/icon_arrow_up.svg"
                  : "/icon/icon_arrow_down.svg"
              }
              width={16}
              height={16}
              alt={isRefrigeratorOpen ? "접기" : "펼치기"}
            />
          </SectionHeader>

          <AnimatedContent $isOpen={isRefrigeratorOpen}>
            {refrigeratedItems.length > 0 ? (
              <GridContainer>
                {refrigeratedItems.map((item) => (
                  <VStack key={item.name} alignItems="center" gap={4}>
                    <IconCard
                      onClick={() =>
                        handleItemClick(`${item.ingId}`, item.name)
                      }
                      selected={
                        type === "select" && "selectedIds" in props
                          ? props.selectedIds.includes(`${item.ingId}`)
                          : false
                      }
                    >
                      <VStack
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                      >
                        <Svg
                          src={`/icon/category/icon_${item.category}.svg`}
                          width={24}
                          height={24}
                          alt={item.name}
                        />
                        <Typography variant="label-b" color="gray-800">
                          {item.name}
                        </Typography>
                      </VStack>
                    </IconCard>
                  </VStack>
                ))}
              </GridContainer>
            ) : (
              <VStack alignItems="center" gap={8} pt={16} pb={16}>
                <Svg
                  src="/icon/icon_empty_box.svg"
                  width={32}
                  height={32}
                  alt="빈 박스"
                />
                <VStack gap={2} alignItems="center">
                  <Typography variant="label-m" color="primary">
                    등록된 제품이 없어요!
                  </Typography>
                  <Typography variant="label-m" color="primary">
                    제품 등록을 진행해주세요.
                  </Typography>
                </VStack>
              </VStack>
            )}
          </AnimatedContent>
        </VStack>
      </Card>

      <Card>
        <VStack gap={16}>
          <SectionHeader
            justifyContent="space-between"
            alignItems="center"
            onClick={toggleFreezer}
          >
            <Typography variant="body-b" color="primary">
              냉동 ❄️
            </Typography>
            <Svg
              src={
                isFreezerOpen
                  ? "/icon/icon_arrow_up.svg"
                  : "/icon/icon_arrow_down.svg"
              }
              width={16}
              height={16}
              alt={isFreezerOpen ? "접기" : "펼치기"}
            />
          </SectionHeader>

          <AnimatedContent $isOpen={isFreezerOpen}>
            {frozenItems.length > 0 ? (
              <GridContainer>
                {frozenItems.map((item) => (
                  <VStack key={item.name} alignItems="center" gap={4}>
                    <IconCard
                      onClick={() =>
                        handleItemClick(`${item.ingId}`, item.name)
                      }
                      selected={
                        type === "select" && "selectedIds" in props
                          ? props.selectedIds.includes(`${item.ingId}`)
                          : false
                      }
                    >
                      <VStack
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                      >
                        <Svg
                          src={`/icon/category/icon_${item.category}.svg`}
                          width={24}
                          height={24}
                          alt={item.name}
                        />
                        <Typography variant="label-b" color="gray-800">
                          {item.name}
                        </Typography>
                      </VStack>
                    </IconCard>
                  </VStack>
                ))}
              </GridContainer>
            ) : (
              <VStack alignItems="center" gap={8} pt={16} pb={16}>
                <Svg
                  src="/icon/icon_empty_box.svg"
                  width={32}
                  height={32}
                  alt="빈 박스"
                />
                <VStack gap={2} alignItems="center">
                  <Typography variant="label-m" color="primary">
                    등록된 제품이 없어요!
                  </Typography>
                  <Typography variant="label-m" color="primary">
                    제품 등록을 진행해주세요.
                  </Typography>
                </VStack>
              </VStack>
            )}
          </AnimatedContent>
        </VStack>
      </Card>
    </VStack>
  )
}

export default FridgeList
