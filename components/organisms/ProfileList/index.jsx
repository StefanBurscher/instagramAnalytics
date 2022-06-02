import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ProfileListItem from "../../atoms/ProfileListItem";

export default function ProfileList({ items }) {
  return (
    <FlatList style={styles.list} data={items} renderItem={ProfileListItem} />
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
});
