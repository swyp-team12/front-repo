"use client"

import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { historySyncPlugin } from "@stackflow/plugin-history-sync"
import { stackflow } from "@stackflow/react"
import HomeActivity from "@src/activities/home/HomeActivity"
import FridgeActivity from "@src/activities/home/fridge/FridgeActivity"
import RecipeActivity from "@src/activities/home/recipes/RecipeActivity"
import RecipeDetailActivity from "@src/activities/home/recipes/detail/RecipeDetailActivity"
import RecipeChooseActivity from "@src/activities/home/recipes/choose/RecipeChooseActivity"
import RecipeLoadingActivity from "@src/activities/home/recipes/loading/RecipeLoadingActivity"
import RecipeUsedActivity from "@src/activities/home/recipes/used/RecipeUsedActivity"
export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    HomeActivity,
    FridgeActivity,
    RecipeActivity,
    RecipeDetailActivity,
    RecipeChooseActivity,
    RecipeLoadingActivity,
    RecipeUsedActivity,
  },

  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({ theme: "cupertino" }),

    historySyncPlugin({
      routes: {
        HomeActivity: "/home",
        FridgeActivity: "/home/fridge",
        RecipeActivity: "/home/recipes",
        RecipeDetailActivity: "/home/recipes/detail",
        RecipeChooseActivity: "/home/recipes/choose",
        RecipeLoadingActivity: "/home/recipes/loading",
        RecipeUsedActivity: "/home/recipes/used",
      },
      fallbackActivity: () => "HomeActivity",
    }),
  ],
})
