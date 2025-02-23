import styled from "styled-components"
import HStack from "../FlexBoxGroup/HStack"

export const TagContainer = styled(HStack)`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.quaternary};
  border-radius: 14px;
  gap: 4px;
`

export const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 0;
`
