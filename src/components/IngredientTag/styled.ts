import styled from "styled-components"
import HStack from "../FlexBoxGroup/HStack"

export const TagContainer = styled(HStack)`
  padding: 0px 8px;
  background-color: ${({ theme }) => theme.colors.quaternary};
  border-radius: 14px;
`
