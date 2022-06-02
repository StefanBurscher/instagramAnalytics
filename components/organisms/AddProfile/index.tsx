import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";

import { View } from "../../Themed";

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
        placeholder="Enter Instagram handle or profile URL"
        inputStyle={{ color: "blue" }}
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
    width: "100%",
  },
  input: {},
});
