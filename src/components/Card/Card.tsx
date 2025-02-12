import { CardContainer } from "./styled";

interface CardProps {
    children: React.ReactNode | React.ReactNode[]
}

const Card = ({ children }: CardProps) => {
    return <CardContainer>{children}</CardContainer>
}

export default Card;