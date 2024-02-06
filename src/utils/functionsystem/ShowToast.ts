import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

export const ToastMessage = (
  type: ToastType,
  txt1: string,
  txt2: string,
  visibilityTime: number,
) => {
  Toast.show({
    type: type,
    text1: txt1,
    text2: txt2,
    autoHide: true,
    swipeable: true,
    visibilityTime: visibilityTime || 2000,
  });
};
