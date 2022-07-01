import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";
import Routes from "../../navigation/Routes";

const forecastMenu = [
  {
    title: "Savings Goal",
    targetScreen: './SavingsCalcScreen',
    path: 'SavingsCalculator'
  },
  {
    title: "Interest Calculator",
    targetScreen: './SavingsCalcScreen',
    path: 'Interest Calculator'
  },
  {
    title: "Debt Pay-off",
    targetScreen: './SavingsCalcScreen',
    path: 'Debt Pay-off'
  },
];

function ForecastingScreen() {
  return (
    <Screen style={styles.container}>
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
 
});

export default ForecastingScreen;
