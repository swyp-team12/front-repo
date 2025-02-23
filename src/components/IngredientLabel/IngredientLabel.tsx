import { LabelContainer } from "./styled"
import Typography from "../Typography/Typograpy"

interface IngredientLabelProps {
  label: string
}

const IngredientLabel = ({ label }: IngredientLabelProps) => {
  return (
    <LabelContainer alignItems="center">
      <Typography variant="label-b" color="primary">
        {label}
      </Typography>
    </LabelContainer>
  )
}

export default IngredientLabel
