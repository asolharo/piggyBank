import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { assets, SIZES } from "../constants";
import Balance from "../components/Balance";
import LearningPath from "../components/LearningPath";
import { useIsFocused } from "@react-navigation/native";
import defaultStyles from "../constants/defaultStyles";
import PathBar from "../components/PathBar";
import Header from "../components/Header";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";

const forecastMenu = [
  {
    title: "Budget",
    targetScreen: "./SavingsTipScreen",
    path: "Savings Tips",
  },
  {
    title: "Forecasting",
    targetScreen: "./InvestTipScreen",
    path: "Investing Tips",
  },
];

function DashboardView() {
  // const baseUrl = 'http://localhost:3000'
  // const [userInfo, setUserInfo] = useState()
  // const userId = route.params.userId;
  // const isFocused = useIsFocused();

  return (
    <>
      <Screen>
        <Header />
        <View style={defaultStyles.padding}>
          <Text style={defaultStyles.subHeadline}>Welcome back!</Text>
          <Text style={defaultStyles.headline}>Let's Get Learning</Text>
          <Balance balance={"$1,000"} />
          <Text style={[defaultStyles.subHeadline, { marginTop: 20 }]}>
            Choose a path to get started:
          </Text>
        </View>
        <FlatList
          data={forecastMenu}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <PathBar title={item.title} path={item.path} />
          )}
        ></FlatList>
      </Screen>
    </>
  );
}

export default DashboardView;
