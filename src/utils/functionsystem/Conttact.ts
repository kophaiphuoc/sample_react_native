import {Linking} from 'react-native';
import {toastNofication} from './ShowToast';
import {checkOS} from './CheckDevices';

export const onCallPhone = (phone: string) => {
  let phoneNumber = phone;
  if (!checkOS()) {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        toastNofication('Thiết bị không được hỗ trợ');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => toastNofication(JSON.stringify(err)));
};
