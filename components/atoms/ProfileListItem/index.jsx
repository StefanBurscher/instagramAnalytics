import React from "react";
import { Image, StyleSheet } from "react-native";

import { Text, View } from "../../Themed";
import { InstagramUser } from "../../../interfaces/instagramUser";
import Layout from "../../../constants/Layout";

export default function ProfileListItem({ item }) {
  const user: InstagramUser = item;

  return (
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
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: "trasparent",
    flexDirection: "row",
  },
  infos: {
    marginLeft: 10,
    backgroundColor: "trasparent",
    justifyContent: "space-evenly",
  },
  profilePicture: {
    width: Layout.listItemSize,
    height: Layout.listItemSize,
  },
});
