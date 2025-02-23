import { ColorsType, SpacesType } from "@src/styles/commonTheme"
import { FlexBoxContainer } from "./styled"

export interface FlexBoxProps {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  pt?: SpacesType
  pr?: SpacesType
  pb?: SpacesType
  pl?: SpacesType
  m?: string
  mt?: SpacesType
  mr?: SpacesType
  mb?: SpacesType
  ml?: SpacesType
  bg?: ColorsType
  border?: string
  borderRadius?: SpacesType
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  overflowX?: string
  overflowY?: string
  boxShadow?: string
  onClick?: () => void
}

const FlexBox = ({
  children,
  justifyContent,
  alignItems,
  ...props
}: FlexBoxProps) => {
  return (
    <FlexBoxContainer
      {...props}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
    >
      {children}
    </FlexBoxContainer>
  )
}

export default FlexBox
