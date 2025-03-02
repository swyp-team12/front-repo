import { getProfile } from "@src/apis/commonApis"
import { getIngredientDetail } from "@src/apis/fridgeApis"
import { Ingredient, IngredientDetailResponse } from "@src/types/apiTypes"
import { useQuery } from "@tanstack/react-query"

const useGetUserInfo = () => {
  const { data: userInfo, isLoading } = useQuery<
    { status: number; data: { nickname: string }; message: string | null },
    unknown,
    { nickname: string }
  >({
    queryKey: ["userInfo"],
    queryFn: () => getProfile(),
    select: (data) => data.data,
  })

  return { userInfo, isLoading }
}

export default useGetUserInfo
