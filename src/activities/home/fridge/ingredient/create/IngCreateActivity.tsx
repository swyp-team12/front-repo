import { ActivityComponentType } from "@stackflow/react"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import HStack from "@src/components/FlexBoxGroup/HStack"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import FormInput from "@src/components/FormGroup/FormInput"
import FormSelect from "@src/components/FormGroup/FormSelect"
import { useState, useRef, useEffect, useMemo } from "react"
import FormTextArea from "@src/components/FormGroup/FormTextArea"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import { useFlow } from "@src/utils/StackFlowRegistry"
import FormCalendar from "@src/components/FormGroup/FormCalendar"
import useCreateIngredient from "@src/hooks/useCreateIngredient"

interface IngCreateActivityProps {}

const ingNumOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
]

const categoryOptions = [
  { value: "egg", label: "계란" },
  { value: "meat", label: "육류" },
  { value: "fish", label: "어류" },
  { value: "milk", label: "유제품" },
  { value: "bakery", label: "베이커리" },
  { value: "vege", label: "채소" },
  { value: "fruit", label: "과일" },
  { value: "fastfood", label: "간편식품" },
  { value: "grain", label: "곡물" },
  { value: "salt", label: "조미료" },
  { value: "nuts", label: "견과류" },
  { value: "cold", label: "냉동식품" },
]

const storageTypeOptions = [
  { value: "냉장", label: "냉장" },
  { value: "냉동", label: "냉동" },
]

const IngCreateActivity: ActivityComponentType<IngCreateActivityProps> = () => {
  const { mutate, isSuccess } = useCreateIngredient()
  const { pop } = useFlow()
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [ingNum, setIngNum] = useState(0)
  const [expiryDate, setExpiryDate] = useState("")
  const [storageType, setStorageType] = useState("")
  const [category, setCategory] = useState("")
  const [userMemo, setUserMemo] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [imagePreview, setImagePreview] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const disabled = useMemo(() => {
    return (
      name === "" ||
      expiryDate === "" ||
      storageType === "" ||
      category === "" ||
      ingNum === 0
    )
  }, [name, expiryDate, storageType, category, ingNum])

  const init = () => {
    setName("")
    setQuantity("")
    setIngNum(0)
    setExpiryDate("")
    setStorageType("")
    setCategory("")
    setUserMemo("")
    setImages([])
    setImagePreview([])
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            const base64String = e.target.result as string
            setImagePreview([base64String])
            setImages([base64String])
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
    setImagePreview(imagePreview.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const submitData = {
      name,
      quantity,
      ingNum,
      expiryDate,
      storageType,
      category,
      userMemo,
      ingImage: images.length > 0 ? images[0] : '',
    }

    console.log(images)

    mutate(submitData)
  }

  useEffect(() => {
    if (isSuccess) {
      pop()
    }
  }, [isSuccess])

  useEffect(() => {
    init()
  }, [])

  return (
    <TitleHeader title="재료 정보 생성">
      <VStack pt={20} pr={20} pl={20} flexGrow={1}>
        <VStack gap={20}>
          <Typography variant="head-b">제품을 등록해볼까요?</Typography>
          <VStack
            gap={4}
            alignItems="center"
            justifyContent="center"
            width="100px"
            height="100px"
            borderRadius={8}
            boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.08)"
            onClick={handleImageClick}
            // style={{ cursor: "pointer" }}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Svg
              width={20}
              height={20}
              src="/icon/icon_camera.svg"
              alt="camera icon"
            />
            <Typography color="gray-600" variant="text-m">
              {images.length}/1(선택)
            </Typography>
          </VStack>

          {imagePreview.length > 0 && (
            <HStack gap={8} mt={10}>
              {imagePreview.map((img, index) => (
                <div
                  key={index}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={img}
                    alt={`업로드 이미지 ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveImage(index)
                    }}
                  >
                    <span style={{ color: "white", fontSize: "12px" }}>×</span>
                  </div>
                </div>
              ))}
            </HStack>
          )}
        </VStack>
        <VStack mt={38} gap={16}>
          <FormInput
            icon={
              <Svg width={16} height={16} src="/icon/icon_pen.svg" alt="pen" />
            }
            placeholder="제품명을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <FormSelect
            icon={
              <Svg
                width={16}
                height={16}
                src="/icon/icon_number.svg"
                alt="ingNum"
              />
            }
            title="제품 개수"
            options={ingNumOptions}
            onChange={(value) => setIngNum(Number(value))}
          />
          <FormInput
            icon={
              <Svg
                width={16}
                height={16}
                src="/icon/icon_amount.svg"
                alt="amount"
              />
            }
            placeholder="제품 용량"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <FormCalendar
            icon={
              <Svg
                width={16}
                height={16}
                src="/icon/icon_calender.svg"
                alt="calender"
              />
            }
            value={expiryDate}
            onChange={(date) => setExpiryDate(date)}
            placeholder="소비기한"
          />
          <HStack gap={20} justifyContent="space-between">
            <FormSelect
              icon={
                <Svg
                  width={16}
                  height={16}
                  src="/icon/icon_folder.svg"
                  alt="folder"
                />
              }
              title="저장 위치"
              options={storageTypeOptions}
              onChange={(value) => setStorageType(value)}
              hideTitle
            />
            <FormSelect
              icon={
                <Svg
                  width={16}
                  height={16}
                  src="/icon/icon_tag.svg"
                  alt="tag"
                />
              }
              title="카테고리"
              options={categoryOptions}
              onChange={(value) => setCategory(value)}
              hideTitle
            />
          </HStack>
          <FormTextArea
            placeholder="간단한 메모"
            value={userMemo}
            onChange={(e) => setUserMemo(e.target.value)}
          />
        </VStack>
      </VStack>
      <BottomButtonField>
        <VStack pr={20} pl={20}>
          <Button
            size="lg"
            variant="primary"
            disabled={disabled}
            onClick={handleSubmit}
            label="저장하기"
          />
        </VStack>
      </BottomButtonField>
    </TitleHeader>
  )
}

export default IngCreateActivity
