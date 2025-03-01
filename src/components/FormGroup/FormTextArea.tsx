import React, { useState } from "react"
import styled from "styled-components"
import HStack from "../FlexBoxGroup/HStack"
import VStack from "../FlexBoxGroup/VStack"
import Typography from "../Typography/Typograpy"

interface FormTextAreaProps {
  icon?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  height?: string
}

const TextAreaContainer = styled.div`
  width: 100%;
  border: 1px solid #c5c5c5;
  border-radius: 12px;
`

const ContentWrapper = styled(VStack)`
  padding: 12px;
  height: 100%;
`

const StyledTextArea = styled.textarea<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "120px"};
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: #727272;
  font-weight: 600;
  resize: none;

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
  top: 0;
  pointer-events: none;
  width: 100%;
`

const TextAreaWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  margin-top: 8px;
`

const FormTextArea = ({
  icon,
  placeholder,
  value,
  onChange,
  label,
  height,
}: FormTextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => {
    if (!value) setIsFocused(false)
  }

  const showPlaceholder = !isFocused && !value

  return (
    <TextAreaContainer>
      <ContentWrapper>
        <HStack gap={10} alignItems="center">
          {icon}
          {label && (
            <Typography variant="body-m" color="gray-500">
              {label}
            </Typography>
          )}
        </HStack>
        <TextAreaWrapper>
          <StyledTextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            height={height}
          />
          {showPlaceholder && placeholder && (
            <PlaceholderText>
              <Typography variant="body-m" color="gray-500">
                {placeholder}
              </Typography>
            </PlaceholderText>
          )}
        </TextAreaWrapper>
      </ContentWrapper>
    </TextAreaContainer>
  )
}

export default FormTextArea
