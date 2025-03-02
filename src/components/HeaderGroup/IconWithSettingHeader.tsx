import { AppScreen } from "@stackflow/plugin-basic-ui"
import Navigation from "../Navigation/Navigation"
import Svg from "../Svg/Svg"
import { ContentContainer } from "./styled"
import { useFlow } from "@src/utils/StackFlowRegistry"
import VStack from "../FlexBoxGroup/VStack"
interface IconWithSettingHeaderProps {
  children: React.ReactNode
  hasNavigation?: boolean
  navType?: "home" | "scrap"
}

const IconWithSettingHeader = ({
  children,
  hasNavigation = false,
  navType = "home",
}: IconWithSettingHeaderProps) => {
  const { push } = useFlow()

  const handleSettingClick = () => {
    push("SettingActivity", {})
  }

  return (
    <AppScreen
      appBar={{
        renderLeft: () => (
          <Svg src="/icon/icon_yomi_main.svg" width={59} height={32} alt="" />
        ),
        renderRight: () => (
          <VStack onClick={handleSettingClick}>
            <Svg src="/util/util_setting.svg" width={28} height={28} alt="" />
          </VStack>
        ),
        title: <></>,
        border: false,
        height: "48px",
      }}
    >
      <ContentContainer>{children}</ContentContainer>
      {hasNavigation && <Navigation rootType={navType} />}
    </AppScreen>
  )
}

export default IconWithSettingHeader
