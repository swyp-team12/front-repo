import styled from "styled-components"

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 4px solid ${({ theme }) => theme.colors["gray-200"]};
`

export const TabButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  background: none;
  border: none;
  padding: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors["gray-700"]};
  position: relative;
  transition: color 0.3s;

  &:focus {
    outline: none;
  }
`

export const ActiveIndicator = styled.div<{ $activeIndex: number }>`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s ease-in-out;
  transform: translateX(${({ $activeIndex }) => $activeIndex * 100}%);
`
