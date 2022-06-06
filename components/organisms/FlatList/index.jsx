import React from "react";
import { FlatList as FlatListRN, StyleSheet } from "react-native";

import { View } from "../../Themed";

import Dropdown from "../../atoms/Dropdown";
import FlatListItemDefaultRenderer from "../../atoms/FlatListItemDefaultRenderer";

export default function FlatList({
  items,
  activeItemIndex,
  setActiveItemIndex,
  itemRenderer,
  onPress,
  onDelete,
}) {
  const activeCategoryItems = (items || {})[activeItemIndex]?.items;

  return (
    <View style={styles.container}>
      <Dropdown
        items={items}
        selectedIndex={activeItemIndex}
        onChange={(_, itemIndex) => {
          setActiveItemIndex(itemIndex);
        }}
      />

      <FlatListRN
        keyExtractor={(_, index) => index}
        style={styles.list}
        data={activeCategoryItems}
        renderItem={({ item, index }) =>
          FlatListItemDefaultRenderer({
            item,
            index,
            onPress,
            onDelete,
            itemRenderer,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "100%",
    zIndex: 1,
  },
});
