import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import FridgeList from "@src/components/FridgeList/FridgeList"
import { mockRefrigeratedItems, mockFrozenItems } from "@src/mocks/mockData"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import { useEffect, useState } from "react"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import HStack from "@src/components/FlexBoxGroup/HStack"
import { AppScreen } from "@stackflow/plugin-basic-ui"

const RecipeChooseActivity: ActivityComponentType = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleItemClick = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((item) => item !== id))
      return
    }
    setSelectedIds((prev) => [...prev, id])
  }

  return (
    <AppScreen>
        
      <BottomButtonField>
        <HStack gap={12}>
          <Button size="lg" variant="secondary" label="재료 추가하기" />
          <Button size="lg" variant="primary" label="레시피 추천받기" />
        </HStack>
      </BottomButtonField>
    </AppScreen>
  )
}

export default RecipeChooseActivity
