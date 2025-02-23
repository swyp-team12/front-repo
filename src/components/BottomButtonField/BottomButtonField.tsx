import { FixedBottomContainer } from "./styled"
import Button from "../Button/Button"
import VStack from "../FlexBoxGroup/VStack"

interface BottomButtonFieldProps {
  children: React.ReactNode | React.ReactNode[]
}

const BottomButtonField = ({ children }: BottomButtonFieldProps) => {
  return (
    <FixedBottomContainer>
      <VStack pl={20} pr={20} pt={32} pb={32}>
        {children}
      </VStack>
    </FixedBottomContainer>
  )
}

export default BottomButtonField
