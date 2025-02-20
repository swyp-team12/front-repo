import { ActivityComponentType } from "@stackflow/react"
import { useFlow } from "@src/utils/StackFlowRegistry"
import Button from "@src/components/Button/Button"
import VStack from "@src/components/FlexBoxGroup/VStack"
import Card from "@src/components/Card/Card"
import HStack from "@src/components/FlexBoxGroup/HStack"
import Typography from "@src/components/Typography/Typograpy"
import Svg from "@src/components/Svg/Svg"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import { useEffect, useMemo, useState } from "react"
import Tab from "@src/components/Tab/Tab"
import IconCard from "@src/components/IconCard/IconCard"
import HomeFridgeView from "@src/components/views/home/HomeFridgeView"
import styled from "styled-components"

const ContentContainer = styled(VStack)`
  min-height: calc(100vh - 98px); // 네비게이션 높이만큼 빼줌
`

const tabItems = [
  { id: "0", label: "나의 냉장고" },
  { id: "1", label: "레시피" },
]

const HomeActivity: ActivityComponentType = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabItems[0].id)

  const handleTabChange = (id: string) => {
    setSelectedTab(id)
  }

  return (
    <IconWithSettingHeader hasNavigation>
      <ContentContainer>
        <VStack width="100%" height="80px" bg="primary">
          <></>
        </VStack>
        <Tab items={tabItems} onChange={handleTabChange} />
        {selectedTab === "0" && <HomeFridgeView />}
        {selectedTab === "1" && <></>}
      </ContentContainer>
    </IconWithSettingHeader>
  )
}

export default HomeActivity
