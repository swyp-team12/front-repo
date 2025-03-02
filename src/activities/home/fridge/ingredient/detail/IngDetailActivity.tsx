import { ActivityComponentType } from "@stackflow/react"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import styled from "styled-components"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import useIngredientDetail from "@src/hooks/useIngredientDetail"
import {
  formatDateYYYYMMDD,
  formatISODate,
  translateCategory,
} from "@src/utils/commonUtils"
import { useFlow } from "@src/utils/StackFlowRegistry"
import useDeleteIngredient from "@src/hooks/useDeleteIngredient"

interface IngDetailActivityProps {
  ingId: number
}

const IngDetailActivity: ActivityComponentType<IngDetailActivityProps> = ({
  params,
}) => {
  const { ingId } = params
  const { ingredientDetail } = useIngredientDetail(ingId)
  const { push } = useFlow()
  const { mutate } = useDeleteIngredient()

  const handleDelete = () => {
    if (!ingredientDetail) return
    mutate(ingId)
  }

  const handleModify = () => {
    if (!ingredientDetail) return
    push("IngModifyActivity", {
      ingId,
    })
  }

  if (!ingredientDetail) {
    return (
      <TitleHeader title="재료 상세">
        <VStack p="20px">
          <Typography variant="body-b">로딩 중...</Typography>
        </VStack>
      </TitleHeader>
    )
  }

  return (
    <TitleHeader title="재료 상세">
      <VStack flexGrow={1}>
        <VStack gap={14} width="100%" height="30vh" bg="gray-100">
          <></>
        </VStack>
        <VStack p="20px" gap={14}>
          <VStack gap={2}>
            <Typography variant="body-r" color="primary">
              {translateCategory(ingredientDetail.category)}
            </Typography>
            <Typography variant="head-b" color="gray-900">
              {ingredientDetail.name}
            </Typography>
          </VStack>
          <VStack gap={8}>
            <HStack alignItems="center" justifyContent="space-between">
              <Typography variant="body-r" color="gray-700">
                최초 재료 등록 날짜
              </Typography>
              <Typography variant="body-b" color="gray-700">
                {formatISODate(ingredientDetail.createdAt)}
              </Typography>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Typography variant="body-r" color="gray-700">
                가장 빠른 소비기한
              </Typography>
              <Typography variant="body-b" color="red">
                {formatDateYYYYMMDD(ingredientDetail.expiryDate)}
              </Typography>
            </HStack>
          </VStack>
        </VStack>
        <Divider />
        <VStack p="20px" gap={14}>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body-r" color="gray-700">
              제품 분류
            </Typography>
            <Typography variant="body-b" color="gray-700">
              {ingredientDetail.storageType}
            </Typography>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body-r" color="gray-700">
              제품 개수
            </Typography>
            <Typography variant="body-b" color="gray-700">
              {ingredientDetail.ingNum}개
            </Typography>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography variant="body-r" color="gray-700">
              제품 용량
            </Typography>
            <Typography variant="body-b" color="gray-700">
              {ingredientDetail.quantity}
            </Typography>
          </HStack>

          <VStack gap={8}>
            <Typography variant="body-r" color="gray-700">
              메모
            </Typography>
            <MemoContainer>
              <VStack p="12px">
                <Typography variant="body-r" color="gray-700">
                  {ingredientDetail.userMemo || "메모가 없습니다."}
                </Typography>
              </VStack>
            </MemoContainer>
          </VStack>
        </VStack>
        <BottomButtonField>
          <HStack gap={12} pr={20} pl={20}>
            <Button
              size="lg"
              variant="secondary"
              label="재료 삭제하기"
              onClick={handleDelete}
            />
            <Button
              size="lg"
              variant="primary"
              label="정보 수정하기"
              onClick={handleModify}
            />
          </HStack>
        </BottomButtonField>
      </VStack>
    </TitleHeader>
  )
}

const Divider = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ededed;
  margin: 22px 0;
`

const MemoContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #f8f8f8;
  border-radius: 8px;
  border: 1px solid #ededed;
`

export default IngDetailActivity
