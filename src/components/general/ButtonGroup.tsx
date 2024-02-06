import {StyleSheet, View} from 'react-native';
import React from 'react';
import BaseButton from '../baseelement/BaseButton';
import FlexView from '../layout/display/FlexView';

interface ButtonGroupProps {
  titleLeft?: string;
  titleRight?: string;
  onPressLeft?: Function;
  onPressRight?: Function;
  isSingle?: boolean;
  typeButton?:
    | 'small-outline'
    | 'medium-outline'
    | 'large-outline'
    | 'small-linear'
    | 'medium-linear'
    | 'large-linear';
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  titleLeft = 'Title left',
  titleRight = 'Title right',
  onPressLeft = () => null,
  onPressRight = () => null,
  isSingle = false,
  typeButton = 'small-outline',
}) => {
  return (
    <View>
      {isSingle ? (
        <BaseButton
          typeButton={typeButton}
          titleButton={titleLeft}
          onPressButton={onPressLeft}
        />
      ) : (
        <FlexView flexDirection="row" justifyContent="space-between">
          <BaseButton
            typeButton={typeButton}
            titleButton={titleLeft}
            styleButton={styles.baseSizeButton}
            onPressButton={onPressLeft}
          />
          <BaseButton
            typeButton={typeButton}
            titleButton={titleRight}
            styleButton={styles.baseSizeButton}
            onPressButton={onPressRight}
          />
        </FlexView>
      )}
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  baseSizeButton: {
    flex: 0.48,
  },
});
