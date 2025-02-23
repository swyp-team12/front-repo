import { TagContainer } from "./styled"
import Typography from "../Typography/Typograpy"

interface IngredientTagProps {
  label: string
}

const IngredientTag = ({ label }: IngredientTagProps) => {
  return (
    <TagContainer alignItems="center">
      <Typography variant="label-b" color="primary">
        {label}
      </Typography>
      <Typography variant="label-r" color="primary">
        1개
      </Typography>
    </TagContainer>
  )
}

export default IngredientTag
