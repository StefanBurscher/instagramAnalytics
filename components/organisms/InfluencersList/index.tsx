import React, { useContext } from "react";
import { StyleSheet } from "react-native";
// import * as Facebook from 'expo-facebook';

import { View } from "../../Themed";

import ListGroup from "../ListGroup";
import ProfileList from "../ProfileList";
import MainContext from "../../../context/main-context";
// import { Button } from "@rneui/themed";

export default function InfluencersList() {
  const {
    groups: {
      data: [allGroups, setAllGroups],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

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
  //       // console.log("🚀 ~ file: InfluencersList.tsx ~ line 57 ~ logIn ~ response", (await response.json()), userId)

  //       // const response1 = await fetch(`https://graph.facebook.com/v3.2/${userId}?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token=${token}`);
  //       // console.log("🚀 ~ file: InfluencersList.tsx ~ line 57 ~ logIn ~ response", (await response1.json()))

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
    <View style={styles.container}>
      {/* <Button onPress={logIn} title="Asd" /> */}
      <ListGroup
        allGroups={allGroups}
        setActiveGroupIndex={setActiveGroupIndex}
        activeGroupIndex={activeGroupIndex}
      />

      <ProfileList items={selectedGroupItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  // container
  container: {},
});
