import { SelectContainer } from "./styled";

interface SelectContainerProps {
    width?: string
    height?: string
}

const CategoryDropdown = ({ width, height}: SelectContainerProps) => {
    return (
        <SelectContainer width={width} height={height}>
            <option value="">카테고리</option>
            <option value="육류">육류</option>
            <option value="채소">채소</option>
            <option value="가공품">가공품</option>
            <option value="유제품">유제품</option>
            <option value="과일">과일</option>
        </SelectContainer>
    )
}

export default CategoryDropdown;