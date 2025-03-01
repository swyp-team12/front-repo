import { ActivityComponentType } from "@stackflow/react"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import HStack from "@src/components/FlexBoxGroup/HStack"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Svg from "@src/components/Svg/Svg"
import FormInput from "@src/components/FormGroup/FormInput"
import FormSelect from "@src/components/FormGroup/FormSelect"
import { useState, useRef, useMemo, useEffect } from "react"
import FormTextArea from "@src/components/FormGroup/FormTextArea"
import BottomButtonField from "@src/components/BottomButtonField/BottomButtonField"
import Button from "@src/components/Button/Button"
import { useFlow } from "@src/utils/StackFlowRegistry"
import FormCalendar from "@src/components/FormGroup/FormCalendar"
import useModifyIngredient from "@src/hooks/useModifyIngredient"
import useIngredientDetail from "@src/hooks/useIngredientDetail"

interface IngModifyActivityProps {
  ingId: number
}

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

const IngModifyActivity: ActivityComponentType<IngModifyActivityProps> = ({
  params,
}) => {
  const { ingId } = params
  const { ingredientDetail } = useIngredientDetail(ingId)
  const { mutate, isSuccess } = useModifyIngredient()
  const { pop } = useFlow()

  const [name, setName] = useState(ingredientDetail?.name || "")
  const [quantity, setQuantity] = useState(ingredientDetail?.quantity || "")
  const [ingNum, setIngNum] = useState(ingredientDetail?.ingNum || 1)
  const [expiryDate, setExpiryDate] = useState(
    ingredientDetail?.expiryDate || ""
  )
  const [storageType, setStorageType] = useState(
    ingredientDetail?.storageType || ""
  )
  const [category, setCategory] = useState(ingredientDetail?.category || "")
  const [userMemo, setUserMemo] = useState(ingredientDetail?.userMemo || "")
  const [images, setImages] = useState<File[]>([])
  const [imagePreview, setImagePreview] = useState<string[]>(
    ingredientDetail?.ingImage ? [ingredientDetail?.ingImage] : []
  )
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 폼 유효성 검사
  const disabled = useMemo(() => {
    return (
      name === "" ||
      expiryDate === "" ||
      storageType === "" ||
      category === "" ||
      ingNum === 0
    )
  }, [name, expiryDate, storageType, category, ingNum])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      if (images.length + newFiles.length > 1) {
        alert("최대 1개의 이미지만 업로드할 수 있습니다.")
        return
      }

      setImages((prev) => [...prev, ...newFiles])

      newFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setImagePreview((prev) => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
    setImagePreview(imagePreview.filter((_, i) => i !== index))
  }

  const handleCancel = () => {
    pop()
  }

  const handleSubmit = () => {
    const submitData = {
      ingId,
      name,
      quantity,
      ingNum,
      expiryDate,
      storageType,
      category,
      userMemo,
      ingImage: images[0],
    }

    mutate(submitData)
  }

  useEffect(() => {
    if (isSuccess) {
      pop()
    }
  }, [isSuccess])

  return (
    <TitleHeader title="재료 정보 수정">
      <VStack p="20px">
        <VStack gap={16}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload}
          />
          {/* 이미지 업로드 영역 (필요시 주석 해제)
          <VStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="200px"
            border="1px dashed #ccc"
            borderRadius="8px"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          >
            {imagePreview.length === 0 ? (
              <VStack alignItems="center" gap={8}>
                <Svg
                  width={24}
                  height={24}
                  src="/icon/icon_camera.svg"
                  alt="camera"
                />
                <Typography variant="body-r" color="gray-500">
                  이미지를 업로드하세요 (선택사항)
                </Typography>
              </VStack>
            ) : (
              <HStack gap={8} flexWrap="wrap">
                {imagePreview.map((img, index) => (
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      height: "200px",
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
          */}
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
            defaultValue={String(ingNum)}
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
              defaultValue={storageType}
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
              defaultValue={category}
            />
          </HStack>
          <FormTextArea
            placeholder="간단한 메모"
            value={userMemo}
            onChange={(e) => setUserMemo(e.target.value)}
          />
        </VStack>
        <BottomButtonField>
          <HStack gap={12}>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleCancel}
              label="취소"
            />
            <Button
              size="lg"
              variant="primary"
              disabled={disabled}
              onClick={handleSubmit}
              label="저장하기"
            />
          </HStack>
        </BottomButtonField>
      </VStack>
    </TitleHeader>
  )
}

export default IngModifyActivity
