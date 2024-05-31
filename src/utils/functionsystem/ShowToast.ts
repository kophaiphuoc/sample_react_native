import ToastArlert from 'react-native-toast-message';
import {Toast} from 'react-native-toast-notifications';
import {Alert} from 'react-native';

type ToastType = 'success' | 'error' | 'info';
interface ToastOptions {
  type?: 'normal' | 'success' | 'error';
  placement?: 'top' | 'bottom' | 'center';
  duration?: number;
  offset?: number;
  textStyle?: {
    fontSize?: number;
    color?: string;
  };
}

export const ToastMessage = (
  type?: ToastType,
  txt1?: string,
  txt2?: string,
  visibilityTime?: number,
) => {
  ToastArlert.show({
    type: type,
    text1: txt1,
    text2: txt2,
    autoHide: true,
    swipeable: true,
    visibilityTime: visibilityTime || 2000,
  });
};

export const toastNofication = (description: string, position = 'top') => {
  const toastOptions: ToastOptions = {
    type: 'normal',
    placement: position,
    duration: 1500,
    offset: 30,
    textStyle: {
      fontSize: 16,
      color: 'white',
    },
  };

  Toast.show(description, toastOptions);
};

export const showAlert = (title: string, message: string) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',
        onPress: () => null,
        style: 'default',
      },
    ],
    {cancelable: false},
  );
};
