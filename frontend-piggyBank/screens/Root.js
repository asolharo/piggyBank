import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './Settings'
import Dashboard from './Dashboard';
import Forecasting from './ForecastingScreen';

// Initialize the navigation object
const Drawer = createDrawerNavigator();

const Root = () => {

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name='Forecasting' component={Forecasting} />
    </Drawer.Navigator>
  )
}

export default Root