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
          <Text>{index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // list groups
  groups: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",

    // borderWidth: 1,
    // borderColor: "red",
  },
  group: {
    alignItems: "center",
    justifyContent: "center",

    width: 40,
    height: 40,

    borderWidth: 1,
    borderColor: "blue",
    marginRight: 10,
  },
});
