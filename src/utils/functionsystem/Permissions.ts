import {Platform} from 'react-native';
import {request, PERMISSIONS, check} from 'react-native-permissions';
import {toastNofication} from './ShowToast';

export async function requestCameraPermission() {
  try {
    let permission;
    if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.CAMERA;
    } else {
      permission = PERMISSIONS.ANDROID.CAMERA;
    }

    const status = await check(permission);
    if (status === 'granted') {
      return true;
    } else if (status === 'denied') {
      const granted = await request(permission);
      if (granted === 'granted') {
        return true;
      } else {
        toastNofication('Xin hãy cấp quyền camera');
        return false;
      }
    } else {
      toastNofication('Xin hãy cấp quyền camera');
      return false;
    }
  } catch (error) {
    toastNofication(JSON.stringify(error));
    return false;
  }
}
