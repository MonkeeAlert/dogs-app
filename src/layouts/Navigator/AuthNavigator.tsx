import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../Auth';
import {RootStackParamList} from './utils/routes';

const Stack = createStackNavigator<RootStackParamList>();

export function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name={'Login'} component={LoginScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
