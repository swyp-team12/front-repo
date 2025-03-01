"use client"

import { useEffect } from "react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import styled from "styled-components"
import Button from "@src/components/Button/Button"
import { getKakaoLogin } from "@src/apis/commonApis"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"

const Container = styled(VStack)`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const Logo = styled(Svg)`
  box-shadow: 2px 2px 24.2px 6px #0000001a;
`

function isTokenValid(token: string): boolean {
  try {
    const decodedToken = jwtDecode<{ exp: number }>(token)
    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp > currentTime
  } catch {
    return false
  }
}

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    console.log("document.cookie", document.cookie)

    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1]

    if (accessToken && isTokenValid(accessToken)) {
      router.replace("/home")
    }
  }, [])

  return (
    <Container>
      <VStack gap={24} alignItems="center">
        <VStack gap={0} alignItems="center">
          <Logo
            src="/icon/icon_logo.svg"
            width={120}
            height={120}
            alt="메인 로고"
          />
          <Typography variant="body-m" color="gray-500">
            우리집 냉장고를 부탁해
          </Typography>
          <Svg
            src="/icon/icon_yomi_main.svg"
            width={60}
            height={40}
            alt="요미"
          />
        </VStack>
      </VStack>

      <VStack mt={56} width="100%">
        <Button
          variant="kakao"
          size="lg"
          label="카카오톡으로 시작하기"
          onClick={() => getKakaoLogin()}
        />
      </VStack>
    </Container>
  )
}
