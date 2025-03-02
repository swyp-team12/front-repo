import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import TitleHeader from "@src/components/HeaderGroup/TitleHeader"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Button from "@src/components/Button/Button"
import useGetUserInfo from "@src/hooks/useGetUserInfo"

import { useState } from "react"
import Modal from "@src/components/ModalGroup/Modal"

export const logout = () => {
  // 쿠키에서 토큰 삭제
  document.cookie =
    "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"

  // 로컬 스토리지에 저장된 사용자 관련 데이터가 있다면 함께 삭제
  localStorage.clear()

  // 루트 페이지로 리다이렉트
  window.location.href = "/"
}

const MyInfoActivity: ActivityComponentType = () => {
  const { userInfo } = useGetUserInfo()
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleLogout = () => {
    logout()
  }

  if (!userInfo) {
    return <></>
  }

  return (
    <TitleHeader title="내 정보">
      <VStack p="20px" gap={14} bg="lightGray" flexGrow={1}>
        <VStack gap={8}>
          <Typography variant="body-b">이름</Typography>
          <HStack
            p="10px"
            bg="white"
            border="1px solid #E5E5E5"
            borderRadius={4}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body-m">{userInfo.nickname}</Typography>
          </HStack>
          {/* <Typography variant="label-m">
            이름은 14일 안에 한 번만 변경할 수 있어요.
          </Typography> */}
        </VStack>
        <VStack gap={8}>
          <Typography variant="body-b">계정정보</Typography>
          <Button
            variant="secondary"
            size="sm"
            label="카카오톡 로그인"
            disabled
          />
        </VStack>
        <VStack gap={18}>
          <Button
            variant="secondary"
            size="sm"
            label="로그아웃"
            onClick={() => setIsLogoutModalOpen(true)}
          />
          {/* <Button variant="secondary" size="sm" label="계정삭제" /> */}
        </VStack>
      </VStack>

      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="로그아웃"
      >
        <VStack gap={20} width="100%">
          <Typography variant="body-r" textAlign="center">
            정말 로그아웃 하시겠습니까?
          </Typography>
          <HStack gap={12}>
            <Button
              variant="secondary"
              size="sm"
              label="취소"
              onClick={() => setIsLogoutModalOpen(false)}
            />
            <Button
              variant="primary"
              size="sm"
              label="로그아웃"
              onClick={handleLogout}
            />
          </HStack>
        </VStack>
      </Modal>
    </TitleHeader>
  )
}

export default MyInfoActivity
