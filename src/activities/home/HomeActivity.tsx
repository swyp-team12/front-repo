import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import { useFlow } from "@src/utils/StackFlowRegistry"

const HomeActivity: ActivityComponentType = () => {
  const { push } = useFlow()

  const onClick = () => {
    push("FridgeActivity", {})
  }

  return (
    <AppScreen appBar={{ title: "My Activity" }}>
      <div>
        My Activity
        <button onClick={onClick}>Go to article page</button>
      </div>
    </AppScreen>
  )
}

export default HomeActivity
