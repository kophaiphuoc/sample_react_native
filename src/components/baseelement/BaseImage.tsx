import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {FastImageProps} from 'react-native-fast-image';

const BaseImage: React.FC<FastImageProps> = () => {
  return (
    <View>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default BaseImage;

const styles = StyleSheet.create({});
