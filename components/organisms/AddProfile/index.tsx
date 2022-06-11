import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
// import { WebView } from "react-native-webview";

import { View } from "../../Themed";
import axios from "axios";
import { InstagramUser } from "../../../interfaces/instagramUser";
import Input from "../../atoms/Input";

export default function AddProfile({ addToGroup, addGroup }) {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [instagramHtml, setInstagramHtml] = useState();
  const [instagramURL, setinstagramURL] = useState();

  const getUserData = async (username): Promise<InstagramUser> => {
    const searchURL = `https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`;
    const res = await axios.get(searchURL);

    if (res.headers["content-type"].includes("text/html")) {
      console.log("Trazi auth");
      // setInstagramHtml(res.data);
      setinstagramURL(searchURL);
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

  const addProfileToList = async () => {
    const splittedValue = inputValue.split("instagram.com/");
    const newValue = splittedValue.length > 1 ? splittedValue[1] : inputValue;

    const usernameValue = newValue.split("?")[0];

    const userData = await getUserData(usernameValue);

    setInputValue("");
    addToGroup({ ...userData });
  };

  const addToList = async () => {
    setInputValue1("");
    addGroup({
      name: inputValue1,
      items: [],
    });
  };

  return (
    <View>
      <View style={styles.addProfileView}>
        <Input
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter Instagram username or profile URL"
        />

        <Button raised title="Add" onPress={addProfileToList} />
      </View>

      <View style={styles.addProfileView}>
        <Input
          value={inputValue1}
          onChangeText={setInputValue1}
          placeholder="Enter new group name"
        />

        <Button raised title="Add" onPress={addToList} />
      </View>

      {/* <View
        style={{
          width: getDimensions().screen.width - 22,
          height: 500,
        }}
      >
        {instagramHtml && (
          <WebView
            style={styles.webView}
            originWhitelist={["*"]}
            source={{ html: instagramHtml }}
          />
        )}

        {instagramURL && (
          <WebView
            style={styles.webView}
            originWhitelist={["*"]}
            source={{ uri: instagramURL }}
          />
        )}
      </View> */}
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
    marginBottom: 40,
  },
  input: {},
  webView: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    height: 500,
  },
});
