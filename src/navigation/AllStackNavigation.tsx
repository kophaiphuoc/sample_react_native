import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {authScreens} from './stacks/Auth';

import HeaderLeft from '../components/navigation/HeaderLeft';

const Stack = createNativeStackNavigator();

const AllNavigation = () => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState<string | null>(null);

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'Login') {
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [currentScreen]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRoute = navigation.getCurrentRoute();
      if (currentRoute) {
        setCurrentScreen(currentRoute.name);
      }
    });

    return unsubscribe;
  }, [navigation]);

  const isAnimationAllowed = (animation: string | undefined): boolean => {
    const allowedAnimations = ['slide_from_bottom'];
    return animation !== undefined && allowedAnimations.includes(animation);
  };
  return (
    <Stack.Navigator>
      {/* auth screen */}
      {authScreens.map((screen, index) => {
        const {name, options, component: Component} = screen;
        if (isAnimationAllowed(options?.animation)) {
          options.headerLeft = () => <HeaderLeft />;
        }
        return (
          <Stack.Screen
            key={index}
            name={name}
            options={options}
            component={Component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AllNavigation;
