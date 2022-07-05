import React from "react";
import { StyleSheet, View, Text, FlatList, Linking } from "react-native";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";

const BudgetMenu = [
  {
    title: "Learn budgeting",
    targetScreen: './BudgetOverview',
    path: 'Budget Overview'
  },
  {
    title: "Create your budget",
    targetScreen: './BudgetCreate',
    path: 'Create Budget'
  },
];

function BudgetHome() {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Budgeting</Text>
      </View>
      <View style={styles.baseText}>
        <Text>A budget helps you plan and evaluate your expenses.
          Budget for a specific period of time (such as weekly, biweekly, monthly) according to your pay schedule.
          Because income and expenses can vary from week to week, month to month, prepare a new budget each and every week or month.
          Enter all income and expenses each time you prepare a budget. Balance income with expenses, and spend less than you earn.

          For this practice you will use a monthly period.
        </Text>
      </View>
      <View style={styles.baseText}>
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://www.churchofjesuschrist.org/bc/content/shared/english/pdf/callings/welfare/72727_FamilyBudgetWorksheet_pdf.pdf')}>
          From "Budget worksheet"
        </Text>
      </View>

      <FlatList
      data={BudgetMenu}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <PathBar
        title={item.title}
        path={item.path}
        />
      )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "white",
  },
  baseText: {
    fontFamily: "Cochin",
    marginTop:20,
    padding:30,
    textAlign: 'justify'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});

export default BudgetHome;
