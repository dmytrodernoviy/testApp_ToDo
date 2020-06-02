import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { View } from 'react-native';
import { screenNames } from '@src/constants/screenNames';

const Tab = createMaterialBottomTabNavigator();

const MainStack: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={screenNames.List}>
      <Tab.Screen name={screenNames.List} component={View} />
      <Tab.Screen name={screenNames.My_Projects} component={View} />
    </Tab.Navigator>
  );
};

export default MainStack;
