import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenNames } from '@src/constants/screenNames';
import {
  ProjectsScreen,
  EditProjectScreen,
} from '@src/features/listOfProjects';

const Stack = createStackNavigator();

const ProjectsStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.Projects} headerMode="none">
      <Stack.Screen name={screenNames.Projects} component={ProjectsScreen} />
      <Stack.Screen
        name={screenNames.EditProject}
        component={EditProjectScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsStack;
