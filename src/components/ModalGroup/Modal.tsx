import styled from "styled-components"
import VStack from "../FlexBoxGroup/VStack"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Typography from "../Typography/Typograpy"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
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
  transition: opacity 0.2s ease, visibility 0.2s ease;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div<{ $isVisible: boolean }>`
  width: 340px;
  background: white;
  border-radius: 10px;
  z-index: 1001;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: scale(${({ $isVisible }) => ($isVisible ? 1 : 0.8)});
  transition: opacity 0.2s ease, transform 0.2s ease;
`

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
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
    <Overlay $isVisible={isOpen} onClick={onClose}>
      <ModalContainer $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        <VStack p="20px" alignItems="center">
          {title && (
            <VStack pb={8}>
              <Typography variant="body-b">{title}</Typography>
            </VStack>
          )}
          {children}
        </VStack>
      </ModalContainer>
    </Overlay>,
    portalContainer
  )
}

export default Modal
