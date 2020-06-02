import React, { useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import { screenNames } from '@src/constants/screenNames';
import MainStack from './MainStack';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationService } from '@src/services';

const Stack = createStackNavigator();

const AppStack: React.FC = () => {
  const navigator = useRef(null);
  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigator.current);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigator}>
        <Stack.Navigator
          headerMode={'none'}
          initialRouteName={screenNames.AuthStack}>
          <Stack.Screen name={screenNames.AuthStack} component={AuthStack} />
          <Stack.Screen name={screenNames.MainStack} component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default AppStack;
