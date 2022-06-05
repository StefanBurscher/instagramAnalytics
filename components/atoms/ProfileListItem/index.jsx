import React from "react";
import { Image, Linking, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import { InstagramUser } from "../../../interfaces/instagramUser";
import { openURL } from "../../../utils/links";

export default function ProfileListItem({
  item,
  index,
  allGroups,
  setAllGroups,
  activeGroupIndex,
  setActiveGroupIndex,
}) {
  // const openProfile = () => {
  //   const url = `https://instagram.com/${item.username}`;
  //   openURL(url);
  // };

  const openProfile = () => {
    const url = `https://instagram.com/${item.username}`;

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

  const user: InstagramUser = item;

  console.log(
    "🚀 ~ file: index.jsx ~ line 50 ~ user.profile_pic_url",
    JSON.stringify(user)
  );
  return (
    <TouchableOpacity style={styles.item} onPress={openProfile}>
      <View style={styles.infoContainer}>
        <Image
          source={{ uri: user.profile_pic_url }}
          style={styles.profilePicture}
        />
        <View style={styles.infos}>
          <Text style={{ fontWeight: "bold" }}>{user.full_name}</Text>
          <Text>{user.username}</Text>
        </View>
      </View>
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
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "trasparent",
    flexDirection: "row",
  },
  infos: {
    marginLeft: 20,
    backgroundColor: "trasparent",
  },
  profilePicture: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  deleteProfile: {
    backgroundColor: "red",
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
