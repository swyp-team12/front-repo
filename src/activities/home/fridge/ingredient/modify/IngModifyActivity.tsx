import { ActivityComponentType } from "@stackflow/react"

import TitleHeader from "@src/components/HeaderGroup/TitleHeader"

interface IngModifyActivityProps {
  ingId: number
}

const IngModifyActivity: ActivityComponentType<IngModifyActivityProps> = ({
  params,
}) => {
  const { ingId } = params
  return (
    <TitleHeader title="재료 정보 수정">
      <>{ingId}</>
      <>재료 정보 수정이 들어올 화면입니다.</>
    </TitleHeader>
  )
}

export default IngModifyActivity
