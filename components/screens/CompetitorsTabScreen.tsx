import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { View } from "../Themed";

import MainContext from "../../context/main-context";
import FlatList from "../organisms/FlatList";
import ProfileListItem from "../atoms/ProfileListItem";
import { openURL } from "../../utils/links";
import { InstagramUser } from "../../interfaces/instagramUser";
import axios from "axios";
import { RootTabScreenProps } from "../../types";
import RegularLayout from "../layouts/RegularLayout";

export default function CompetitorsTabScreen({
  navigation,
}: RootTabScreenProps<"CompetitorsTab">) {
  const {
    groups: {
      data: [allGroups, setAllGroups],
      indexes: [activeGroupIndex, setActiveGroupIndex],
    },
  } = useContext(MainContext);

  const openProfile = (item) => {
    const url = `https://www.instagram.com/${item.username}`;
    openURL(url);
  };

  const getUserData = async (username): Promise<InstagramUser> => {
    const searchURL = `https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`;
    const res = await axios.get(searchURL);

    if (res.headers["content-type"].includes("text/html")) {
      console.log("Trazi auth");
      // setInstagramHtml(res.data);
      // setinstagramURL(searchURL);
    } else {
      const user: InstagramUser = res.data?.users[0]?.user;
      if (user) {
        console.log("Uspeo!", user);
        return user;
      } else {
        console.log("Uspeo! Nema korisnika");
      }
    }
  };

  const addProfileToList = async (value, callback) => {
    const splittedValue = value.split("instagram.com/");
    const newValue = splittedValue.length > 1 ? splittedValue[1] : value;
    const usernameValue = newValue.split("?")[0];
    const userData = await getUserData(usernameValue);

    callback(userData);
  };
  return (
    <RegularLayout>
      <View style={styles.container}>
        <FlatList
          items={allGroups}
          setItems={setAllGroups}
          activeItemIndex={activeGroupIndex}
          setActiveItemIndex={setActiveGroupIndex}
          itemRenderer={ProfileListItem}
          onPress={openProfile}
          addItem={addProfileToList}
        />
      </View>
    </RegularLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
