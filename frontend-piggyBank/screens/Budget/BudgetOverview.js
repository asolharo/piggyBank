
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from "react-native";
import Page0 from './learning/Page0';
import Page1 from './learning/page1';
import Page2 from './learning/page2';
import Page3 from './learning/page3';
import Page4 from './learning/page4';
import Page5 from './learning/page5';
import Page6 from './learning/page6';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const BudgetOverview = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Page0'>
        <Stack.Screen name='Budgeting 101' component={Page0} />
        <Stack.Screen name='What is a Budget?' component={Page1} />
        <Stack.Screen name='A Protection' component={Page2} />
        <Stack.Screen name='Expenses' component={Page3} />
        <Stack.Screen name='Fixed Expenses' component={Page4} />
        <Stack.Screen name='Variable Expenses' component={Page5} />
        <Stack.Screen name='Example' component={Page6} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BudgetOverview;
