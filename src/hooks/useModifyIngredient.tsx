import { updateIngredient } from "@src/apis/fridgeApis"
import { Ingredient, IngredientModifyRequest } from "@src/types/apiTypes"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useModifyIngredient = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["modifyIngredient"],
    mutationFn: (ingredient: IngredientModifyRequest) =>
      updateIngredient(ingredient),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredientList"] })
      queryClient.invalidateQueries({ queryKey: ["ingredientDetail"] })
    },
    onError: () => {
      console.error("수정 실패")
    },
  })

  const handleMutate = ({ ingId, ...ingredient }: IngredientModifyRequest) => {
    if (isPending) return
    mutate({ ...ingredient, ingId })
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useModifyIngredient
