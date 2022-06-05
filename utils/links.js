import * as Linking from "expo-linking";
import { Platform } from "react-native";

export const openURL = (url) => {
  if (Platform.OS == "web") {
    window.open(url, "_blank");
  } else {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    } else {
      alert("AAAAA")
    }
  }
};
