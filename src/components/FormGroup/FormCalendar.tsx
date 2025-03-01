import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"

interface FormCalendarProps {
  value: string
  onChange: (date: string) => void
  placeholder?: string
  icon?: React.ReactNode
  label?: string
}

const FormCalendar: React.FC<FormCalendarProps> = ({
  value,
  onChange,
  placeholder = "날짜를 선택해주세요",
  icon,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  // value가 있으면 selectedDate 설정
  useEffect(() => {
    if (value) {
      const year = parseInt(value.substring(0, 4))
      const month = parseInt(value.substring(4, 6)) - 1
      const day = parseInt(value.substring(6, 8))
      const date = new Date(year, month, day)
      setSelectedDate(date)
      setCurrentMonth(new Date(year, month, 1))
    }
  }, [value])

  // 외부 클릭 시 달력 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // 날짜를 yyyymmdd 형식으로 변환
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}${month}${day}`
  }

  // 날짜를 yyyy-mm-dd 형식으로 변환 (표시용)
  const formatDisplayDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // 이전 달로 이동
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    )
  }

  // 다음 달로 이동
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    )
  }

  // 달력에 표시할 날짜 배열 생성
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // 해당 월의 첫 날
    const firstDay = new Date(year, month, 1)
    // 해당 월의 마지막 날
    const lastDay = new Date(year, month + 1, 0)

    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay() // 0: 일요일, 1: 월요일, ...

    const days: (Date | null)[] = []

    // 이전 달의 날짜들로 채우기
    for (let i = 0; i < startingDay; i++) {
      days.push(null)
    }

    // 현재 달의 날짜들 채우기
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  // 날짜 선택 핸들러
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onChange(formatDate(date))
    setIsOpen(false)
  }

  // 날짜가 오늘인지 확인
  const isToday = (date: Date): boolean => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // 날짜가 선택된 날짜인지 확인
  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  // 요일 배열
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"]

  return (
    <Container ref={calendarRef}>
      {label && (
        <LabelContainer>
          <Typography variant="label-m" color="gray-700">
            {label}
          </Typography>
        </LabelContainer>
      )}
      <InputContainer onClick={() => setIsOpen(!isOpen)}>
        <LeftContent>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <Input>
            {selectedDate ? (
              <Typography variant="body-m" color="gray-700">
                {formatDisplayDate(selectedDate)}
              </Typography>
            ) : (
              <Typography variant="body-m" color="gray-500">
                {placeholder}
              </Typography>
            )}
          </Input>
        </LeftContent>
        <ArrowIcon>
          <Svg
            width={12}
            height={12}
            src="/icon/icon_vector.svg"
            alt="toggle calendar"
          />
        </ArrowIcon>
      </InputContainer>

      {isOpen && (
        <CalendarContainer>
          <CalendarContent>
            <CalendarHeader>
              <MonthNavButton onClick={prevMonth}>
                <Svg
                  width={16}
                  height={16}
                  src="/icon/icon_arrow_left.svg"
                  alt="previous month"
                />
              </MonthNavButton>
              <Typography variant="body-b">
                {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
              </Typography>
              <MonthNavButton onClick={nextMonth}>
                <Svg
                  width={16}
                  height={16}
                  src="/icon/icon_arrow_right.svg"
                  alt="next month"
                />
              </MonthNavButton>
            </CalendarHeader>

            <WeekdaysRow>
              {weekdays.map((day) => (
                <WeekdayCell key={day}>
                  <Typography
                    variant="label-m"
                    color={
                      day === "일"
                        ? "secondary"
                        : day === "토"
                        ? "primary"
                        : "gray-700"
                    }
                  >
                    {day}
                  </Typography>
                </WeekdayCell>
              ))}
            </WeekdaysRow>

            <DaysGrid>
              {getDaysInMonth().map((date, index) => (
                <DayCell
                  key={index}
                  onClick={() => date && handleDateSelect(date)}
                  isToday={date ? isToday(date) : false}
                  isSelected={date ? isSelected(date) : false}
                  isCurrentMonth={!!date}
                >
                  {date && (
                    <Typography
                      variant="label-m"
                      color={
                        isSelected(date)
                          ? "white"
                          : new Date(date).getDay() === 0
                          ? "secondary"
                          : new Date(date).getDay() === 6
                          ? "primary"
                          : "gray-700"
                      }
                    >
                      {date.getDate()}
                    </Typography>
                  )}
                </DayCell>
              ))}
            </DaysGrid>
          </CalendarContent>
        </CalendarContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

const LabelContainer = styled.div`
  margin-bottom: 8px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-400"]};
  cursor: pointer;
  padding: 0;
`

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
`

const IconWrapper = styled.div`
  margin-right: 8px;
`

const Input = styled.div`
  flex: 1;
`

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`

const CalendarContainer = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors["gray-400"]};
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const CalendarContent = styled.div`
  padding: 12px;
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const MonthNavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`

const WeekdaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
`

const WeekdayCell = styled.div`
  text-align: center;
  padding: 4px 0;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`

interface DayCellProps {
  isToday: boolean
  isSelected: boolean
  isCurrentMonth: boolean
}

const DayCell = styled.div<DayCellProps>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isCurrentMonth ? "pointer" : "default")};
  border-radius: ${(props) =>
    props.isSelected || props.isToday ? "50%" : "0"};
  background-color: ${(props) =>
    props.isSelected ? "#FB7B0D" : props.isToday ? "#FFF0D8" : "transparent"};
  opacity: ${(props) => (props.isCurrentMonth ? 1 : 0)};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#FB7B0D" : "#FFF0D8")};
    border-radius: 50%;
  }
`

export default FormCalendar
