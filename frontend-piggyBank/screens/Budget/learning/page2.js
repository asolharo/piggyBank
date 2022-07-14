import React from "react";
import { StyleSheet, View, Text, Button, ScrollView, Linking } from "react-native";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page2 = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView>
        <View
          style={[defaultStyles.center, { flex: 1, flexDirection: "column" }]}
        >
            <AppText
            style={[
              defaultStyles.headline,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >First Step</AppText>
              <Text style={defaultStyles.text_on_dark}>
                Budgeting can also help you to protect your family from hardship
                as you use it to allocate money for building an emergency fund,
                paying down debt, and saving for future expenses.
              </Text>
              <Text style={[defaultStyles.subHeadline, {textAlign: 'center'}]}>
                To build a budget, start with your income.</Text>

                <Text style={defaultStyles.text_on_dark}>
                Your income is the base amount to consider. The best practice is
                to keep expenses under your total income.
              </Text>
            </View>
            <View style={defaultStyles.center}>

            <AppButton
              title="Next"
              color="#f194ff"
              onPress={() => navigation.navigate("Expenses")}
              />
              </View>
            <View style={defaultStyles.center}>
              <Text
                style={[defaultStyles.link, {marginBottom:70}]}
                onPress={() =>
                  Linking.openURL(
                    "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
                  )
                }
              >
                Need more Practice?
              </Text>
            </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  baseText: {
    fontFamily: "Cochin",
    marginTop: 10,
    padding: 30,
    textAlign: "justify",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Page2;
