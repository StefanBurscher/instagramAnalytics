import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import Layout from "../../../constants/Layout";

export default function FlatListItemDefaultRenderer({
  item,
  index,
  onPress,
  onDelete,
  itemRenderer = ({ item: { value } }) => (
    <View style={{ backgroundColor: "trasparent", alignItems: "center" }}>
      <Text style={{ color: "#fff" }}>{value}</Text>
    </View>
  ),
  theme,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        zIndex: 1,
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          if (onPress) {
            onPress(item, index);
          }
        }}
      >
        {itemRenderer({ item, index })}
      </TouchableOpacity>

      {!!onDelete && (
        <TouchableOpacity
          style={styles.deleteItem}
          onPress={() => {
            onDelete(item, index);
          }}
        >
          <FontAwesome
            color={Colors[theme].background}
            size={20}
            name="trash"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // profile item
  item: {
    flex: 1,
    height: Layout.listItemSize,
    backgroundColor: Colors.light.tint,
    marginVertical: 5,
    flexDirection: "row",
    marginRight: 5,
  },
  deleteItem: {
    backgroundColor: "red",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: Layout.listItemSize,
  },
});
