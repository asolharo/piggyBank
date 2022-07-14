import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { assets, SIZES } from "../../../constants";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page3 = ({ navigation }) => {
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
          >Expenses</AppText>
            {/* </View> */}
            {/* <View style={styles.baseText}> */}
              <Text style={defaultStyles.text_on_dark}>
                The next step to creating a budget is to classify and estimate
                your expenses.
              </Text>
              <Text style={defaultStyles.text_on_dark}>
                Track your expenses and place them in categories. Then split our
                expenses into two types: “Fixed” and “Variable.” Below are some
                examples.
              </Text>
              <Image
                source={assets.expenses}
                style={{ resizeMode: "contain", width: 300, height: 200, }}
              />
            {/* </View> */}
            <AppButton
              title="Next"
              color="#f194ff"
              onPress={() => navigation.navigate("Fixed Expenses")}
            />
            {/* <Text>
              * from "Personal Finances for Self-Reliance", pages 57 and 58
            </Text> */}
            <View style={styles.baseText}>
              <Text
                style={[defaultStyles.link, {marginBottom:70}]}
                onPress={() =>
                  Linking.openURL(
                    "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
                  )
                }
              >
                More on Expense Tracking
              </Text>
            </View>
          </View>
        {/* </View> */}
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

export default Page3;
