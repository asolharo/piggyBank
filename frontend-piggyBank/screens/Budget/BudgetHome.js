import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";


// import routes from "../navigation/Routes";

const forecastMenu = [
  {
    title: "Create your budget",
    targetScreen: './BudgetCreate',
    path: 'BudgetCreate'
  }
];

function BudgetHome() {
  return (
    <Screen style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Budgeting</Text>
      </View>
      <View style={styles.baseText}>
        <Text style={styles.baseText}>A budget helps you plan and evaluate your expenses.
Budget for a specific period of time (such as weekly, biweekly, monthly) according to your pay schedule.
Because income and expenses can vary from week to week, month to month, prepare a new budget each and every week or month.
Enter all income and expenses each time you prepare a budget. Balance income with expenses, and spend less than you earn.

For this practice you will use a monthly period.
        </Text>
      </View>
      <View style={styles.baseText}>
        <Text style={styles.baseText}>
          From "Budget worksheet"
          https://www.churchofjesuschrist.org/bc/content/shared/english/pdf/callings/welfare/72727_FamilyBudgetWorksheet_pdf.pdf
        </Text>
      </View>

      <FlatList
      data={forecastMenu}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <PathBar
        title={item.title}
        path={item.path}
        />
      )}
      >
      </FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    width: "100%",
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});

export default BudgetHome;
