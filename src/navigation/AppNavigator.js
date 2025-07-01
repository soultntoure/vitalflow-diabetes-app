// Navigation setup for the application
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';
import CgmDetailScreen from '../screens/CGM/CgmDetailScreen';
import CgmHistoryScreen from '../screens/CGM/CgmHistoryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="CgmDetail" component={CgmDetailScreen} />
        <Stack.Screen name="CgmHistory" component={CgmHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
