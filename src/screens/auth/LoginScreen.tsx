import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DarkModeScreen from '../../components/animation/darkmode/DarkModeScreen';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <DarkModeScreen />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
