import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from "react-native";
import Page1 from './learning/page1';
import Page2 from './learning/page2';
import Page3 from './learning/page3';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const BudgetOverview = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Page1'>
        <Stack.Screen name='What is a Budget?' component={Page1} />
        <Stack.Screen name='A Protection' component={Page2} />
        <Stack.Screen name='Expenses' component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default BudgetOverview;
