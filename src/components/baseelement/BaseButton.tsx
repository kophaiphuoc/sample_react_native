import {TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import BaseText from './BaseText';
import {
  outLineButton,
  linearButton,
} from '../../styles/components/ButtonInputStyle';
import {COLORS} from '../../styles/constans/SheetColor';

interface BaseButtonProps {
  typeButton?: string;
  titleButton?: string;
  styleButton?: ViewStyle;
  styleTitle?: ViewStyle | {color: string; fontSize: number};
  onPressButton?: Function;
}

const OPACITY = 0.7;

const BaseButton: React.FC<BaseButtonProps> = ({
  titleButton = 'default',
  styleButton,
  styleTitle,
  typeButton = 'small-outline',
  onPressButton = () => null,
}) => {
  const selectTypeBtn = (typeBtn: string) => {
    switch (typeBtn) {
      case 'small-outline':
        return outLineButton.SMALL;
      case 'medium-outline':
        return outLineButton.SMALL;
      case 'large-outline':
        return outLineButton.LAGRE;
      case 'small-linear':
        return linearButton.SMALL;
      case 'medium-linear':
        return linearButton.SMALL;
      case 'large-linear':
        return linearButton.LAGRE;
      default:
        return outLineButton.SMALL;
    }
  };
  const titleStyle = (typeBtn: string) => {
    if (['small-linear', 'medium-linear', 'large-linear'].includes(typeBtn)) {
      return {
        color: COLORS.white,
        fontSize: 14,
      };
    }
  };
  const mergedStyle = {...styleTitle, ...titleStyle(typeButton)};
  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      style={[selectTypeBtn(typeButton), {...styleButton}]}
      activeOpacity={OPACITY}>
      <BaseText text={titleButton} style={mergedStyle} />
    </TouchableOpacity>
  );
};

export default BaseButton;
