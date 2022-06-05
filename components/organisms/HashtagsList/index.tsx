import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../Themed";
import React, { useContext, useState } from "react";
import { openURL } from "../../../utils/links";
import MainContext from "../../../context/main-context";
import Input from "../../atoms/Input";
import { Button } from "@rneui/themed";

export default function HashtagsList() {
  const [inputValue, setInputValue] = useState("");

  const {
    hashtags: {
      data: [hashtagCategories, setHashtagCategories],
      indexes: [selectedCategoryIndex],
    },
  } = useContext(MainContext);

  const openHashtag = (hashtag) => {
    
    // const url = `instagram://explore/tags?tag=${hashtag}`;
    const url = `https://www.instagram.com/explore/tags/${hashtag}`
    openURL(url);
  };

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

  const deleteHashtag = (hashtagIndex) => {
    setInputValue("");

    const newCategories = hashtagCategories.map((state, index) => {
      if (index === selectedCategoryIndex) {
        return {
          ...state,
          items: state.items.filter(
            (_, itemIndex) => itemIndex !== hashtagIndex
          ),
        };
      }

      return state;
    });

    setHashtagCategories(newCategories);
  };

  return (
    <View>
      <Text>Hastags</Text>
      <View>
        <FlatList
          keyExtractor={(_, index) => index}
          // style={styles.list}
          data={hashtagCategories[selectedCategoryIndex].items}
          renderItem={({ item: { hashtag }, index }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
                onPress={() => {
                  openHashtag(hashtag);
                }}
              >
                <Text
                  style={{
                    backgroundColor: "gray",
                    padding: 10,
                    marginRight: 10,
                    flex: 1,
                  }}
                >
                  #{hashtag}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 10,
                }}
                onPress={() => {
                  deleteHashtag(index);
                }}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Input
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter hashtag"
              inputStyle={{ color: "blue" }}
            />
          </View>
          <Button title="Add" onPress={addHashtag} />
        </View>
      </View>
    </View>
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
