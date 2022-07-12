
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from "react-native";
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
      <Stack.Navigator initialRouteName='Page1'>
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


/*
import React from "react";
import { ScrollView, View } from "react-native";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import defaultStyles from "../../constants/defaultStyles";

function BudgetOverview() {
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View style={defaultStyles.center}>
          <AppText
            style={[
              defaultStyles.headline,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >
            Budgetting 101
          </AppText>
          <AppText style={defaultStyles.subHeadline}>
            Assign every dollar a job
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            So no money slips through your fingers.
          </AppText>
          <AppText style={defaultStyles.subHeadline}>💵 </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            {" "}
            A budget helps you plan and evaluate your expenses.
          </AppText>
          <AppText style={defaultStyles.headline}> BE SPECIFIC</AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Budget for a specific period of time (such as weekly, biweekly,
            monthly) according to your pay schedule.
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Because income and expenses can vary from week to week, month to
            month, prepare a new budget each and every week or month. Enter all
            income and expenses each time you prepare a budget. Balance income
            with expenses, and spend less than you earn. For this practice you
            will use a monthly period. Link to Outside budget sheet:
          </AppText>
          <View style={[defaultStyles.link, { borderColor: defaultStyles.colors.accent, borderWidth: 3, padding: 10}, defaultStyles.center]}>
            <AppText style={defaultStyles.text_on_dark}>
              Find additional budget resources here:
            </AppText>
            <AppText
              style={defaultStyles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.churchofjesuschrist.org/bc/content/shared/english/pdf/callings/welfare/72727_FamilyBudgetWorksheet_pdf.pdf"
                )
              }
            >
              From "Budget Worksheet"
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
*/

export default BudgetOverview;
