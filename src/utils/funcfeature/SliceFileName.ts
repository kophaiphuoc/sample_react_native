import {Platform} from 'react-native';

export function getImageNameFromUrl(url: string) {
  const lastSlashIndex = url.lastIndexOf('/');
  const imageName = url.substring(lastSlashIndex + 1);
  return imageName;
}

export function getFirstLetter(string: string) {
  return string.charAt(0);
}

export const splitStartWitdh = (url: string): string => {
  if (Platform.OS === 'android') {
    if (url.startsWith('file://')) {
      const newPath = url.slice(7);
      return newPath;
    } else {
      return url;
    }
  } else {
    return url;
  }
};
