import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";
import Routes from "../../navigation/Routes";

const forecastMenu = [
  {
    title: "Savings Goal",
    targetScreen: './SavingsTipScreen',
    path: 'Savings Tips'
  },
  {
    title: "Interest Calculator",
    targetScreen: './InvestTipScreen',
    path: 'Investing Tips'
  },
  {
    title: "Debt Pay-off",
    targetScreen: './DebtTipScreen',
    path: 'Debt Pay-off Tips'
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
