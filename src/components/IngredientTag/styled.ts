import styled from "styled-components"
import HStack from "../FlexBoxGroup/HStack"

export const TagContainer = styled(HStack)`
  gap: 4px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.quaternary};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`
