import React, { useState } from "react";
import {
  FlatList as FlatListRN,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../../Themed";

import Dropdown from "../../atoms/Dropdown";
import FlatListItemDefaultRenderer from "../../atoms/FlatListItemDefaultRenderer";
import Input from "../../atoms/Input";
import { Button } from "@rneui/themed";
import Colors from "../../../constants/Colors";

export default function FlatList({
  items,
  setItems,
  addItem = (value, callback) => {
    callback(value);
  },
  noAddItem,
  activeItemIndex,
  setActiveItemIndex,
  itemRenderer,
  onPress,
  noDelete,
}) {
  const [inputValue, setInputValue] = useState("");

  const activeCategoryItems = (items || {})[activeItemIndex]?.items;

  const addItemHandler = () => {
    addItem(inputValue, (value) => {
      setItems(
        items.map((item, index) => {
          if (index === activeItemIndex) {
            return {
              ...item,
              items: [...item.items, value],
            };
          }
          return item;
        })
      );

      setInputValue("");
    });
  };

  const deleteItem = (_, index) => {
    const newCategories = items.map((state, i) => {
      if (i === activeItemIndex) {
        return {
          ...state,
          items: state.items.filter((_, itemIndex) => itemIndex !== index),
        };
      }

      return state;
    });

    setItems(newCategories);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        items={items}
        selectedIndex={activeItemIndex}
        onChange={(_, itemIndex) => {
          setActiveItemIndex(itemIndex);
        }}
      />

      <FlatListRN
        keyExtractor={(_, index) => index}
        style={styles.list}
        data={activeCategoryItems}
        renderItem={({ item, index }) =>
          FlatListItemDefaultRenderer({
            item,
            index,
            onPress,
            onDelete: noDelete ? undefined : deleteItem,
            itemRenderer,
          })
        }
      />

      {!noAddItem && (
        <View style={styles.addItem}>
          <View style={{ flex: 1 }}>
            <Input
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter new item"
              inputStyle={{ color: "blue" }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={addItemHandler}>
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "100%",
    zIndex: 1,
  },
  addItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});
