import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const WIDTH_SCREEN = width;
export const HEIGHT_SCREEN = height;

export const checkOS = () => {
  if (Platform.OS === 'ios') {
    return false;
  } else if (Platform.OS === 'android') {
    return true;
  } else if (Platform.OS === 'windows') {
    return true;
  } else if (Platform.OS === 'web') {
    return true;
  } else {
    return true;
  }
};
