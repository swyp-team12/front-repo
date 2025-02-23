import VStack from "@src/components/FlexBoxGroup/VStack"
import RecipeCard from "../RecipeCard/RecipeCard"

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
        />
      ))}
    </VStack>
  )
}

export default RecipeList
