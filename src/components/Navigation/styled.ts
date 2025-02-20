import styled from "styled-components"

export const NavContainer = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 3.15px 4.2px 14.69px 0px #0000001f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  z-index: 1000;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
`

export const NavButton = styled.button<{ $isCenter?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  ${({ $isCenter, theme }) =>
    $isCenter &&
    `
    background-color: ${theme.colors.primary};
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: relative;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  `}
`
