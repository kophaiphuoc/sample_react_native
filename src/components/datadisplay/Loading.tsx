import React from 'react';
import {View, ActivityIndicator, ViewStyle, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/constans/SheetColor';

interface LoadingProps {
  enable?: boolean;
  color?: boolean;
  style?: ViewStyle;
  size?: 'large' | 'small';
  sizeLoading?: number;
}

const Loading: React.FC<LoadingProps> = ({
  enable = true,
  color = COLORS.primary,
  style,
  size = 'large',
  sizeLoading = 17,
}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <ActivityIndicator
        animating={enable}
        style={{marginLeft: -sizeLoading}}
        size={size}
        color={color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: '50%',
  },
});

export default Loading;
