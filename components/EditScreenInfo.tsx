import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";

import AddProfile from "./organisms/AddProfile";
import ListGroup from "./organisms/ListGroup";
import ProfileList from "./organisms/ProfileList";
import localstorage from "../utils/localstorage";
import MainContext from "../context/main-context";
import initialState from "../constants/initialState";

export default function EditScreenInfo() {
  const {
    groups: {
      data: [allGroups, setAllGroupsState],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  useEffect(() => {
    const getData = async () => {
      let initialGroups = await localstorage.getData("all-groups");

      const hasLocalstorageValue =
        !initialGroups ||
        (initialGroups && initialGroups && initialGroups.lenght === 0);

      if (hasLocalstorageValue) {
        initialGroups = initialState;
      }

      setAllGroupsState(initialGroups);
    };

    getData();
  }, []);


  const selectedGroupItems = (allGroups || {})[activeGroupIndex]?.items;

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <ListGroup
          allGroups={allGroups}
          setActiveGroupIndex={setActiveGroupIndex}
          activeGroupIndex={activeGroupIndex}
        />

        <ProfileList items={selectedGroupItems} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
});
