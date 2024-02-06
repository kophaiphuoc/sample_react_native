import {View, ViewStyle} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface SkelectonProps {
  children: React.ReactNode;
  loading: boolean;
  style?: ViewStyle;
  speed: number;
}
const SkelectonScreen: React.FC<SkelectonProps> = ({
  children,
  loading,
  style,
  speed = 500,
}) => {
  const containerStyle: ViewStyle = {
    ...style,
  };

  return (
    <SkeletonPlaceholder enabled={loading} speed={speed}>
      <View style={containerStyle}>{children}</View>
    </SkeletonPlaceholder>
  );
};

export default SkelectonScreen;
