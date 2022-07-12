import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import Header from "../../components/Header";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";
import Routes from "../../navigation/Routes";
import defaultStyles from "../../constants/defaultStyles";

const forecastMenu = [
  {
    title: "Savings Goal",
    targetScreen: "./SavingsTipScreen",
    path: "Savings Tips",
  },
  {
    title: "Interest Calculator",
    targetScreen: "./InvestTipScreen",
    path: "Investing Tips",
  },
  {
    title: "Debt Pay-off",
    targetScreen: "./DebtTipScreen",
    path: "Debt Pay-off Tips",
  },
];

function ForecastingScreen() {
  return (
    <Screen>
      <Header />
      <View style={defaultStyles.center}>
        <Text style={[defaultStyles.subHeadline, {marginTop: 60}]}>
          It's never too early to start
        </Text>
        <Text style={defaultStyles.headline}>Planning for the Future</Text>
      </View>

      <FlatList
        style={styles.container}
        data={forecastMenu}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <PathBar title={item.title} path={item.path} />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 200,
    width: "100%",
  },
});

export default ForecastingScreen;
