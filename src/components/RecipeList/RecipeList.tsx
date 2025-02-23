import VStack from "@src/components/FlexBoxGroup/VStack"
import RecipeCard from "../RecipeCard/RecipeCard"
import { useFlow } from "@src/utils/StackFlowRegistry"

interface Recipe {
  recipesId: number
  recipesName: string
  requiredIngredients: string[]
  missingIngredients: string[]
  isScrap: "0" | "1"
}

interface RecipeListProps {
  recipes: Recipe[]
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const { push } = useFlow()

  const handleRecipeCardClick = (recipesId: number) => {
    push("RecipeDetailActivity", {
      recipesId,
    })
  }

  return (
    <VStack gap={16}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipesId}
          title={recipe.recipesName}
          requiredIngredients={recipe.requiredIngredients}
          missingIngredients={recipe.missingIngredients}
          isScrap={recipe.isScrap === "1"}
          onToggleScrap={() => {}}
          onClick={() => {
            handleRecipeCardClick(recipe.recipesId)
          }}
        />
      ))}
    </VStack>
  )
}

export default RecipeList
