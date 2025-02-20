import { useState } from "react"
import Typography from "../Typography/Typograpy"
import { TabContainer, TabButton, ActiveIndicator } from "./styled"

export interface TabItem {
  id: string
  label: string
}

interface TabProps {
  items: TabItem[]
  onChange?: (id: string) => void
}

const Tab = ({ items, onChange }: TabProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (index: number, id: string) => {
    setActiveIndex(index)
    onChange?.(id)
  }

  return (
    <TabContainer>
      {items.map((item, index) => (
        <TabButton
          key={item.id}
          $isActive={index === activeIndex}
          onClick={() => handleTabClick(index, item.id)}
        >
          <Typography variant="body-m" color="gray-700">
            {item.label}
          </Typography>
        </TabButton>
      ))}
      <ActiveIndicator $activeIndex={activeIndex} />
    </TabContainer>
  )
}

export default Tab
