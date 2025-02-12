import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import { useFlow } from "@src/utils/StackFlowRegistry"

const InitActivity: ActivityComponentType = () => {
  const { replace } = useFlow()

  const onClick = () => {
    replace("HomeActivity", {})
  }

  return (
    <AppScreen>
      <div>
        Init
        <button onClick={onClick}>Go to home page</button>
      </div>
    </AppScreen>
  )
}

export default InitActivity
