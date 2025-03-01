import { updateIngredient } from "@src/apis/fridgeApis"
import { Ingredient } from "@src/types/apiTypes"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useModifyIngredient = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["modifyIngredient"],
    mutationFn: (ingredient: Ingredient) => updateIngredient(ingredient),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredientList"] })
      queryClient.invalidateQueries({ queryKey: ["ingredientDetail"] })
    },
    onError: () => {
      console.error("수정 실패")
    },
  })

  const handleMutate = (ingredient: Ingredient) => {
    if (isPending) return
    mutate(ingredient)
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useModifyIngredient
