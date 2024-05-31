import {createNavigationContainerRef} from '@react-navigation/native';
import {toastNofication} from '../functionsystem/ShowToast';

export const navigationRef = createNavigationContainerRef();
export const nextScreen = (nameScreen: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate({name: nameScreen, params: params});
  } else {
    toastNofication('navigation not ready');
  }
};
