import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

interface HidekeyBoardProps {
  children: React.ReactNode;
}

const HideKeyboard: React.FC<HidekeyBoardProps> = ({children}) => {
  const onHideKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={onHideKeyboard}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default HideKeyboard;
