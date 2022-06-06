import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function FlatListItemDefaultRenderer({
  item,
  index,
  onPress,
  onDelete,
  itemRenderer = ({ item: { value } }) => (
    <View style={{ backgroundColor: "trasparent" }}>
      <Text style={{ color: "#fff" }}>{value}</Text>
    </View>
  ),
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", zIndex: 1 }}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          if (onPress) {
            onPress(item);
          }
        }}
      >
        {itemRenderer({ item, index })}
      </TouchableOpacity>

      {!!onDelete && (
        <TouchableOpacity style={styles.deleteItem} onPress={onDelete}>
          <FontAwesome color="#fff" size={20} name="trash" />
        </TouchableOpacity>
      )}
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
  deleteItem: {
    backgroundColor: "red",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});
