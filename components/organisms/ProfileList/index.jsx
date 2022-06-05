import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import MainContext from "../../../context/main-context";

import ProfileListItem from "../../atoms/ProfileListItem";

export default function ProfileList({ items }) {
  const {
    groups: {
      data: [allGroups, setAllGroups],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  return (
    <FlatList
      keyExtractor={(_, index) => index}
      style={styles.list}
      data={items}
      renderItem={(props) =>
        ProfileListItem({
          ...props,
          allGroups,
          setAllGroups,
          activeGroupIndex,
          setActiveGroupIndex,
        })
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    zIndex: 1,
  },
});
