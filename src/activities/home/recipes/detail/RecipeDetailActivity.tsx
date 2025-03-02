import { ActivityComponentType } from "@stackflow/react"

import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"

import HStack from "@src/components/FlexBoxGroup/HStack"
import Svg from "@src/components/Svg/Svg"

import NoneHeader from "@src/components/HeaderGroup/NoneHeader"
import IngredientTag from "@src/components/IngredientTag/IngredientTag"
import styled from "styled-components"
import Button from "@src/components/Button/Button"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import { useState } from "react"
import Modal from "@src/components/ModalGroup/Modal"
import useRecipeDetail from "@src/hooks/useRecipeDetail"
import useScrapRecipe from "@src/hooks/useScrapRecipe"

/**
 * 레시피 텍스트를 단계별 배열로 변환하는 함수
 * @param recipeText 레시피 텍스트 (예: "1. 단계1 2. 단계2 3. 단계3")
 * @returns 단계별 배열 (예: ["단계1", "단계2", "단계3"])
 */
export const formatRecipeSteps = (recipeText: string): string[] => {
  if (!recipeText) return []

  // 숫자와 점으로 시작하는 패턴을 찾아 분리
  const steps = recipeText
    .split(/\d+\.\s*/)
    .filter((step) => step.trim() !== "")

  // 각 단계의 앞뒤 공백 제거
  return steps.map((step) => step.trim())
}

const Divider = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ededed;
  margin: 20px 0px;
`
const IngredientContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`

interface RecipeDetailActivityProps {
  recipesId: number
}

const RecipeDetailActivity: ActivityComponentType<
  RecipeDetailActivityProps
> = ({ params }) => {
  const { recipesId } = params

  const { recipeDetail, isLoading } = useRecipeDetail(recipesId)

  const { mutate } = useScrapRecipe()

  const handleScrap = () => {
    if (!recipeDetail) return
    mutate(recipesId, recipeDetail.isScrap)
  }

  if (!recipeDetail) {
    return <></>
  }
  return (
    <NoneHeader>
      <VStack pl={20} pr={20} gap={20}>
        <HStack justifyContent="space-between" mt={20}>
          <Typography variant="body-b">{recipeDetail.recipesName}</Typography>
          <VStack onClick={handleScrap}>
            {recipeDetail.isScrap ? (
              <Svg
                src="/icon/icon_scrap_fill.svg"
                width={24}
                height={24}
                alt="스크랩"
              />
            ) : (
              <Svg
                src="/icon/icon_scrap_empty_primary.svg"
                width={24}
                height={24}
                alt="스크랩"
              />
            )}
          </VStack>
        </HStack>

        <VStack gap={16}>
          <Typography variant="body-b">재료</Typography>
          <IngredientContainer>
            {recipeDetail.recipeIngredients.map((v, index) => (
              <IngredientTag label={v.recipeIngredientName} key={index} />
            ))}
          </IngredientContainer>
        </VStack>
      </VStack>

      <Divider />

      <VStack pl={20} pr={20} gap={20}>
        {formatRecipeSteps(recipeDetail.recipeContent).map((text, index) => (
          <VStack gap={12} key={index}>
            <Typography variant="body-b" color="primary">
              Step {index + 1}
            </Typography>
            <Typography variant="label-b">{text}</Typography>
          </VStack>
        ))}
      </VStack>

      {/* <BottomButtonField>
        <Button
          variant="primary"
          size="lg"
          label="조리 시작"
          onClick={() => {
            setIsModalOpen(true)
          }}
        />
      </BottomButtonField> */}
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="레시피 사용"
      >
        <VStack gap={20} width="100%">
          <VStack gap={2} alignItems="center">
            <Typography variant="label-m">
              이 레시피를 사용하시겠습니까?
            </Typography>
            <Typography variant="label-m">
              확인 후 에도 전체 레시피 열람이 가능합니다.
            </Typography>
          </VStack>
          <HStack gap={12}>
            <Button
              variant="secondary"
              size="sm"
              label="취소"
              onClick={() => setIsModalOpen(false)}
            />
            <Button variant="primary" size="sm" label="확인" />
          </HStack>
        </VStack>
      </Modal> */}
    </NoneHeader>
  )
}

export default RecipeDetailActivity
