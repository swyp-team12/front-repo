import { ActivityComponentType } from "@stackflow/react"
import { AppScreen } from "@stackflow/plugin-basic-ui"
import SearchBar from "@src/components/SearchBar/SearchBar"
import SearchHeader from "@src/components/HeaderGroup/SearchHeader"
import FridgeList from "@src/components/FridgeList/FridgeList"
const FridgeActivity: ActivityComponentType = () => {
  return (
    <SearchHeader>
      <></>
      {/* <FridgeList
        refrigeratedItems={mockRefrigeratedItems}
        frozenItems={mockFrozenItems}
      /> */}
    </SearchHeader>
  )
}

export default FridgeActivity
