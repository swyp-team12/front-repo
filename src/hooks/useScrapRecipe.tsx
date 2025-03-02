import { updateIngredient } from "@src/apis/fridgeApis"
import { scrapRecipe, unScrapRecipe } from "@src/apis/recipeApis"
import { Ingredient, IngredientModifyRequest } from "@src/types/apiTypes"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useScrapRecipe = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["scrapRecipe"],
    mutationFn: ({
      recipeId,
      currentScrap,
    }: {
      recipeId: number
      currentScrap: boolean
    }) => (currentScrap ? unScrapRecipe(recipeId) : scrapRecipe(recipeId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipeList"] })
      queryClient.invalidateQueries({ queryKey: ["recipeDetail"] })
    },
    onError: () => {
      console.error("스크랩 변경 실패")
    },
  })

  const handleMutate = (recipeId: number, currentScrap: boolean) => {
    if (isPending) return
    mutate({ recipeId, currentScrap })
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useScrapRecipe
