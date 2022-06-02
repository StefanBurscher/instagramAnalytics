import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("🚀 ~ file: localstorage.js ~ line 8 ~ storeData ~ e", e);
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("🚀 ~ file: localstorage.js ~ line 18 ~ getData ~ e", e);
    // error reading value
  }
};

export default {
  storeData,
  getData,
};
