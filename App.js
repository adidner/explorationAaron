import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen.js';
import OtherScreen from './screens/OtherScreen.js';

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen,},
  OtherScreen: {screen: OtherScreen},
});

export default createAppContainer(AppNavigator);
