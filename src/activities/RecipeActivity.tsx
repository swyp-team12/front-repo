import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"

const RecipeActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "Recipe Activity" }}>
      <div>
        innerr Activity
        <button onClick={() => { }}>Go to out page</button>
      </div>
    </AppScreen>
  )
}

export default RecipeActivity
