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

  // 유통기한이 지났거나 7일 이내로 남았으면 true
  return diffDays <= 7
}
