import { useFlow } from "@src/utils/StackFlowRegistry"
import { NavContainer, NavButton } from "./styled"
import Typography from "../Typography/Typograpy"
import Svg from "../Svg/Svg"
import VStack from "../FlexBoxGroup/VStack"
interface NavigationProps {
  rootType: "home" | "scrap"
}

const Navigation = ({ rootType }: NavigationProps) => {
  const { replace, push } = useFlow()

  const onIconClick = (rootType: "home" | "scrap") => {
    if (rootType === "scrap") {
      replace("HomeActivity", {})
    } else {
      // replace("ScrapActivity", {})
    }
  }

  const addIconClick = () => {
    // replace("AddIngredientActivity", {})
  }

  return (
    <NavContainer>
      <NavButton
        onClick={() => onIconClick(rootType)}
        style={{ width: "80px" }}
      >
        <Svg
          src={`/icon/icon_home_${
            rootType === "home" ? "primary" : "gray"
          }.svg`}
          width={24}
          height={24}
          alt="홈"
        />
        <Typography
          variant={rootType === "home" ? "label-b" : "label-m"}
          color={rootType === "home" ? "primary" : "gray-600"}
        >
          홈
        </Typography>
      </NavButton>
      <VStack onClick={addIconClick}>
        <Svg src="/icon/icon_plus_main.svg" width={68} height={68} alt="추가" />
      </VStack>

      <NavButton
        onClick={() => onIconClick(rootType)}
        style={{ width: "80px" }}
      >
        <Svg
          src={`/icon/icon_scrap_empty_${
            rootType === "scrap" ? "primary" : "gray"
          }.svg`}
          width={24}
          height={24}
          alt="스크랩"
        />
        <Typography
          variant={rootType === "scrap" ? "label-b" : "label-m"}
          color={rootType === "scrap" ? "primary" : "gray-600"}
        >
          스크랩
        </Typography>
      </NavButton>
    </NavContainer>
  )
}

export default Navigation
