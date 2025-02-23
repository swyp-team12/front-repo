import styled from "styled-components"
import VStack from "../FlexBoxGroup/VStack"
import HStack from "../FlexBoxGroup/HStack"
import Typography from "../Typography/Typograpy"
import Svg from "../Svg/Svg"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface FilterBottomSheetProps {
  isOpen: boolean
  onClose: () => void
}

const Overlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 399px;
  height: 100%;
  background: rgba(146, 146, 146, 0.4);
  z-index: 1000;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
`

const Sheet = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%)
    translateY(${({ $isVisible }) => ($isVisible ? "0" : "100%")});
  width: 399px;
  height: 80vh;
  max-height: 80%;
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  z-index: 1001;
  transition: transform 0.3s ease;
  box-sizing: border-box;
`

const Header = styled(HStack)`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const FilterBottomSheet = ({ isOpen, onClose }: FilterBottomSheetProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, mounted])

  if (!mounted) return null

  const portalContainer = document.getElementById("portal-container")
  if (!portalContainer) return null

  return createPortal(
    <>
      <Overlay $isVisible={isOpen} onClick={onClose} />
      <Sheet $isVisible={isOpen}>
        <VStack gap={16}>
          <Header>
            <Typography variant="head-b" color="gray-900">
              필터
            </Typography>
            <CloseButton onClick={onClose}>
              <Svg
                src="/icon/icon_common_close.svg"
                width={24}
                height={24}
                alt="닫기"
              />
            </CloseButton>
          </Header>
          {/* 필터 내용은 추후 구현 */}
        </VStack>
      </Sheet>
    </>,
    portalContainer
  )
}

export default FilterBottomSheet
