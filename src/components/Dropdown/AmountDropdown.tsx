import { SelectContainer } from "./styled";

interface SelectContainerProps {
    width?: string
    height?: string
}

const AmountDropdown = ({ width, height}: SelectContainerProps) => {
    return (
        <SelectContainer width={width} height={height}>
            <option value="">용량 선택</option>
            <option value="100">100g</option>
            <option value="200">200g</option>
            <option value="300">300g</option>
            <option value="400">400g</option>
            <option value="500">500g</option>
        </SelectContainer>
    )
}

export default AmountDropdown;