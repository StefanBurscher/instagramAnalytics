import { StyleSheet } from "react-native";

import InfluencersList from "../organisms/InfluencersList";
import { Text, View } from "../Themed";
import { RootTabScreenProps } from "../../types";
import RegularLayout from "../layouts/RegularLayout";
import React from "react";

export default function CompetitorsTabScreen({
  navigation,
}: RootTabScreenProps<"CompetitorsTab">) {
  return (
    <RegularLayout>
      <InfluencersList />
    </RegularLayout>
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
