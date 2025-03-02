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

export type Recipe = {
  recipesId: number
  userId: number
  recipesName: string
  recipeContent: string
  isDelete: boolean
  isScrap: boolean
  scrapTime: string
  recipeIngredients: {
    recipeIngredientName: string
  }[]
  createAt: string
  updatedAt: string
}

export type RecipeListResponse = {
  status: string
  data: Recipe[]
  message: string | null
}

export type RecipeDetailResponse = {
  status: string
  data: Recipe
  message: string | null
}
