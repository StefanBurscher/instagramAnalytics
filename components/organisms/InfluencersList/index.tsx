import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { View } from "../../Themed";

import MainContext from "../../../context/main-context";
import FlatList from "../FlatList";
import ProfileListItem from "../../atoms/ProfileListItem";
import { openURL } from "../../../utils/links";

export default function InfluencersList() {
  const {
    groups: {
      data: [allGroups, setAllGroups],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  const openProfile = (item) => {
    const url = `https://www.instagram.com/${item.username}`;
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

  return (
    <View style={styles.container}>
      <FlatList
        items={allGroups}
        activeItemIndex={activeGroupIndex}
        setActiveItemIndex={setActiveGroupIndex}
        itemRenderer={ProfileListItem}
        onPress={openProfile}
        onDelete={deleteProfile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
  },
});
