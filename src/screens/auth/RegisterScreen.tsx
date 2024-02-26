import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';
import SheetAcction from '../../components/datadisplay/SheetAcction';

type Props = {};

const RegisterScreen = (props: Props) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View>
          <Menu>
            <MenuTrigger text="Select action" />
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{color: 'red'}}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
        </View>
      ),
    });
  }, []);
  return (
    <View>
      <Text>Hello world!</Text>
      <View style={{height: 100, backgroundColor: 'red'}}>
        <SheetAcction />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
