import HStack from "../FlexBoxGroup/HStack"
import VStack from "../FlexBoxGroup/VStack"
import Typography from "../Typography/Typograpy"

interface TitleWithMoreProps {
  title: string
  onClickMore: () => void
}

const TitleWithMore = ({ title, onClickMore }: TitleWithMoreProps) => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Typography variant="body-b" color="primary">
        {title}
      </Typography>
      <VStack onClick={onClickMore}>
        <Typography variant="label-b" color="gray-400">
          {`더보기 >`}
        </Typography>
      </VStack>
    </HStack>
  )
}

export default TitleWithMore
