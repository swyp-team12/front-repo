export type Ingredient = {
  category: string
  createdAt: string
  expiryDate: string
  ingId: number
  ingImage: string
  ingNum: number
  name: string
  quantity: string
  storageType: string
  updatedAt: string
  userMemo: string
}

export type IngredientCreateRequest = {
  name: string
  quantity: string
  ingNum: number
  expiryDate: string
  storageType: string
  category: string
  userMemo: string
  ingImage: File
}

export type IngredientModifyRequest = IngredientCreateRequest & {
  ingId: number
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
