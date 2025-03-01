export type Ingredient = {
  category: string
  createdAt: string
  expiryDate: string
  ingId: number
  ingImage: string
  ingNum: number
  name: string
  quantity: string
  storageType: "냉장" | "냉동"
  updatedAt: string
  userMemo: string
}

export type IngredientListResponse = {
  status: string
  data: Ingredient[]
  message: string | null
}

export type IngredientDetailResponse = {
  status: string
  data: Ingredient
  message: string | null
}
