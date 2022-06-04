import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";

import AddProfile from "./organisms/AddProfile";
import ListGroup from "./organisms/ListGroup";
import ProfileList from "./organisms/ProfileList";
import localstorage from "../utils/localstorage";
import MainContext from "../context/main-context";
import initialState from "../constants/initialState";
import RegularLayout from "./layouts/RegularLayout";

export default function EditScreenInfo() {
  const {
    groups: {
      data: [allGroups, setAllGroups],
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

      setAllGroups(initialGroups);
    };

    getData();
  }, []);


  const selectedGroupItems = (allGroups || {})[activeGroupIndex]?.items;

  return (
    <RegularLayout>
      <View style={styles.container}>
        <ListGroup
          allGroups={allGroups}
          setActiveGroupIndex={setActiveGroupIndex}
          activeGroupIndex={activeGroupIndex}
        />

        <ProfileList items={selectedGroupItems} />
      </View>
    </RegularLayout>
  );
}

const styles = StyleSheet.create({
  // container
  container: {},
});
