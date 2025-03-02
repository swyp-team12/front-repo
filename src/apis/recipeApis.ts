import {
  Ingredient,
  IngredientCreateRequest,
  IngredientModifyRequest,
} from "@src/types/apiTypes"
import axios from "axios"

export const createRecipe = async (ingredientName: string[]) => {
  const response = await axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe/clova`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: {
      ingredients: ingredientName,
    },
  })

  return response.data
}

export const getRecipeDetail = async (recipeId: number) => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe/${recipeId}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const getRecipeList = async () => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const scrapRecipe = async (recipeId: number) => {
  const response = await axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe/${recipeId}/scrap`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const unScrapRecipe = async (recipeId: number) => {
  const response = await axios({
    method: "DELETE",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe/${recipeId}/scrap`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const getScrapRecipeList = async () => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/recipe/scrap`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}
