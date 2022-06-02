import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";

export default function ProfileListItem({ item }) {
  const openProfile = (profile) => {
    const url = `https://instagram.com/${profile.handle}`;

    if (Platform.OS == "web") {
      window.open(url, "_blank");
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        openProfile(item);
      }}
    >
      <Text>{item.handle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // profile item
  item: {
    backgroundColor: Colors.light.tint,
    padding: 20,
    marginVertical: 10,
  },
});
