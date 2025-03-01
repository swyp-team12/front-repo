import { deleteIngredient } from "@src/apis/fridgeApis"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useFlow } from "@src/utils/StackFlowRegistry"
const useDeleteIngredient = () => {
  const { pop } = useFlow()
  const queryClient = useQueryClient()
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["deleteIngredient"],
    mutationFn: (ingredientId: number) => deleteIngredient(ingredientId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ingredientList"] })
      pop()
    },
    onError: () => {
      console.error("삭제 실패")
    },
  })

  const handleMutate = (ingredientId: number) => {
    if (isPending) return
    mutate(ingredientId)
  }

  return { mutate: handleMutate, isPending, isSuccess }
}

export default useDeleteIngredient
