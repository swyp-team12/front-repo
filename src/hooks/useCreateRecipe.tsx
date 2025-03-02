import { createRecipe } from "@src/apis/recipeApis"
import { useRecipeStore } from "@src/stores/useStores"
import { Ingredient, IngredientCreateRequest } from "@src/types/apiTypes"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateRecipe = () => {
  const { push } = useFlow()
  const queryClient = useQueryClient()
  const { setCreatingRecipe } = useRecipeStore()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["createRecipe"],
    mutationFn: createRecipe,
    onMutate: () => {
      setCreatingRecipe(true)
      push("RecipeLoadingActivity", {})
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["recipeList"] })
      setCreatingRecipe(false)
    },
    onError: () => {
      setCreatingRecipe(false)
    },
  })

  const handleMutate = (ingredients: string[]) => {
    if (isPending) return
    mutate(ingredients)
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useCreateRecipe
