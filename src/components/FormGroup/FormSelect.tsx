import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Typography from "../Typography/Typograpy"
import Svg from "../Svg/Svg"
import HStack from "../FlexBoxGroup/HStack"
import VStack from "../FlexBoxGroup/VStack"

interface FormSelectProps {
  icon: React.ReactNode
  title: string
  options: { value: string; label: string }[]
  onChange?: (value: string) => void
  defaultValue?: string
  hideTitle?: boolean // 타이틀을 숨기고 선택값만 보여줄지 여부
}

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid #c5c5c5;
  cursor: pointer;
`

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  overflow-y: auto;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`

const OptionItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`

const FormSelect = ({
  icon,
  title,
  options,
  onChange,
  defaultValue,
  hideTitle = false,
}: FormSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue || "")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (value: string) => {
    setSelectedValue(value)
    if (onChange) {
      onChange(value)
    }
    setIsOpen(false)
  }

  const getSelectedLabel = () => {
    const selected = options.find((option) => option.value === selectedValue)
    return selected ? selected.label : ""
  }

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <SelectContainer ref={dropdownRef}>
      <SelectBox onClick={handleToggleDropdown}>
        <HStack gap={10} alignItems="center">
          {icon}
          {(!hideTitle || !selectedValue) && (
            <Typography variant="body-m" color="gray-500">
              {title}
            </Typography>
          )}
          {hideTitle && selectedValue && (
            <Typography variant="body-b" color="gray-700">
              {getSelectedLabel()}
            </Typography>
          )}
        </HStack>
        <HStack gap={8} alignItems="center">
          {selectedValue && !hideTitle && (
            <Typography variant="body-b" color="gray-700">
              {getSelectedLabel()}
            </Typography>
          )}
          <Svg
            src="/icon/icon_vector.svg"
            width={12}
            height={12}
            alt="화살표"
          />
        </HStack>
      </SelectBox>

      <DropdownContainer $isOpen={isOpen}>
        <VStack>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleSelectOption(option.value)}
            >
              <Typography variant="body-m" color="gray-700">
                {option.label}
              </Typography>
            </OptionItem>
          ))}
        </VStack>
      </DropdownContainer>
    </SelectContainer>
  )
}

export default FormSelect
