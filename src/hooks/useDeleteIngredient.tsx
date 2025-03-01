import { deleteIngredient } from "@src/apis/fridgeApis"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useDeleteIngredient = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["deleteIngredient"],
    mutationFn: (ingredientId: string) => deleteIngredient(ingredientId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredientList"] })
    },
    onError: () => {
      console.error("삭제 실패")
    },
  })

  const handleMutate = (ingredientId: string) => {
    if (isPending) return
    mutate(ingredientId)
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useDeleteIngredient
