import React from "react";
import { StyleSheet, View, Text, Dimensions, SafeAreaView, StatusBar, Platform, FlatList } from "react-native";

function BudgetOverview() {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Learn How to Budget</Text>
      </View>
      <View style={styles.baseText}>
        <Text>A budget is a Plan.
        </Text>
        <Text>Using a budget, you plan how you will use your money for a certain period of time.
        </Text>
        <Text>Following a budget will help you and your family take control of your life. Budgeting can also help you to protect your family from hardship as you use it to allocate money for building an emergency fund, paying down debt, and saving for future expenses.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  baseText: {
    fontFamily: "Cochin",
    marginTop:10,
    padding:30,
    textAlign: 'justify'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});


export default BudgetOverview;
