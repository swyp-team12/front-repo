import { ActivityComponentType } from "@stackflow/react"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import styled from "styled-components"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import useIngredientDetail from "@src/hooks/useIngredientDetail"
import {
  formatDateYYYYMMDD,
  formatISODate,
  translateCategory,
} from "@src/utils/commonUtils"
import { useFlow } from "@src/utils/StackFlowRegistry"
import useDeleteIngredient from "@src/hooks/useDeleteIngredient"
import useIngredientList from "@src/hooks/useIngredientList"
import FridgeList from "@src/components/FridgeList/FridgeList"

interface IngExpiredActivityProps {}

const IngExpiredActivity: ActivityComponentType<
  IngExpiredActivityProps
> = () => {
  const { expiredItems } = useIngredientList()
  return (
    <TitleHeader title="소비기한 임박 목록">
      <VStack p="20px">
        <FridgeList
          refrigeratedItems={expiredItems.filter(
            (item) => item.storageType === "냉장"
          )}
          frozenItems={expiredItems.filter(
            (item) => item.storageType === "냉동"
          )}
        />
      </VStack>
    </TitleHeader>
  )
}

export default IngExpiredActivity
