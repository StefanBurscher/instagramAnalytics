import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // console.log("🚀 ~ file: localstorage.js ~ line 8 ~ storeData ~ e", e);
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // console.log("🚀 ~ file: localstorage.js ~ line 18 ~ getData ~ e", e);
    // error reading value
  }
};

const setContextData = (key, callback, value) => {
  // console.log(
  //   "🚀 ~ file: localstorage.js ~ line 24 ~ setContextData ~ key, callback, value",
  //   key,
  //   callback,
  //   value
  // );
  storeData(key, value);

  callback(value);
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // console.log("🚀 ~ file: localstorage.js ~ line 8 ~ storeData ~ e", e);
    // saving error
  }
};

export default {
  storeData,
  getData,
  setContextData,
  clear,
};
