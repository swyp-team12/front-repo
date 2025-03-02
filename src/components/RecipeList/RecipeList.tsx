import VStack from "@src/components/FlexBoxGroup/VStack"
import RecipeCard from "../RecipeCard/RecipeCard"
import { useFlow } from "@src/utils/StackFlowRegistry"
import { Recipe } from "@src/types/apiTypes"
import useScrapRecipe from "@src/hooks/useScrapRecipe"

interface RecipeListProps {
  recipes: Recipe[]
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const { push } = useFlow()

  const { mutate } = useScrapRecipe()

  const handleRecipeCardClick = (recipesId: number) => {
    push("RecipeDetailActivity", {
      recipesId,
    })
  }

  const handleToggleScrap = (recipesId: number, currentScrap: boolean) => {
    mutate(recipesId, currentScrap)
  }

  return (
    <VStack gap={16}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipesId}
          recipe={recipe}
          onToggleScrap={() =>
            handleToggleScrap(recipe.recipesId, recipe.isScrap)
          }
          onClick={() => {
            handleRecipeCardClick(recipe.recipesId)
          }}
        />
      ))}
    </VStack>
  )
}

export default RecipeList
