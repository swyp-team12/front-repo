import { getIngredientList } from "@src/apis/fridgeApis"
import { getScrapRecipeList } from "@src/apis/recipeApis"
import {
  Ingredient,
  IngredientListResponse,
  Recipe,
  RecipeListResponse,
} from "@src/types/apiTypes"
import { isExpiringWithinWeek } from "@src/utils/commonUtils"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"

const useScrapList = () => {
  const { data: recipeList = [], isLoading } = useQuery<
    RecipeListResponse,
    unknown,
    Recipe[]
  >({
    queryKey: ["scrapRecipeList"],
    queryFn: () => getScrapRecipeList(),
    select: (data) => data.data,
  })

  return {
    recipeList,
    isLoading,
  }
}
export default useScrapList
