import axios from "axios"

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI

export const getKakaoLogin = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
  window.location.href = kakaoURL
}

export const getProfile = async () => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
  return response.data
}

export const updateProfile = async (nickname: string) => {
  const response = await axios({
    method: "PATCH",
    url: `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: { nickname },
  })
  return response.data
}
