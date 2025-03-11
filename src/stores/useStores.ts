import { create } from "zustand"

interface RecipeState {
  isCreatingRecipe: boolean
  isNoRecipe: boolean
  setCreatingRecipe: (isCreating: boolean) => void
  setIsNoRecipe: (isNoRecipe: boolean) => void
}

export const useRecipeStore = create<RecipeState>((set) => ({
  isCreatingRecipe: false,
  isNoRecipe: false,
  setCreatingRecipe: (isCreating: boolean) =>
    set({ isCreatingRecipe: isCreating }),
  setIsNoRecipe: (isNoRecipe: boolean) => set({ isNoRecipe }),
}))
