import { CardContainer } from "./styled"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  onClick?: () => void
}

const Card = ({ children, onClick }: CardProps) => {
  return <CardContainer onClick={onClick}>{children}</CardContainer>
}

export default Card
