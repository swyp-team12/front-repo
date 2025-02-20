export const calculateDday = (expireDate: string): string => {
  const today = new Date()
  const expire = new Date(expireDate)

  // 시간을 00:00:00으로 설정하여 날짜만 비교
  today.setHours(0, 0, 0, 0)
  expire.setHours(0, 0, 0, 0)

  const diffTime = expire.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays > 0 ? `D-${diffDays}` : `D+${Math.abs(diffDays)}`
}
