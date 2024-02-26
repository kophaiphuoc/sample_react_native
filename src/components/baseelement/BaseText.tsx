import {StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../styles/constans/SheetColor';

interface BaseButtonProps {
  style?: ViewStyle | {color: string; fontSize: number};
  text: string;
}

const BaseText: React.FC<BaseButtonProps> = ({style, text = 'default'}) => {
  return <Text style={[styles.baseCss, {...style}]}>{text}</Text>;
};

export default BaseText;

const styles = StyleSheet.create({
  baseCss: {
    fontSize: scale(13),
    fontWeight: '400',
    color: COLORS.black,
  },
});
