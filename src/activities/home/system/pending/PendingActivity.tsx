import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import { useEffect, useMemo, useState } from "react"
import Tab from "@src/components/Tab/Tab"
import HomeFridgeView from "@src/components/views/home/HomeFridgeView"
import HomeRecipeView from "@src/components/views/home/HomeRecipeView"
import Spinner from "@src/components/Spinner/Spinner"
import { SpinnerWrapper } from "@src/components/Spinner/styled"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import { AppScreen } from "@stackflow/plugin-basic-ui"

const PendingActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <VStack
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <VStack alignItems="center" gap={24}>
          <VStack alignItems="center" gap={10}>
            <Typography variant="title" color="black">
              서비스 준비중
            </Typography>
            <VStack gap={2} alignItems="center">
              <Typography variant="body-m" color="black">
                서비스 준비중입니다.
              </Typography>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </AppScreen>
  )
}

export default PendingActivity
