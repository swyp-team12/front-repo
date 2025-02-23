import HStack from "../FlexBoxGroup/HStack"
import Typography from "../Typography/Typograpy"
import Svg from "../Svg/Svg"
import { DeleteButton, TagContainer } from "./styled"
import VStack from "../FlexBoxGroup/VStack"

interface SearchTagProps {
  label: string
  onDelete?: () => void
}

const SearchTag = ({ label, onDelete }: SearchTagProps) => {
  return (
    <TagContainer alignItems="center">
      <Typography variant="label-b" color="primary">
        {label}
      </Typography>
      <VStack onClick={onDelete}>
        <Svg src="/icon/icon_close.svg" width={14} height={14} alt="삭제" />
      </VStack>
    </TagContainer>
  )
}

export default SearchTag
