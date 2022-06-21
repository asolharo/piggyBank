import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import PathBar from "../components/PathBar";
import Screen from "../components/Screen";


// import routes from "../navigation/Routes";

const forecastMenu = [
  {
    title: "Savings Goal",
    targetScreen: './SavingsCalcScreen'
  },
  {
    title: "Interest Calculator",
    targetScreen: './SavingsCalcScreen'
  },
  {
    title: "Debt Pay-off",
    targetScreen: './SavingsCalcScreen'
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