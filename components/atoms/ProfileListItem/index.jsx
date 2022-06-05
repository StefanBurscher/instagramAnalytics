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
  const openProfile = () => {
    const url = `https://www.instagram.com/${item.username}`;
    // const url = `instagram://user?username=${item.username}`;
    openURL(url);
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
    <View style={{ flexDirection: "row", alignItems: "center", zIndex: 1 }}>
      <TouchableOpacity style={styles.item} onPress={openProfile}>
        <View style={styles.infoContainer}>
          <Image
            source={{ uri: user.profile_pic_url }}
            style={styles.profilePicture}
          />
          <View style={styles.infos}>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              {user.full_name}
            </Text>
            <Text style={{ color: "#fff" }}>{user.username}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteProfile} onPress={deleteProfile}>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // profile item
  item: {
    height: 50,
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginRight: 5,
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
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});
