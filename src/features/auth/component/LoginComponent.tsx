import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import BaseButton from '../../../components/baseelement/BaseButton';
import {loginAuth} from '../LoginThunk';

type Props = {};

const LoginComponent = (props: Props) => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);

  const data = {
    email: 'phuocph1903@gmail.com',
    password: 'phuocph1903@gmail.com',
    warehouse_id: 1,
  };
  const login = async () => {
    const res = await dispatch(loginAuth(data));
    console.log(res);
  };
  return (
    <View>
      <Text>{JSON.stringify(loginData)}</Text>
      <BaseButton titleButton="Login" onPressButton={login} />
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({});
