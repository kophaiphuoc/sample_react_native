import ForgotPasswordScreen from '../../screens/auth/ForgotPasswordScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';

export const authScreens = [
  {
    name: 'LoginScreen',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    component: LoginScreen,
  },
  {
    name: 'ForgotPasswordScreen',
    options: {
      headerShown: true,
      headerTitle: 'Quên mật khẩu',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      animation: 'slide_from_bottom',
    },
    component: ForgotPasswordScreen,
  },
  {
    name: 'RegisterScreen',
    options: {
      headerShown: true,
      headerTitle: 'Đăng ký tài khoản',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      animation: 'slide_from_bottom',
    },
    component: RegisterScreen,
  },
];
