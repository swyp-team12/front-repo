import styled from "styled-components"
import VStack from "../FlexBoxGroup/VStack"

export const ContentContainer = styled(VStack)`
  min-height: calc(100vh - 98px); // 네비게이션 높이만큼 빼줌
  padding-bottom: 16px;
`
