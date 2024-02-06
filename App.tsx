import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

import FlexView from './src/components/layout/display/FlexView';
import SpaceView from './src/components/layout/display/SpaceView';
import SkelectonScreen from './src/components/layout/effect/SkelectonScreen';
import HideKeyboard from './src/components/layout/effect/HideKeyboard';
import Loading from './src/components/datadisplay/Loading';
import ButtonGroup from './src/components/general/ButtonGroup';
import BaseButton from './src/components/baseelement/BaseButton';
import NotFound from './src/components/datadisplay/NotFound';
import {ToastMessage} from './src/utils/functionsystem/ShowToast';
import Toast from 'react-native-toast-message';
import {post, get} from './src/utils/functionnetwork/Api';
import ListItem from './src/components/datadisplay/ListItem';

const App = () => {
  const Test = ({item}) => {
    console.log(item);
    return (
      <View>
        <Text>xin chào</Text>
      </View>
    );
  };
  return (
    <View>
      <ListItem
        data={[1, 2, 3]}
        lengthListItem={5}
        heightItem={10}
        RenderItem={<Test/>}
      />
      <Toast position="top" topOffset={10} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
