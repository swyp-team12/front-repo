import styled from "styled-components"

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors["gray-200"]};
  border: none;
  border-radius: ${({ theme }) => theme.spaces[12]};
  padding-left: 36px;
  font-size: ${({ theme }) => theme.variants["label-m"].fontSize};
  font-weight: ${({ theme }) => theme.variants["label-m"].fontWeight};

  &::placeholder {
    color: ${({ theme }) => theme.colors["gray-600"]};
  }

  &:focus {
    outline: none;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`
