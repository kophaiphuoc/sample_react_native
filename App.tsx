import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Appearance,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';

import {Provider} from 'react-redux';
import store, {persistor} from './src/stores/Store';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import {PersistGate} from 'redux-persist/integration/react';

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
import AllNavigation from './src/navigation/AllStackNavigation';
import {ThemeContext, ThemeProvider} from './src/themes/ThemeContext';

const App: React.FC = () => {
  const colorSchemeDefault = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<string | null | undefined>(
    'light',
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setCurrentTheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    setCurrentTheme(colorSchemeDefault);
  }, [colorSchemeDefault]);

  persistor.subscribe(() => {
    const state = store.getState();
    const loginData = state.login;
  });
  const {theme, toggleTheme} = React.useContext(ThemeContext);
  toggleTheme();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ActionSheetProvider>
            <MenuProvider>
              <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                  <AllNavigation />
                </NavigationContainer>
                <Toast position="top" topOffset={10} />
              </SafeAreaView>
            </MenuProvider>
          </ActionSheetProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
