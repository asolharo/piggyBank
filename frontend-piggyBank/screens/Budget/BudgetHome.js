import React from "react";
import { StyleSheet, View, Text, FlatList, Linking } from "react-native";
import defaultStyles from "../../constants/defaultStyles";
import Header from "../../components/Header";
import PathBar from "../../components/PathBar";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";

const BudgetMenu = [
  {
    title: "Learn budgeting",
    targetScreen: './learning/BudgetOverview',
    path: 'Learn Budgeting'
  },
  {
    title: "Create Your Budget",
    targetScreen: './BudgetCreate',
    path: 'Create Budget'
  },
];

function BudgetHome() {
  return (
    <Screen>
    <Header />
    <View style={defaultStyles.center}>
      <Text style={[defaultStyles.subHeadline, {marginTop: 60, marginBottom:20}]}>
        Keeping Track of What You've Got
      </Text>
      <Text style={defaultStyles.headline}>With a Budget</Text>
    </View>
        <AppText style= {defaultStyles.text_on_dark}>
        </AppText>

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
    </Screen>
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
