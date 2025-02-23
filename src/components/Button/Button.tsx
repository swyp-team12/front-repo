import { ButtonContainer, StyledTypography } from "./styled"

interface ButtonProps {
  size: "lg" | "sm" | "xs"
  variant: "primary" | "secondary" | "kakao"
  label: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  size,
  variant,
  label,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonContainer
      $size={size}
      $variants={variant}
      $disabled={disabled}
      onClick={onClick}
    >
      <StyledTypography
        variant={size === "lg" ? "body-b" : "label-b"}
        $size={size}
        $variants={variant}
        $disabled={disabled}
      >
        {label}
      </StyledTypography>
    </ButtonContainer>
  )
}

export default Button
