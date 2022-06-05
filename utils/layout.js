import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export const getDimensions = () => {
  return { window, screen };
};
