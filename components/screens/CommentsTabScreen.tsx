import { Text, View } from "../Themed";
import RegularLayout from "../layouts/RegularLayout";
import React, { useContext } from "react";
import MainContext from "../../context/main-context";
import HashtagsList from "../organisms/HashtagsList";
import Dropdown from "../atoms/Dropdown";
import CommentsCounter from "../organisms/CommentsCounter";
import FlatList from "../organisms/FlatList";
import { openURL } from "../../utils/links";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";

export default function CommentsTabScreen() {
  const {
    hashtags: {
      data: [hashtagCategories, setHashtagCategories],
      indexes: [activeCategoryIndex, setActiveCategoryIndex],
    },
  } = useContext(MainContext);

  const openHashtag = ({ hashtag }) => {
    // const url = `instagram://explore/tags?tag=${hashtag}`;
    const url = `https://www.instagram.com/explore/tags/${hashtag}`;
    openURL(url);
  };

  return (
    <RegularLayout>
      <View style={{ flex: 1 }}>
        <CommentsCounter />

        <FlatList
          items={hashtagCategories}
          setItems={setHashtagCategories}
          activeItemIndex={activeCategoryIndex}
          setActiveItemIndex={setActiveCategoryIndex}
          itemRenderer={({ item: { hashtag } }) => {
            return <Text style={styles.rendered}>#{hashtag}</Text>;
          }}
          onPress={openHashtag}
          addItem={(value, callback) => {
            callback({ hashtag: value });
          }}
        />
      </View>
    </RegularLayout>
  );
}

const styles = StyleSheet.create({
  rendered: {
    color: "#fff",
    fontWeight: "bold",
  },
});
