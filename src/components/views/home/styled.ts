import styled from "styled-components"
import VStack from "@src/components/FlexBoxGroup/VStack"

export const MenuButton = styled(VStack)`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 33.33%;
`

export const Divider = styled.div`
  width: 1px;
  background-color: #c5c5c5;
  margin: 0 12px;
`
