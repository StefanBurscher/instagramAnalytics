import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";

import { Text, View } from "../../Themed";

export default function ListGroup({
  allGroups = [],
  setActiveGroupIndex,
  activeGroupIndex,
}) {
  return (
    <View style={styles.groups}>
      {allGroups.map((group, index) => {
        const style = [styles.group];
        if (index === activeGroupIndex) {
          style.push(styles.activeGroup);
        }

        return (
          <TouchableOpacity
            style={style}
            onPress={() => {
              setActiveGroupIndex(index);
            }}
          >
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  // list groups
  groups: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  group: {
    alignItems: "center",
    justifyContent: "center",

    width: 40,
    height: 40,

    borderWidth: 1,
    borderColor: Colors.light.tint,
    marginRight: 10,
  },
  activeGroup: {
    backgroundColor: Colors.light.tint,
  },
});
