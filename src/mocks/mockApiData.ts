interface IUserType {
  userId: number
  socialId: string
  bio: string | null
  profileImg: string | null
  userNickname: string
  createdAt: string
  updatedAt: string
}

interface IIngredientType {
  ingId: number
  name: string
  expiryDate?: string
  category: string
  quantity?: string
  ingNum?: number
  userMemo?: string
  ingImage?: string
  createdAt: string
  updatedAt: string
  storageType: "냉장" | "냉동"
}

interface IRecipeType {
  recipesId: number
  recipesName: string
  createdAt: string
  updatedAt: string
  isScrap: "0" | "1"
  scrapTime?: string
  requiredIngredients: string[]
  missingIngredients: string[]
}

export const mockUsers: IUserType[] = [
  {
    userId: 1,
    socialId: "kakao_123456",
    bio: "안녕하세요! 요리를 사랑하는 집밥요리사입니다.",
    profileImg: "/images/profile/user1.jpg",
    userNickname: "집밥요리왕",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    userId: 2,
    socialId: "google_789012",
    bio: "매일매일 새로운 레시피 도전!",
    profileImg: "/images/profile/user2.jpg",
    userNickname: "냉장고지킴이",
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z",
  },
  {
    userId: 3,
    socialId: "naver_345678",
    bio: null,
    profileImg: null,
    userNickname: "맛있는하루",
    createdAt: "2024-02-15T00:00:00Z",
    updatedAt: "2024-02-15T00:00:00Z",
  },
]

export const mockIngredients: IIngredientType[] = [
  {
    ingId: 1,
    name: "양파",
    expiryDate: "2024-03-30",
    category: "vege",
    quantity: "3개",
    ingNum: 3,
    userMemo: "다음 주 카레 만들 때 사용 예정",
    ingImage: "/images/ingredients/onion.jpg",
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-01T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 2,
    name: "우유",
    expiryDate: "2024-03-15",
    category: "milk",
    quantity: "1.5L",
    ingNum: 1,
    ingImage: "/images/ingredients/milk.jpg",
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-01T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 3,
    name: "돼지고기",
    expiryDate: "2024-03-10",
    category: "meat",
    quantity: "500g",
    ingNum: 1,
    userMemo: "삼겹살",
    ingImage: "/images/ingredients/pork.jpg",
    createdAt: "2024-03-02T00:00:00Z",
    updatedAt: "2024-03-02T00:00:00Z",
    storageType: "냉동",
  },
  {
    ingId: 4,
    name: "당근",
    expiryDate: "2024-03-25",
    category: "vege",
    quantity: "2개",
    ingNum: 2,
    ingImage: "/images/ingredients/carrot.jpg",
    createdAt: "2024-03-02T00:00:00Z",
    updatedAt: "2024-03-02T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 5,
    name: "계란",
    expiryDate: "2024-03-20",
    category: "egg",
    quantity: "10개",
    ingNum: 10,
    ingImage: "/images/ingredients/egg.jpg",
    createdAt: "2024-03-03T00:00:00Z",
    updatedAt: "2024-03-03T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 6,
    name: "치즈",
    expiryDate: "2024-04-15",
    category: "milk",
    quantity: "200g",
    ingNum: 1,
    ingImage: "/images/ingredients/cheese.jpg",
    createdAt: "2024-03-03T00:00:00Z",
    updatedAt: "2024-03-03T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 7,
    name: "두부",
    expiryDate: "2024-03-08",
    category: "processed",
    quantity: "1모",
    ingNum: 1,
    userMemo: "찌개용",
    ingImage: "/images/ingredients/tofu.jpg",
    createdAt: "2024-03-04T00:00:00Z",
    updatedAt: "2024-03-04T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 8,
    name: "고등어",
    expiryDate: "2024-03-12",
    category: "fish",
    quantity: "2마리",
    ingNum: 2,
    userMemo: "구이용",
    ingImage: "/images/ingredients/mackerel.jpg",
    createdAt: "2024-03-04T00:00:00Z",
    updatedAt: "2024-03-04T00:00:00Z",
    storageType: "냉동",
  },
  {
    ingId: 9,
    name: "감자",
    expiryDate: "2024-04-01",
    category: "vege",
    quantity: "5개",
    ingNum: 5,
    ingImage: "/images/ingredients/potato.jpg",
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-05T00:00:00Z",
    storageType: "냉장",
  },
  {
    ingId: 10,
    name: "요구르트",
    expiryDate: "2024-03-18",
    category: "milk",
    quantity: "4개",
    ingNum: 4,
    ingImage: "/images/ingredients/yogurt.jpg",
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-05T00:00:00Z",
    storageType: "냉장",
  },
]

export const mockRecipes: IRecipeType[] = [
  {
    recipesId: 1,
    recipesName: "카레라이스",
    createdAt: "2024-03-01T00:00:00Z",
    updatedAt: "2024-03-01T00:00:00Z",
    isScrap: "1",
    scrapTime: "2024-03-01T12:00:00Z",
    requiredIngredients: ["감자", "당근", "양파", "카레가루"],
    missingIngredients: ["카레가루"],
  },
  {
    recipesId: 2,
    recipesName: "김치찌개",
    createdAt: "2024-03-02T00:00:00Z",
    updatedAt: "2024-03-02T00:00:00Z",
    isScrap: "0",
    requiredIngredients: ["김치", "돼지고기", "두부", "대파"],
    missingIngredients: ["두부", "대파"],
  },
  {
    recipesId: 3,
    recipesName: "된장찌개",
    createdAt: "2024-03-03T00:00:00Z",
    updatedAt: "2024-03-03T00:00:00Z",
    isScrap: "1",
    scrapTime: "2024-03-03T15:30:00Z",
    requiredIngredients: ["된장", "두부", "감자", "양파", "대파"],
    missingIngredients: ["된장", "대파"],
  },
  {
    recipesId: 4,
    recipesName: "고등어구이",
    createdAt: "2024-03-04T00:00:00Z",
    updatedAt: "2024-03-04T00:00:00Z",
    isScrap: "0",
    requiredIngredients: ["고등어", "소금", "레몬"],
    missingIngredients: ["레몬"],
  },
  {
    recipesId: 5,
    recipesName: "감자탕",
    createdAt: "2024-03-05T00:00:00Z",
    updatedAt: "2024-03-05T00:00:00Z",
    isScrap: "1",
    scrapTime: "2024-03-05T18:20:00Z",
    requiredIngredients: ["감자", "돼지등뼈", "대파", "마늘"],
    missingIngredients: ["돼지등뼈"],
  },
  {
    recipesId: 6,
    recipesName: "계란말이",
    createdAt: "2024-03-06T00:00:00Z",
    updatedAt: "2024-03-06T00:00:00Z",
    isScrap: "0",
    requiredIngredients: ["계란", "소금", "레몬"],
    missingIngredients: ["레몬"],
  },
  {
    recipesId: 7,
    recipesName: "돼지고기 김치볶음",
    createdAt: "2024-03-07T00:00:00Z",
    updatedAt: "2024-03-07T00:00:00Z",
    isScrap: "1",
    scrapTime: "2024-03-07T09:15:00Z",
    requiredIngredients: ["돼지고기", "김치", "대파", "마늘"],
    missingIngredients: ["돼지고기"],
  },
  {
    recipesId: 8,
    recipesName: "두부조림",
    createdAt: "2024-03-08T00:00:00Z",
    updatedAt: "2024-03-08T00:00:00Z",
    isScrap: "0",
    requiredIngredients: ["두부", "소금", "레몬"],
    missingIngredients: ["레몬"],
  },
  {
    recipesId: 9,
    recipesName: "치즈라면",
    createdAt: "2024-03-09T00:00:00Z",
    updatedAt: "2024-03-09T00:00:00Z",
    isScrap: "1",
    scrapTime: "2024-03-09T22:45:00Z",
    requiredIngredients: ["치즈", "라면", "대파", "마늘"],
    missingIngredients: ["치즈"],
  },
  {
    recipesId: 10,
    recipesName: "야채볶음밥",
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-10T00:00:00Z",
    isScrap: "0",
    requiredIngredients: ["야채", "밥", "소금", "레몬"],
    missingIngredients: ["레몬"],
  },
]
