import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../../components/Screen";
import BudgetCreate from "./BudgetCreate";

function BudgetOverview() {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Budgeting</Text>
      </View>
      <View style={styles.baseText}>
        <Text>This is the Overview screen
        </Text>
      </View>

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

export default BudgetOverview;
