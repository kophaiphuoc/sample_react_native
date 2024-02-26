import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import BaseButton from '../../components/baseelement/BaseButton';
import LoginComponent from '../../features/auth/component/LoginComponent';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation();

  const nextScreen = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View>
      {/* <BaseButton titleButton="next register" onPressButton={nextScreen} /> */}
      <LoginComponent />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
