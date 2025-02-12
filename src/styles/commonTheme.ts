const variants = {
  title: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 600,
  },
  ["head-b"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 600,
  },
  ["head-m"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 500,
  },
  ["head-r"]: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 300,
  },
  "body-b": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 600,
  },
  "body-m": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
  },
  "body-r": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 300,
  },
  "label-b": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 600,
  },
  "label-m": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  "label-r": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: 300,
  },
  "text-b": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 600,
  },
  "text-m": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  "text-r": {
    fontSize: "8px",
    lineHeight: "16px",
    fontWeight: 300,
  },
}
const colors = {
  primary: "#FB7B0D",
  alert: "#FF0000",
  success: "#00FF00",
  warning: "#FFFF00",
  info: "#0000FF",
  dark: "#000000",
  light: "#FFFFFF",
  gray: "#808080",
}
const spaces = {
  0: "0px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px",
  40: "40px",
  44: "44px",
  48: "48px",
  52: "52px",
  56: "56px",
  60: "60px",
  64: "64px",
}

export type ColorsType = keyof typeof colors

export type VariantsType =
  | "title"
  | "head-b"
  | "head-m"
  | "head-r"
  | "body-b"
  | "body-m"
  | "body-r"
  | "label-b"
  | "label-m"
  | "label-r"
  | "text-b"
  | "text-m"
  | "text-r"

export type SpacesType = keyof typeof spaces

const theme = {
  variants,
  colors,
  spaces,
}

export default theme
