import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";

export default function ListGroup({ allGroups = [], setActiveGroupIndex }) {
  return (
    <View style={styles.groups}>
      {allGroups.map((group, index) => (
        <TouchableOpacity
          style={styles.group}
          onPress={() => {
            setActiveGroupIndex(index);
          }}
        >
          <Text>{group.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // list groups
  groups: {
    flexDirection: "row",
  },
  group: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "red",
  },
});
