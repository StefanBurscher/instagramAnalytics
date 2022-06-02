import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Platform, StyleSheet } from "react-native";
import MainContext from "../../context/main-context";
import localstorage from "../../utils/localstorage";

import AddProfile from "../organisms/AddProfile";
import { Text, View } from "../Themed";

export default function ModalScreen() {
  const {
    groups: {
      data: [allGroups, setAllGroupsState],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  const setAllGroups = (groups) => {
    localstorage.storeData("all-groups", groups);

    setAllGroupsState(groups);
  };

  const addToGroup = (newItem) => {
    setAllGroups(
      allGroups.map((group, index) => {
        if (index === activeGroupIndex) {
          return {
            ...group,
            items: [...group.items, newItem],
          };
        }
        return group;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <AddProfile addToGroup={addToGroup} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
