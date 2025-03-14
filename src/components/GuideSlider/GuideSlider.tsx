import { useState, useEffect } from "react"
import styled from "styled-components"
import VStack from "@src/components/FlexBoxGroup/VStack"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import Button from "@src/components/Button/Button"

interface GuideSliderProps {
  onComplete: () => void
}

const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`

const SlideContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

const SlideIndicator = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors["gray-300"]};
  margin: 0 4px;
`

const SlideImage = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const ButtonContainer = styled.div`
  padding: 20px;
  width: 100%;
`

const slides = [
  {
    title: "냉장고 관리를 시작해보세요",
    description: "냉장고에 있는 재료를 등록하고 소비기한을 관리해보세요.",
    image: "/img/guide_fridge.svg",
  },
  {
    title: "레시피 추천 받기",
    description: "냉장고에 있는 재료로 만들 수 있는 레시피를 추천받아보세요.",
    image: "/img/guide_recipe.svg",
  },
  {
    title: "스크랩 기능",
    description: "마음에 드는 레시피를 스크랩하고 언제든지 확인할 수 있어요.",
    image: "/img/guide_scrap.svg",
  },
]

const GuideSlider = ({ onComplete }: GuideSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  return (
    <SliderContainer>
      <SlideContent>
        <SlideImage>
          <Svg
            src={slides[currentSlide].image}
            width={240}
            height={240}
            alt={`가이드 이미지 ${currentSlide + 1}`}
          />
        </SlideImage>

        <VStack gap={16} alignItems="center">
          <Typography variant="head-b" color="primary" textAlign="center">
            {slides[currentSlide].title}
          </Typography>

          <Typography variant="body-m" color="gray-700" textAlign="center">
            {slides[currentSlide].description}
          </Typography>
        </VStack>
      </SlideContent>

      <VStack gap={24} alignItems="center" pb={32}>
        <HStack gap={8}>
          {slides.map((_, index) => (
            <SlideIndicator key={index} active={index === currentSlide} />
          ))}
        </HStack>

        <ButtonContainer>
          <HStack gap={12} justifyContent="space-between">
            <Button
              variant="secondary"
              size="lg"
              label="건너뛰기"
              onClick={handleSkip}
            />
            <Button
              variant="primary"
              size="lg"
              label={currentSlide === slides.length - 1 ? "시작하기" : "다음"}
              onClick={handleNext}
            />
          </HStack>
        </ButtonContainer>
      </VStack>
    </SliderContainer>
  )
}

export default GuideSlider
