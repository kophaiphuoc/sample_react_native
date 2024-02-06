import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import store from './src/stores/Store';

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
import LoginComponent from './src/features/auth/component/LoginComponent';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <LoginComponent />
        <Toast position="top" topOffset={10} />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
