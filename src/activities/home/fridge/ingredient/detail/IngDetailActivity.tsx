import { ActivityComponentType } from "@stackflow/react"

import TitleHeader from "@src/components/HeaderGroup/TitleHeader"

interface IngDetailActivityProps {
  ingId: number
}

const IngDetailActivity: ActivityComponentType<IngDetailActivityProps> = ({
  params,
}) => {
  const { ingId } = params
  return (
    <TitleHeader title="재료 상세">
      <>{ingId}</>
      <>재료 디테일이 들어올 화면입니다.</>
    </TitleHeader>
  )
}

export default IngDetailActivity
