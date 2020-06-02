import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenNames } from '@src/constants/screenNames';
import { SignInScreen, SignUpScreen } from '@src/features/auth';
import {
  ForgotPasswordScreen,
  ResetPasswordScreen,
} from '@src/features/authRecovery';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={screenNames.SignIn}>
      <Stack.Screen name={screenNames.SignIn} component={SignInScreen} />
      <Stack.Screen name={screenNames.SignUp} component={SignUpScreen} />
      <Stack.Screen
        name={screenNames.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={screenNames.ResetPassword}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
