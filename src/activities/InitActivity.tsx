import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import { useFlow } from "@src/utils/StackFlowRegistry"
import Card from "@src/components/Card/Card"
import { VStack } from "@src/components/FlexBoxGroup"

const InitActivity: ActivityComponentType = () => {
  const { replace } = useFlow()

  const onClick = () => {
    replace("HomeActivity", {})
  }

  return (
    <AppScreen>

      {/* Init */}
      {/* <button onClick={onClick}>Go to home page</button> */}
      <Card>
        <VStack bg="primary">
          <VStack bg="gray">
            <>dddd</>
          </VStack>
          <VStack bg="info">
            <>ddd</>
          </VStack>
        </VStack>
      </Card>

    </AppScreen>
  )
}

export default InitActivity
