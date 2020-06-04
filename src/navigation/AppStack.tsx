import React, { useRef, useEffect } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import { screenNames } from '@src/constants/screenNames';
import MainStack from './MainStack';
import { NavigationService } from '@src/services';
import { CustomHeader } from '@src/components';
import { translation } from '@src/constants';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

const AppStack: React.FC = () => {
  const navigator = useRef(null);
  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigator.current);
  }, []);

  const getHeaderTitle = (route: Route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || translation.projects;

    switch (routeName) {
      case screenNames.ProjectsStack:
        return translation.projects;
      case screenNames.MyTasks:
        return translation.my_tasks;
    }
  };

  return (
    <Provider>
      <NavigationContainer ref={navigator}>
        <Stack.Navigator initialRouteName={screenNames.AuthStack}>
          <Stack.Screen
            name={screenNames.AuthStack}
            component={AuthStack}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name={screenNames.MainStack}
            component={MainStack}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              header: (props) => <CustomHeader {...props} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppStack;
