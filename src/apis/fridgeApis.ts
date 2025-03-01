import { Ingredient, IngredientCreateRequest } from "@src/types/apiTypes"
import axios from "axios"

export const getIngredientList = async () => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/ingredient/list`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const getIngredientDetail = async (ingId: string) => {
  const response = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_URL}/ingredient/${Number(ingId)}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}

export const createIngredient = async (ingredient: IngredientCreateRequest) => {
  const response = await axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_API_URL}/ingredient`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: ingredient,
  })

  return response.data
}

export const updateIngredient = async (ingredient: Ingredient) => {
  const response = await axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/ingredient/${Number(
      ingredient.ingId
    )}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: ingredient,
  })
}

export const deleteIngredient = async (ingId: string) => {
  const response = await axios({
    method: "DELETE",
    url: `${process.env.NEXT_PUBLIC_API_URL}/ingredient/${Number(ingId)}`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })

  return response.data
}
