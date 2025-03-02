import { getIngredientList } from "@src/apis/fridgeApis"
import { Ingredient, IngredientListResponse } from "@src/types/apiTypes"
import { isExpiringWithinWeek } from "@src/utils/commonUtils"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

const useIngredientList = () => {
  const { data: ingredientList = [], isLoading } = useQuery<
    IngredientListResponse,
    unknown,
    Ingredient[]
  >({
    queryKey: ["ingredientList"],
    queryFn: () => getIngredientList(),
    select: (data) => data.data,
  })

  const refrigeratedItems = useMemo(
    () => ingredientList.filter((item) => item.storageType === "냉장"),
    [ingredientList]
  )

  const frozenItems = useMemo(
    () => ingredientList.filter((item) => item.storageType === "냉동"),
    [ingredientList]
  )

  const expiredItems = useMemo(
    () =>
      ingredientList.filter((item) => isExpiringWithinWeek(item.expiryDate)),
    [ingredientList]
  )

  const ingredientNames = useMemo(
    () => ingredientList.map((item) => item.name),
    [ingredientList]
  )

  return {
    refrigeratedItems,
    frozenItems,
    expiredItems,
    ingredientNames,
    isLoading,
  }
}
export default useIngredientList
