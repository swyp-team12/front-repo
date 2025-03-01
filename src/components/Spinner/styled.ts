import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors["gray-100"]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpinnerContainer = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid ${({ theme }) => theme.colors["gray-300"]};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
