import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page1 = ({ navigation }) => {
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View
          style={[defaultStyles.center, { flex: 1, flexDirection: "column" }]}
        >
          {/* <View style={styles.container}>
            <View style={styles.baseText}> */}
              <AppText
                style={[
                  defaultStyles.headline,
                  { marginBottom: 20, marginTop: 20 },
                ]}
              >
                Learn How to Budget
              </AppText>
              <Text style={defaultStyles.subHeadline}>A budget is a Plan.</Text>
            </View>
            <View >
              <Text style={defaultStyles.text_on_dark}>
                Using a budget, you plan how you will use your money for a
                certain period of time.
              </Text>
              <Text style={defaultStyles.text_on_dark}>
                Following a budget will help you and your family take control of
                your life. Budgeting can also help you to protect your family
                from hardship as you use it to allocate money for building an
                emergency fund, paying down debt, and saving for future
                expenses.
              </Text>
            </View>
            <View style={defaultStyles.center}>
              <AppButton
              style={defaultStyles.link}
                title="Next"
                onPress={() => navigation.navigate("A Protection")}
              ></AppButton>
            </View>
            {/* <Text>
              * from "Personal Finances for Self-Reliance", pages 57 and 58
            </Text> */}
            <View style={defaultStyles.center}>
              <Text
                style={[defaultStyles.link, {marginBottom:70}]}
                onPress={() =>
                  Linking.openURL(
                    "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
                  )
                }
              >
                Additional Resources
              </Text>
            </View>
          {/* </View>
        </View> */}
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

export default Page1;
