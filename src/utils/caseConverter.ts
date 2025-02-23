type ObjectType = { [key: string]: any }

export const camelToSnake = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => camelToSnake(item))
  }

  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc: ObjectType, key: string) => {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (letter) => `_${letter.toLowerCase()}`
      )
      acc[snakeKey] = camelToSnake(obj[key])
      return acc
    }, {})
  }

  return obj
}

export const snakeToCamel = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamel(item))
  }

  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc: ObjectType, key: string) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      )
      acc[camelKey] = snakeToCamel(obj[key])
      return acc
    }, {})
  }

  return obj
}
