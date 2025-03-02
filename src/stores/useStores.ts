import { create } from "zustand"

interface RecipeState {
  isCreatingRecipe: boolean

  setCreatingRecipe: (isCreating: boolean) => void
}

export const useRecipeStore = create<RecipeState>((set) => ({
  isCreatingRecipe: false,

  setCreatingRecipe: (isCreating: boolean) =>
    set({ isCreatingRecipe: isCreating }),
}))
