import { FixedBottomContainer } from "./styled"
import Button from "../Button/Button"
import VStack from "../FlexBoxGroup/VStack"

interface BottomButtonFieldProps {
  children: React.ReactNode | React.ReactNode[]
}

const BottomButtonField = ({ children }: BottomButtonFieldProps) => {
  return (
    <FixedBottomContainer>
      <VStack pt={32} pb={32}>
        {children}
      </VStack>
    </FixedBottomContainer>
  )
}

export default BottomButtonField
