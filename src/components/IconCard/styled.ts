import styled from "styled-components"

export const IconCardContainers = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3.15px 4.2px 14.69px 0px #0000001f;
`

export const IconCardContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #eeeeee;
`
