import { IconCardContainer } from "./styled"

interface IconCardProps {
  children: React.ReactNode
}

const IconCard = ({ children }: IconCardProps) => {
  return <IconCardContainer>{children}</IconCardContainer>
}

export default IconCard
