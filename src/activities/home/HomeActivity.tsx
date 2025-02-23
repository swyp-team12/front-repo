import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import { useEffect, useMemo, useState } from "react"
import Tab from "@src/components/Tab/Tab"

import HomeFridgeView from "@src/components/views/home/HomeFridgeView"

import HomeRecipeView from "@src/components/views/home/HomeRecipeView"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import HStack from "@src/components/FlexBoxGroup/HStack"
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
      <HStack border={`1px solid #C5C5C5`} justifyContent="space-between" pl={8} pr={8} pb={8}>
       <HStack gap={8}>
          <Svg src='/icon/icon_number.svg' width={20} height={20}/>
          <Typography variant="body-m" color="gray-500">
            제품 개수
          </Typography>
        </HStack>
        <HStack gap={8} alignItems="center">
          <Typography variant="body-m" color="gray-500">
            개수 선택
          </Typography>
          <Svg src="/icon/icon_vector.svg" width={12} height={18}/>
        </HStack>
      </HStack> 
      <VStack width="100%" height="80px" bg="quaternary">
        <></>
      </VStack>
      <Tab items={tabItems} onChange={handleTabChange} />
      {selectedTab === "0" && <HomeFridgeView />}
      {selectedTab === "1" && <HomeRecipeView />}
    </IconWithSettingHeader>
  )  
}

export default HomeActivity
