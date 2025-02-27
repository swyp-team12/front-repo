import { SelectContainer } from "./styled";

interface SelectContainerProps {
    width?: string
    height?: string
}

const NumberDropdown = ({ width, height}: SelectContainerProps) => {
    return (
        <SelectContainer width={width} height={height}>
            <option value="">개수 선택</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
            <option value="5">5개</option>
            <option value="6">6개</option>
            <option value="7">7개</option>
        </SelectContainer>
    )
}

export default NumberDropdown;