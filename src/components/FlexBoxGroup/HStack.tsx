
import { HStackContainer } from "./styled"
import { FlexBoxProps } from "./FlexBox"
import { SpacesType } from "@src/styles/commonTheme"

interface HStackProps extends FlexBoxProps {
  gap?: SpacesType
}

const HStack = ({ children, gap = 0, ...props }: HStackProps) => {
  return (
    <HStackContainer $gap={gap} {...props}>
      {children}
    </HStackContainer>
  )
}

export default HStack
