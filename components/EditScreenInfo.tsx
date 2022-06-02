import React, { useState } from "react";
import {
  // Button,
  FlatList,
  Platform,
  StyleSheet,
  // TextInput,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";

import { Text, View } from "./Themed";

import axios from "axios";
import AddProfile from "./organisms/AddProfile";
import ListGroup from "./organisms/ListGroup";
import ProfileList from "./organisms/ProfileList";

const lists = [
  { id: 1, name: "Travel", items: [{ handle: "stefan.burscher" }] },
  { id: 2, name: "Travel srbija", items: [] },
];

export default function EditScreenInfo() {
  const [inputValue, setInputValue] = useState("");
  const [allGroups, setAllGroups] = useState(lists);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const addToList = () => {
    const newList = [...allGroups];

    const splittedValue = inputValue.split("instagram.com/");
    const newValue = splittedValue.length > 1 ? splittedValue[1] : inputValue;

    const handleValue = newValue.split("?")[0];

    // getPhoto(handleValue);

    newList[activeGroupIndex].items.push({ handle: handleValue });
    setInputValue("");
  };

  const getPhoto = (a) => {
    // validation for instagram usernames
    var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
    var validation = regex.test(a);

    if (validation) {
      try {
        const data = axios.get("https://www.instagram.com/" + a + "/?__a=1");

        // getting the url
        var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
        console.log(
          "🚀 ~ file: EditScreenInfo.tsx ~ line 46 ~ EditScreenInfo ~ photoURL",
          photoURL
        );

        // update img element
        // $("#photoReturn").attr("src", photoURL);
        // })
        // .fail(function () {
        //   // code for 404 error
        //   alert("Username was not found!");
        // });
      } catch (error) {}
    } else {
      alert("The username is invalid!");
    }
  };

  const openProfile = (item) => {
    const url = `https://instagram.com/${item.handle}`;

    if (Platform.OS == "web") {
      window.open(url, "_blank");
    } else {
      Linking.openURL(url);
    }
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
    <View>
      <View style={styles.getStartedContainer}>
        <AddProfile addToGroup={addToGroup} />

        <ListGroup
          allGroups={allGroups}
          setActiveGroupIndex={setActiveGroupIndex}
        />

        <ProfileList items={allGroups[activeGroupIndex].items} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },

  // profile item
  item: {
    backgroundColor: "#f9c2cc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
