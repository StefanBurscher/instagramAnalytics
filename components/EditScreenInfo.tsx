import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";

import AddProfile from "./organisms/AddProfile";
import ListGroup from "./organisms/ListGroup";
import ProfileList from "./organisms/ProfileList";
import localstorage from "../utils/localstorage";
import MainContext from "../context/main-context";

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

  // const getPhoto = (a) => {
  //   // validation for instagram usernames
  //   var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
  //   var validation = regex.test(a);

  //   if (validation) {
  //     try {
  //       const data = axios.get("https://www.instagram.com/" + a + "/?__a=1");

  //       // getting the url
  //       var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
  //       console.log(
  //         "🚀 ~ file: EditScreenInfo.tsx ~ line 46 ~ EditScreenInfo ~ photoURL",
  //         photoURL
  //       );

  //       // update img element
  //       // $("#photoReturn").attr("src", photoURL);
  //       // })
  //       // .fail(function () {
  //       //   // code for 404 error
  //       //   alert("Username was not found!");
  //       // });
  //     } catch (error) {}
  //   } else {
  //     alert("The username is invalid!");
  //   }
  // };

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
