import { useFlow } from "@src/utils/StackFlowRegistry"
import { NavContainer, NavButton } from "./styled"
import Typography from "../Typography/Typograpy"
import Svg from "../Svg/Svg"

const Navigation = () => {
  const { replace } = useFlow()

  return (
    <NavContainer>
      <NavButton
        onClick={() => replace("HomeActivity", {})}
        style={{ width: "80px" }}
      >
        <Svg src="/icon/icon_home.svg" width={24} height={24} alt="홈" />
        <Typography variant="label-b" color="gray-800">
          홈
        </Typography>
      </NavButton>

      <Svg src="/icon/icon_plus_main.svg" width={68} height={68} alt="추가" />

      <NavButton onClick={() => {}} style={{ width: "80px" }}>
        <Svg
          src="/icon/icon_scrap_empty.svg"
          width={24}
          height={24}
          alt="스크랩"
        />
        <Typography variant="label-b" color="gray-800">
          스크랩
        </Typography>
      </NavButton>
    </NavContainer>
  )
}

export default Navigation
