import { getIngredientDetail } from "@src/apis/fridgeApis"
import { Ingredient, IngredientDetailResponse } from "@src/types/apiTypes"
import { useQuery } from "@tanstack/react-query"

const useIngredientDetail = (ingId: number) => {
  const { data: ingredientDetail, isLoading } = useQuery<
    IngredientDetailResponse,
    unknown,
    Ingredient
  >({
    queryKey: ["ingredientDetail", ingId],
    queryFn: () => getIngredientDetail(ingId),
    select: (data) => data.data,
  })

  console.log("ingredientDetail", ingredientDetail)

  return { ingredientDetail, isLoading }
}

export default useIngredientDetail
