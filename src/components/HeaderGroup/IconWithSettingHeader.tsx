import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import VStack from "../FlexBoxGroup/VStack"
import Svg from "../Svg/Svg"

interface IconWithSettingHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
}

const IconWithSettingHeader = ({
  children,
  hasNavigation = false,
}: IconWithSettingHeaderProps) => {
  return (
    <AppScreen
      appBar={{
        renderLeft: () => (
          <Svg src="/icon/icon_yomi_main.svg" width={59} height={32} alt="" />
        ),
        renderRight: () => (
          <Svg src="/util/util_setting.svg" width={28} height={28} alt="" />
        ),
        title: <></>,
        border: false,
        height: "48px",
      }}
    >
      <VStack pb={16}>{children}</VStack>
      {hasNavigation && <Navigation />}
    </AppScreen>
  )
}

export default IconWithSettingHeader
