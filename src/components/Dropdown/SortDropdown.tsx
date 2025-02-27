import { SelectContainer } from "./styled";

interface SelectContainerProps {
    width?: string
    height?: string
}

const SortDropdown = ({ width, height}: SelectContainerProps) => {
    return (
        <SelectContainer width={width} height={height}>
            <option value="">분류</option>
            <option value="냉장">냉장</option>
            <option value="냉동">냉동</option>
        </SelectContainer>
    )
}

export default SortDropdown;