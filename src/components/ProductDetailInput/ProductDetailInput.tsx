import AmountDropdown from "../Dropdown/AmountDropdown";
import NumberDropdown from "../Dropdown/NumberDropdown";
import SortDropdown from "../Dropdown/SortDropdown";
import HStack from "../FlexBoxGroup/HStack";
import Svg from "../Svg/Svg";
import Typography from "../Typography/Typograpy";

interface ProductDetailInputProps {
  inputName: string
  dropdownType?: "number" | "amount"
  src: string
}

const ProductDetailInput = ({ inputName, dropdownType, src }: ProductDetailInputProps   )=> {
  return (
    <HStack border={`1px solid #C5C5C5`} justifyContent="space-between" pl={8} pr={8} pb={8}>
       <HStack gap={8}>
          <Svg src={src} width={20} height={20}/>
          <Typography color="gray-500" variant="body-m">
            {inputName}
          </Typography>
        </HStack>
        <HStack gap={8} alignItems="center">
          {dropdownType === "number" ? <NumberDropdown /> : dropdownType === "amount" ? <AmountDropdown /> : null}
          {/* <Typography color="gray-500" variant="body-m">
            {select}
          </Typography>
          <Svg src="/icon/icon_vector.svg" width={12} height={18}/> */}
        </HStack>
    </HStack>
  )
}

export default ProductDetailInput