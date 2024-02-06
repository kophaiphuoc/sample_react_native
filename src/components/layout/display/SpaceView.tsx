import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SpaceProps {
  spaceX?: number;
  spaceY?: number;
  style?: ViewStyle;
  children: React.ReactNode;
}

const SpaceView: React.FC<SpaceProps> = ({
  spaceX = 5,
  spaceY = 5,
  style,
  children,
}) => {
  return (
    <View style={{marginVertical: spaceX, marginHorizontal: spaceY, ...style}}>
      {children}
    </View>
  );
};

export default SpaceView;
