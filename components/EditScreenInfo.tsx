import React, { useContext, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
// import * as Facebook from 'expo-facebook';

import { View } from "./Themed";

import ListGroup from "./organisms/ListGroup";
import ProfileList from "./organisms/ProfileList";
import localstorage from "../utils/localstorage";
import MainContext from "../context/main-context";
import initialState from "../constants/initialState";
import RegularLayout from "./layouts/RegularLayout";
// import { Button } from "@rneui/themed";

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

  // async function logIn() {
  //   console.log("AAAAA")
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: '581562519961859',
  //     });
  //     const { type, token, expirationDate, permissions, declinedPermissions, userId } =
  //       await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ['public_profile'],
  //       });
  //     if (type === 'success') {

  //       "https://graph.facebook.com/v3.2/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token={access-token}"

  //       // Get the user's name using Facebook's Graph API
  //       // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //       // console.log("🚀 ~ file: EditScreenInfo.tsx ~ line 57 ~ logIn ~ response", (await response.json()), userId)

  //       // const response1 = await fetch(`https://graph.facebook.com/v3.2/${userId}?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token=${token}`);
  //       // console.log("🚀 ~ file: EditScreenInfo.tsx ~ line 57 ~ logIn ~ response", (await response1.json()))

  //       // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

  //       console.log(`https://graph.facebook.com/v3.2/${userId}?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token=${token}`)
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }

  // const [status, requestPermission] = Facebook.usePermissions();

  return (
    <RegularLayout>
      <View style={styles.container}>
        {/* <Button onPress={logIn} title="Asd" /> */}
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
