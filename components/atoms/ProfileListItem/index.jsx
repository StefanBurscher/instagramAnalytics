import React, { useContext } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import MainContext from "../../../context/main-context";

export default function ProfileListItem({
  item,
  index,
  allGroups,
  setAllGroups,
  activeGroupIndex,
  setActiveGroupIndex,
}) {
  const openProfile = () => {
    const url = `https://instagram.com/${item.handle}`;

    if (Platform.OS == "web") {
      window.open(url, "_blank");
    } else {
      Linking.openURL(url);
    }
  };

  const deleteProfile = () => {
    setAllGroups(
      allGroups.map((group, groupIndex) => {
        if (groupIndex === activeGroupIndex) {
          return {
            ...group,
            items: group.items.filter(
              (_, groupItemIndex) => groupItemIndex != index
            ),
          };
        }

        return group;
      })
    );
  };

  return (
    <TouchableOpacity style={styles.item} onPress={openProfile}>
      <Text>{item.handle}</Text>
      <TouchableOpacity style={styles.deleteProfile} onPress={deleteProfile}>
        <Text>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // profile item
  item: {
    backgroundColor: Colors.light.tint,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteProfile: {
    backgroundColor: "red",
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
