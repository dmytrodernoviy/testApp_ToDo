import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { View, StyleSheet } from 'react-native';
import { screenNames } from '@src/constants/screenNames';
import { colors, translation } from '@src/constants';
import { Ionicons } from '@expo/vector-icons';
import ProjectsStack from './ProjectsStack';

const Tab = createMaterialBottomTabNavigator();

const MainStack: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.Projects}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={screenNames.ProjectsStack}
        component={ProjectsStack}
        options={{
          tabBarLabel: translation.projects,
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-paper" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.MyTasks}
        component={View}
        options={{
          tabBarLabel: translation.my_tasks,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-refresh" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.primary,
  },
});

export default MainStack;
