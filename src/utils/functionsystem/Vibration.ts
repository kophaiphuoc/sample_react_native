import {Vibration} from 'react-native';

export const handleNotification = async (countDown: number) => {
  Vibration.vibrate(countDown);
};
