import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import FridgeList from "@src/components/FridgeList/FridgeList"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import { useEffect, useState } from "react"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import HStack from "@src/components/FlexBoxGroup/HStack"
import useIngredientList from "@src/hooks/useIngredientList"
import useCreateRecipe from "@src/hooks/useCreateRecipe"
import { useFlow } from "@src/utils/StackFlowRegistry"

const RecipeChooseActivity: ActivityComponentType = () => {
  const { push } = useFlow()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [selectedNames, setSelectedNames] = useState<string[]>([])
  const { refrigeratedItems, frozenItems } = useIngredientList()

  const { mutate, isPending, isSuccess } = useCreateRecipe()

  const handleItemClick = (id: string, name: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((item) => item !== id))
      setSelectedNames((prev) => prev.filter((item) => item !== name))
      return
    }
    setSelectedIds((prev) => [...prev, id])
    setSelectedNames((prev) => [...prev, name])
  }

  const handleCreateRecipe = () => {
    mutate(selectedNames)
  }

  return (
    <TitleHeader title="직접 재료 선택">
      <VStack p="20px">
        <FridgeList
          refrigeratedItems={refrigeratedItems}
          frozenItems={frozenItems}
          type="select"
          selectedIds={selectedIds}
          onSelect={handleItemClick}
        />
      </VStack>
      <BottomButtonField>
        <HStack gap={12} pr={20} pl={20}>
          <Button size="lg" variant="secondary" label="재료 추가하기" />
          <Button
            size="lg"
            variant="primary"
            label="레시피 추천받기"
            onClick={handleCreateRecipe}
          />
        </HStack>
      </BottomButtonField>
    </TitleHeader>
  )
}

export default RecipeChooseActivity
