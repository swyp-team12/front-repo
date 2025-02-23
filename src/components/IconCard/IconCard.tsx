import { IconCardContainer } from "./styled"

interface IconCardProps {
  children: React.ReactNode
  onClick?: () => void
  selected?: boolean
}

const IconCard = ({ children, onClick, selected }: IconCardProps) => {
  return (
    <IconCardContainer onClick={onClick} selected={selected}>
      {children}
    </IconCardContainer>
  )
}

export default IconCard
