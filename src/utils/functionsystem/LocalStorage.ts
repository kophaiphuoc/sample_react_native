import AsyncStorage from '@react-native-async-storage/async-storage';

export const convertJson = (data: any) => {
  const jsonValue = JSON.stringify(data);
  return jsonValue;
};

export const saveObject = async (key: string, data: any) => {
  try {
    const Json = convertJson(data);
    await AsyncStorage.setItem(key, Json);
  } catch (e) {
    console.log(e);
  }
};

export const saveStringLocal = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.log(e);
  }
};

export const getDataStringLocal = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? value : null;
  } catch (e) {
    console.log(e);
  }
};

export const getDataObjectLocal = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const deleteLocalStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};
