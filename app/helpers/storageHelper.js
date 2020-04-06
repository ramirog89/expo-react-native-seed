import { AsyncStorage } from "react-native";

// AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {

export const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

export const getItem = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    // Error retrieving data
  }
};
