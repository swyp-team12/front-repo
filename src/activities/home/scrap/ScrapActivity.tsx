import { ActivityComponentType } from "@stackflow/react"
import VStack from "@src/components/FlexBoxGroup/VStack"
import IconWithSettingHeader from "@src/components/HeaderGroup/IconWithSettingHeader"
import RecipeList from "@src/components/RecipeList/RecipeList"
import useScrapList from "@src/hooks/useScrapList"
import SearchBar from "@src/components/SearchBar/SearchBar"
import Card from "@src/components/Card/Card"
import Svg from "@src/components/Svg/Svg"
import Typography from "@src/components/Typography/Typograpy"
import { useState, useMemo } from "react"
const ScrapActivity: ActivityComponentType = () => {
  const { recipeList } = useScrapList()
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const filteredRecipeList = useMemo(() => {
    return recipeList.filter((recipe) =>
      recipe.recipesName.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [searchValue, recipeList])

  return (
    <IconWithSettingHeader hasNavigation navType="scrap">
      <VStack p="20px" flexGrow={1} gap={24}>
        <SearchBar
          placeholder="레시피를 검색하세요."
          value={searchValue}
          onSearch={handleSearch}
        />

        <RecipeList recipes={filteredRecipeList} />
        <VStack alignItems="center" gap={16} pt={16} pb={16}>
          <Svg
            src="/icon/icon_scrap_fill.svg"
            width={48}
            height={48}
            alt="빈 박스"
          />
          <VStack gap={2} alignItems="center">
            <Typography variant="body-r" color="primary">
              다양한 레시피를 만들고
            </Typography>
            <Typography variant="body-r" color="primary">
              스크랩하세요!
            </Typography>
          </VStack>
        </VStack>
      </VStack>
    </IconWithSettingHeader>
  )
}

export default ScrapActivity
