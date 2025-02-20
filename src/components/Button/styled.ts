import styled, { css } from "styled-components"
import Typography from "../Typography/Typograpy"

interface ButtonContainerProps {
  $size: "lg" | "sm" | "xs"
  $variants: "primary" | "secondary"
  $disabled: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${({ $size }) => ($size === "xs" ? "52px" : "100%")};
  border: none;
  border-radius: ${({ $size }) => ($size === "xs" ? "14px" : "8px")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  padding: ${({ $size }) =>
    $size === "lg"
      ? "16px"
      : $size === "sm"
      ? "14px"
      : $size === "xs"
      ? "0px 12px"
      : "16px"};
  ${({ $variants, $disabled, theme }) => {
    if ($disabled) {
      return css`
        background-color: ${theme.colors["gray-300"]};
      `
    }

    return $variants === "primary"
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors["gray-100"]};
        `
  }}
`

export const StyledTypography = styled(Typography).attrs<ButtonContainerProps>(
  (props) => ({
    color: props.$disabled
      ? "gray-600"
      : props.$variants === "secondary"
      ? "black"
      : "white",
    variant: props.$size === "lg" ? "body-b" : "label-b",
  })
)<ButtonContainerProps>``
