import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"

const FridgeActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "innerz Activity" }}>
      <div>
        innerr Activity
        <button onClick={() => {}}>Go to out page</button>
      </div>
    </AppScreen>
  )
}

export default FridgeActivity
