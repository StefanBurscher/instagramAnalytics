import { StyleSheet } from "react-native";

import EditScreenInfo from "../EditScreenInfo";
import { Text, View } from "../Themed";
import { RootTabScreenProps } from "../../types";
import RegularScreen from "../layouts/RegularLayout";
import React from "react";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <RegularScreen>
      <EditScreenInfo />
    </RegularScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
