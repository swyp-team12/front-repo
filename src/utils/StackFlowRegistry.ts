"use client"

import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { historySyncPlugin } from "@stackflow/plugin-history-sync"
import { stackflow } from "@stackflow/react"
import HomeActivity from "@src/activities/HomeActivity"
import FridgeActivity from "@src/activities/FridgeActivity"
import InitActivity from "@src/activities/InitActivity"

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    InitActivity,
    HomeActivity,
    FridgeActivity,
  },

  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({ theme: "cupertino" }),

    historySyncPlugin({
      routes: {
        InitActivity: "/",
        HomeActivity: "/home",
        FridgeActivity: "/home/fridge",
      },
      fallbackActivity: () => "HomeActivity",
    }),
  ],
})
