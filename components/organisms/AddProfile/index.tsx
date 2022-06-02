import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";

import { View } from "../../Themed";

const lists = [
  { id: 1, name: "Travel", items: [{ handle: "stefan.burscher" }] },
  { id: 2, name: "Travel srbija", items: [] },
];

export default function AddProfile({ addToGroup }) {
  const [inputValue, setInputValue] = useState("");

  const addToList = () => {
    const splittedValue = inputValue.split("instagram.com/");
    const newValue = splittedValue.length > 1 ? splittedValue[1] : inputValue;

    const handleValue = newValue.split("?")[0];

    // getPhoto(handleValue);

    setInputValue("");
    addToGroup({ handle: handleValue });
  };

  return (
    <View style={styles.addProfileView}>
      <Input
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button raised title="Add" onPress={addToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Add profile form
  addProfileView: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  input: {},
});
