import { StatusBar } from "expo-status-bar";
import React from "react";
import { useContext } from "react";
import { Platform, StyleSheet } from "react-native";
import MainContext from "../../context/main-context";
import localstorage from "../../utils/localstorage";
import RegularLayout from "../layouts/RegularLayout";

import AddProfile from "../organisms/AddProfile";
import { Text, View } from "../Themed";

export default function ModalScreen({ navigation }) {
  const {
    groups: {
      data: [allGroups, setAllGroups],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  const addProfileToGroup = (newItem) => {
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

    navigation.goBack();
  };

  const addGroup = (newGroup) => {
    setAllGroups([...allGroups, newGroup]);

    navigation.goBack();
  };

  return (
    <RegularLayout>
      <View style={styles.container}>
        <AddProfile addToGroup={addProfileToGroup} addGroup={addGroup} />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </RegularLayout>
  );
}

const styles = StyleSheet.create({
  container: {},
});
