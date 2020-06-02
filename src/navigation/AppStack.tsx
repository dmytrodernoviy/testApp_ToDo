import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import { screenNames } from '@src/constants/screenNames';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName={screenNames.AuthStack}>
        <Stack.Screen name={screenNames.AuthStack} component={AuthStack} />
        <Stack.Screen name={screenNames.MainStack} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
