/**
 * 긴 텍스트를 지정된 길이로 자르고 말줄임표를 추가하는 함수
 * @param text 원본 텍스트
 * @param maxLength 최대 길이 (기본값: 20)
 * @returns 잘린 텍스트 또는 원본 텍스트
 */
export const truncateText = (text: string, maxLength: number = 20): string => {
  if (!text) return '';
  
  return text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text;
}

export const calculateDday = (expireDate: string): string => {
  if (!expireDate || expireDate.length !== 8) {
    return "날짜 오류"
  }

  // YYYYMMDD 형식의 문자열을 Date 객체로 변환
  const year = parseInt(expireDate.substring(0, 4))
  const month = parseInt(expireDate.substring(4, 6)) - 1 // 월은 0부터 시작
  const day = parseInt(expireDate.substring(6, 8))

  const expire = new Date(year, month, day)
  const today = new Date()

  // 시간을 00:00:00으로 설정하여 날짜만 비교
  today.setHours(0, 0, 0, 0)
  expire.setHours(0, 0, 0, 0)

  const diffTime = expire.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays > 0 ? `D-${diffDays}` : `D+${Math.abs(diffDays)}`
}

export const isExpiringWithinWeek = (dateString: string): boolean => {
  if (!dateString || dateString.length !== 8) {
    return false
  }

  // YYYYMMDD 형식의 문자열을 Date 객체로 변환
  const year = parseInt(dateString.substring(0, 4))
  const month = parseInt(dateString.substring(4, 6)) - 1 // 월은 0부터 시작
  const day = parseInt(dateString.substring(6, 8))

  const expiryDate = new Date(year, month, day)
  const today = new Date()

  // 시간 정보 제거하여 날짜만 비교
  today.setHours(0, 0, 0, 0)
  expiryDate.setHours(0, 0, 0, 0)

  // 남은 일수 계산
  const diffTime = expiryDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  // 소비기한이 지났거나 7일 이내로 남았으면 true
  return diffDays <= 7
}

/**
 * 영어 카테고리명을 한글로 변환하는 함수
 * @param category 영어 카테고리명
 * @returns 한글 카테고리명
 */
export const translateCategory = (category: string): string => {
  const categoryMap: Record<string, string> = {
    egg: "계란",
    meat: "육류",
    fish: "어류",
    milk: "유제품",
    bakery: "베이커리",
    vege: "채소",
    fruit: "과일",
    fastfood: "간편식품",
    grain: "곡물",
    salt: "조미료",
    nuts: "견과류",
    cold: "냉동식품",

    // 저장 위치
    refrigerator: "냉장",
    freezer: "냉동",
    roomtemp: "실온",

    // 기타 카테고리가 추가될 경우 여기에 매핑 추가
    etc: "기타",
  }

  return categoryMap[category.toLowerCase()] || category
}

/**
 * YYYYMMDD 형식의 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
 * @param dateString YYYYMMDD 형식의 날짜 문자열
 * @returns YYYY-MM-DD 형식의 날짜 문자열
 */
export const formatDateYYYYMMDD = (dateString: string): string => {
  if (!dateString || dateString.length !== 8) {
    return dateString
  }

  const year = dateString.substring(0, 4)
  const month = dateString.substring(4, 6)
  const day = dateString.substring(6, 8)

  return `${year}-${month}-${day}`
}

/**
 * ISO 형식의 날짜 문자열을 YYYY-MM-DD 형식으로 변환하는 함수
 * @param isoDateString ISO 형식의 날짜 문자열 (예: 2023-05-15T10:05:54.177+00:00)
 * @returns YYYY-MM-DD 형식의 날짜 문자열
 */
export const formatISODate = (isoDateString: string): string => {
  if (!isoDateString) {
    return ""
  }

  try {
    const date = new Date(isoDateString)

    // 날짜가 유효한지 확인
    if (isNaN(date.getTime())) {
      return isoDateString
    }

    const year = date.getFullYear()
    // getMonth()는 0부터 시작하므로 1을 더하고, 10보다 작으면 앞에 0을 붙임
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    return `${year}-${month}-${day}`
  } catch (error) {
    console.error("날짜 변환 중 오류 발생:", error)
    return isoDateString
  }
}
