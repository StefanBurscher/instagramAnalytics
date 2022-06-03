import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "@rneui/themed";

import { View } from "../../Themed";
import axios from "axios";

export default function AddProfile({ addToGroup }) {
  const [inputValue, setInputValue] = useState("");

  const getPhoto = async (handle) => {

    const newData = new FormData();

    // newData.append("link", `https://www.instagram.com/${handle}`)
    // newData.append("downloader", "avatar")

    newData.append("instagram_url", handle)
    newData.append("type", "profile")
    newData.append("resource", "save")

    const res = await axios.post("https://www.save-insta.com/process", newData)
    // console.log("🚀 ~ file: index.tsx ~ line 17 ~ getPhoto ~ res", res)

  };

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
