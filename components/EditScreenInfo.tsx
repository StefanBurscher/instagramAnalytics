import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";

import { Text, View } from "./Themed";

import axios from "axios";

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

    const handleValue = newValue.split("?")[0] 
    getPhoto(handleValue)
    // newList[activeGroupIndex].items.push({ handle: handleValue});
    // setInputValue("");
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
        console.log("🚀 ~ file: EditScreenInfo.tsx ~ line 46 ~ EditScreenInfo ~ photoURL", photoURL)

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

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Button title="Add" onPress={addToList} />

        <View style={styles.groups}>
          {allGroups.map((group, index) => (
            <TouchableOpacity
              style={styles.group}
              onPress={() => {
                setActiveGroupIndex(index);
              }}
            >
              <Text>{group.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {console.log(
          "🚀 ~ file: EditScreenInfo.tsx ~ line 46 ~ EditScreenInfo ~ allGroups[activeGroupIndex].items",
          allGroups[activeGroupIndex].items
        )}
        <FlatList
          data={allGroups[activeGroupIndex].items}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`https://instagram.com/${item.handle}`);
                }}
              >
                <Text>{item.handle}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    width: "100%",
  },
  groups: {
    flexDirection: "row",
  },
  group: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "red",
  },
});
