import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import { Text, View } from "../../Themed";

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
    backgroundColor: "#f9c2cc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
