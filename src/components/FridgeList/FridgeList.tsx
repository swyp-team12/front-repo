import VStack from "@src/components/FlexBoxGroup/VStack"
import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconCard from "@src/components/IconCard/IconCard"
import styled from "styled-components"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { Ingredient } from "@src/types/apiTypes"

interface BaseFridgeListProps {
  refrigeratedItems: Ingredient[]
  frozenItems: Ingredient[]
}

interface SelectFridgeListProps extends BaseFridgeListProps {
  type: "select"
  selectedIds: string[]
  onSelect: (id: string) => void
}

interface ViewFridgeListProps extends BaseFridgeListProps {
  type?: "view"
}

type FridgeListProps = SelectFridgeListProps | ViewFridgeListProps

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-height: 134px;
  width: 100%;
  align-content: start;
`

const truncateName = (name: string) => {
  return name.length > 4 ? name.slice(0, 3) + "..." : name
}

const FridgeList = ({
  refrigeratedItems,
  frozenItems,
  type = "view",
  ...props
}: FridgeListProps) => {
  const { push } = useFlow()

  const handleItemClick = (id: string) => {
    if (type === "select" && "onSelect" in props) {
      props.onSelect(id)
    } else {
      push("IngDetailActivity", {
        ingId: Number(id),
      })
    }
  }

  return (
    <VStack gap={24}>
      <Card>
        <VStack gap={16}>
          <Typography variant="body-b" color="primary">
            냉장 🍎
          </Typography>
          {refrigeratedItems.length > 0 ? (
            <GridContainer>
              {refrigeratedItems.map((item) => (
                <VStack key={item.name} alignItems="center" gap={4}>
                  <IconCard
                    onClick={() => handleItemClick(`${item.ingId}`)}
                    selected={
                      type === "select" && "selectedIds" in props
                        ? props.selectedIds.includes(`${item.ingId}`)
                        : false
                    }
                  >
                    <VStack alignItems="center" justifyContent="center" gap={4}>
                      <Svg
                        src={`/icon/category/icon_${item.category}.svg`}
                        width={24}
                        height={24}
                        alt={item.name}
                      />
                      <Typography variant="label-b" color="gray-800">
                        {truncateName(item.name)}
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
        </VStack>
      </Card>

      <Card>
        <VStack gap={16}>
          <Typography variant="body-b" color="primary">
            냉동 ❄️
          </Typography>
          {frozenItems.length > 0 ? (
            <GridContainer>
              {frozenItems.map((item) => (
                <VStack key={item.name} alignItems="center" gap={4}>
                  <IconCard
                    onClick={() => handleItemClick(`${item.ingId}`)}
                    selected={
                      type === "select" && "selectedIds" in props
                        ? props.selectedIds.includes(`${item.ingId}`)
                        : false
                    }
                  >
                    <VStack alignItems="center" justifyContent="center" gap={4}>
                      <Svg
                        src={`/icon/category/icon_${item.category}.svg`}
                        width={24}
                        height={24}
                        alt={item.name}
                      />
                      <Typography variant="label-b" color="gray-800">
                        {truncateName(item.name)}
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
        </VStack>
      </Card>
    </VStack>
  )
}

export default FridgeList
