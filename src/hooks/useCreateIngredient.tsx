import { createIngredient, updateIngredient } from "@src/apis/fridgeApis"
import { Ingredient, IngredientCreateRequest } from "@src/types/apiTypes"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useCreateIngredient = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["modifyIngredient"],
    mutationFn: createIngredient,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["ingredientList"] })
      return data
    },
    onError: () => {
      console.log("재료 정보 생성 실패")
    },
  })

  const handleMutate = (ingredient: IngredientCreateRequest) => {
    if (isPending) return
    mutate(ingredient)
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useCreateIngredient
