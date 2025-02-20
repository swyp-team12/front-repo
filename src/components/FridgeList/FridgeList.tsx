import VStack from "@src/components/FlexBoxGroup/VStack"
import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconCard from "@src/components/IconCard/IconCard"
import styled from "styled-components"

interface FridgeListProps {
  refrigeratedItems: {
    name: string
    category: string
  }[]
  frozenItems: {
    name: string
    category: string
  }[]
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-height: 216px;
  width: 100%;
  align-content: start;
`

const truncateName = (name: string) => {
  return name.length > 4 ? name.slice(0, 3) + "..." : name
}

const FridgeList = ({ refrigeratedItems, frozenItems }: FridgeListProps) => {
  return (
    <VStack gap={24}>
      <Card>
        <VStack gap={16}>
          <Typography variant="body-b" color="primary">
            냉장 🍎
          </Typography>
          <GridContainer>
            {refrigeratedItems.map((item) => (
              <VStack key={item.name} alignItems="center" gap={4}>
                <IconCard>
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
        </VStack>
      </Card>

      <Card>
        <VStack gap={16}>
          <Typography variant="body-b" color="primary">
            냉동 ❄️
          </Typography>
          <GridContainer>
            {frozenItems.map((item) => (
              <VStack key={item.name} alignItems="center" gap={4}>
                <IconCard>
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
        </VStack>
      </Card>
    </VStack>
  )
}

export default FridgeList
