import React, { useState } from "react"
import styled from "styled-components"
import HStack from "../FlexBoxGroup/HStack"
import Typography from "../Typography/Typograpy"

interface FormInputProps {
  icon: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  label?: string
}

const InputContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #c5c5c5;
`

const ContentWrapper = styled(HStack)`
  padding: 10px 15px;
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: #727272;
  font-weight: 600;

  &::placeholder {
    color: transparent;
  }

  &:focus + div {
    display: none;
  }
`

const PlaceholderText = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`

const FormInput = ({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
  label,
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    if (!value) setIsFocused(false)
  }

  const showPlaceholder = !isFocused && !value

  return (
    <InputContainer>
      <ContentWrapper alignItems="center" gap={10}>
        {icon}
        {label && (
          <Typography variant="body-m" color="gray-500">
            {label}
          </Typography>
        )}
        <InputWrapper>
          <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showPlaceholder && placeholder && (
            <PlaceholderText>
              <Typography variant="body-m" color="gray-500">
                {placeholder}
              </Typography>
            </PlaceholderText>
          )}
        </InputWrapper>
      </ContentWrapper>
    </InputContainer>
  )
}

export default FormInput
