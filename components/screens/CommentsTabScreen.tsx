import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../Themed";
import RegularLayout from "../layouts/RegularLayout";
import React, { useContext, useRef, useState } from "react";
import * as Progress from "react-native-progress";
import { getDimensions } from "../../utils/layout";
import Colors from "../../constants/Colors";
import { openURL } from "../../utils/links";
import DropDownPicker from "react-native-dropdown-picker";
import { Input } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import MainContext from "../../context/main-context";
import HashtagsList from "../organisms/HashtagsList";
import Dropdown from "../atoms/Dropdown";

export default function CommentsTabScreen() {
  const [lastCommentRefresh, setLastCommentRefresh] = useState(0);
  const [commentsCount, setCommentsCount] = useState(57);
  const [inputValue, setInputValue] = useState("");

  const {
    hashtags: {
      data: [hashtagCategories, setHashtagCategories],
      indexes: [selectedCategoryIndex, setSelectedCategoryIndex],
    },
  } = useContext(MainContext);

  const maxCommentsPerDay = 90;

  const percentage = commentsCount / maxCommentsPerDay;
  const percentageBarWidth = getDimensions().screen.width - 20;

  const openHashtag = (hashtag) => {
    openURL(`https://www.instagram.com/explore/tags/${hashtag}/`);
  };

  const pickerRef = useRef();

  const addHashtag = () => {
    setInputValue("");

    const newCategories = hashtagCategories.map((state, index) => {
      if (index === selectedCategoryIndex) {
        return {
          ...state,
          items: [...state.items, { hashtag: inputValue }],
        };
      }

      return state;
    });

    setHashtagCategories(newCategories);
  };

  return (
    <RegularLayout>
      <View>
        {/* <Text>{lastCommentRefresh}</Text> */}
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text
            style={{
              color: Colors.light.tint,
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            {commentsCount}
          </Text>
          <Text style={{ color: "gray", fontSize: 15, lineHeight: 35 }}>
            /{maxCommentsPerDay}
          </Text>
        </View>
        <Progress.Bar
          progress={percentage}
          width={percentageBarWidth}
          height={20}
          color={Colors.light.tint}
        />

        <Dropdown
          items={hashtagCategories}
          selectedIndex={selectedCategoryIndex}
          onChange={(item, itemIndex) => {
            setSelectedCategoryIndex(itemIndex);
          }}
        />
        <HashtagsList />
      </View>
    </RegularLayout>
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
  input: {
    flex: 1,
  },
});
