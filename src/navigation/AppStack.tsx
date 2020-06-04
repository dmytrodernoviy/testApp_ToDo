import React, { useRef, useEffect } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import AuthStack from './AuthStack';
import { screenNames } from '@src/constants/screenNames';
import MainStack from './MainStack';
import { NavigationService } from '@src/services';
import { CustomHeader } from '@src/components';
import { translation } from '@src/constants';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyBuRuCug8tU5Iooz-IMWCB8LzWJTdCJfa4',
  authDomain: 'todotest-b3e75.firebaseapp.com',
  databaseURL: 'https://todotest-b3e75.firebaseio.com',
  projectId: 'todotest-b3e75',
  storageBucket: 'todotest-b3e75.appspot.com',
  messagingSenderId: '609054169024',
  appId: '1:609054169024:web:bd19d7e4389156757b1a25',
  measurementId: 'G-JTFB6LGLVF',
};

firebase.initializeApp(firebaseConfig);

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
