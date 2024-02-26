import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {};

const HeaderLeft = (props: Props) => {
  return (
    <View>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
