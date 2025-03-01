import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import { useEffect, useMemo, useState } from "react"
import Tab from "@src/components/Tab/Tab"
import HomeFridgeView from "@src/components/views/home/HomeFridgeView"
import HomeRecipeView from "@src/components/views/home/HomeRecipeView"

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
      {/* <Myinfo/> */}    
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
