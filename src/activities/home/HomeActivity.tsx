import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import { useEffect, useMemo, useState } from "react"
import Tab from "@src/components/Tab/Tab"
import HomeFridgeView from "@src/components/views/home/HomeFridgeView"
import HomeRecipeView from "@src/components/views/home/HomeRecipeView"
import Svg from "@src/components/Svg/Svg"
import GuideSlider from "@src/components/GuideSlider/GuideSlider"

const tabItems = [
  { id: "0", label: "나의 냉장고" },
  { id: "1", label: "레시피" },
]

const HomeActivity: ActivityComponentType = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabItems[0].id)
  // const [showGuide, setShowGuide] = useState(false)

  const handleTabChange = (id: string) => {
    setSelectedTab(id)
  }

  // const handleGuideComplete = () => {
  //   setShowGuide(false)
  //   localStorage.setItem("guideCompleted", "true")
  // }

  // useEffect(() => {
  //   // 로컬 스토리지에서 가이드 완료 여부 확인
  //   const guideCompleted = localStorage.getItem("guideCompleted")
  //   if (!guideCompleted) {
  //     setShowGuide(true)
  //   }
  // }, [])

  return (
    <>
      {/* {showGuide && <GuideSlider onComplete={handleGuideComplete} />} */}
      <IconWithSettingHeader hasNavigation>
        <VStack width="100%" height="80px" bg="quaternary">
          <Svg width={400} height={82} src="/img_header_01.svg" alt="header" />
        </VStack>
        <Tab items={tabItems} onChange={handleTabChange} />
        {selectedTab === "0" && <HomeFridgeView />}
        {selectedTab === "1" && <HomeRecipeView />}
      </IconWithSettingHeader>
    </>
  )
}

export default HomeActivity
