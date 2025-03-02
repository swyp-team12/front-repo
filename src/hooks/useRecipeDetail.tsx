import { getRecipeDetail } from "@src/apis/recipeApis"
import { Recipe, RecipeDetailResponse } from "@src/types/apiTypes"
import { useQuery } from "@tanstack/react-query"

const useRecipeDetail = (recipesId: number) => {
  const { data: recipeDetail, isLoading } = useQuery<
    RecipeDetailResponse,
    unknown,
    Recipe
  >({
    queryKey: ["recipeDetail", recipesId],
    queryFn: () => getRecipeDetail(recipesId),
    select: (data) => data.data,
  })

  return { recipeDetail, isLoading }
}

export default useRecipeDetail
