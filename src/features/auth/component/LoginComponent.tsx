import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import BaseButton from '../../../components/baseelement/BaseButton';
import {loginAuth} from '../LoginThunk';

type Props = {};

const LoginComponent = (props: Props) => {
  const dispatch = useDispatch();

  const data = {
    email: 'sang2000@gmail.com',
    password: '123',
    warehouse_id: 1,
  };
  const login = async () => {
    await dispatch(loginAuth(data));
  };
  return (
    <View>
      <BaseButton titleButton="Login" onPressButton={login} />
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({});
