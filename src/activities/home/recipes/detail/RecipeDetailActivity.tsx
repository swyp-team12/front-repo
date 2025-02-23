import { ActivityComponentType } from "@stackflow/react"

import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"

import HStack from "@src/components/FlexBoxGroup/HStack"
import Svg from "@src/components/Svg/Svg"

import { mockRecipes } from "@src/mocks/mockApiData"
import NoneHeader from "@src/components/HeaderGroup/NoneHeader"
import IngredientTag from "@src/components/IngredientTag/IngredientTag"
import styled from "styled-components"
import Button from "@src/components/Button/Button"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import { useState } from "react"
import Modal from "@src/components/ModalGroup/Modal"
const Divider = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ededed;
  margin: 20px 0px;
`

interface RecipeDetailActivityProps {
  recipesId: number
}

const RecipeDetailActivity: ActivityComponentType<
  RecipeDetailActivityProps
> = ({ params }) => {
  const { recipesId } = params
  const recipe =
    mockRecipes.find((v) => v.recipesId === recipesId) || mockRecipes[0]

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <NoneHeader>
      <VStack pl={20} pr={20} gap={20}>
        <HStack justifyContent="space-between" mt={20}>
          <Typography variant="body-b">{recipe.recipesName}</Typography>
          {recipe.isScrap === "0" ? (
            <Svg
              src="/icon/icon_scrap_empty.svg"
              width={24}
              height={24}
              alt="스크랩"
            />
          ) : (
            <Svg
              src="/icon/icon_scrap_fill.svg"
              width={24}
              height={24}
              alt="스크랩"
            />
          )}
        </HStack>

        <VStack gap={16}>
          <Typography variant="label-b">재료</Typography>
          <HStack gap={8}>
            {recipe.requiredIngredients.map((v) => (
              <IngredientTag label={v} />
            ))}
          </HStack>
        </VStack>
      </VStack>

      <Divider />

      <VStack pl={20} pr={20} gap={20}>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 1
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 2
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 3
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
        <VStack gap={12}>
          <Typography variant="body-b" color="primary">
            Step 4
          </Typography>
          <Typography variant="label-b">
            냉장고에 있는 재료를 꺼내 손질합니다.
          </Typography>
        </VStack>
      </VStack>

      <BottomButtonField>
        <Button
          variant="primary"
          size="lg"
          label="조리 시작"
          onClick={() => {
            setIsModalOpen(true)
          }}
        />
      </BottomButtonField>
      <Modal
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
            <Button variant="secondary" size="sm" label="취소" />
            <Button variant="primary" size="sm" label="확인" />
          </HStack>
        </VStack>
      </Modal>
    </NoneHeader>
  )
}

export default RecipeDetailActivity
