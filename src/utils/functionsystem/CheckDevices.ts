import {Platform} from 'react-native';

export const checkOS = () => {
  if (Platform.OS === 'ios') {
    return true;
  } else if (Platform.OS === 'android') {
    return false;
  } else if (Platform.OS === 'windows') {
    console.log('Windows');
  } else if (Platform.OS === 'web') {
    console.log('Web');
  } else {
    console.log('Unknown OS');
  }
};
