import React from 'react';
import {View, ViewStyle} from 'react-native';

interface FlexProps {
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  style?: ViewStyle;
  children: React.ReactNode;
}

const FlexView: React.FC<FlexProps> = ({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  style,
  children,
}) => {
  const containerStyle: ViewStyle = {
    flexDirection,
    justifyContent,
    alignItems,
    ...style,
  };

  return <View style={containerStyle}>{children}</View>;
};

export default FlexView;
