import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Pressable,
  ScrollView,
  Linking,
} from "react-native";
import { assets, SIZES } from "../../../constants";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page6 = ({ navigation }) => {
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
          >
            Example Budget
          </AppText>
          <Text style={defaultStyles.text_on_dark}>
            On paper, make a table by putting your income on the first row, then
            your fixed expenses followed by your variable expenses.
          </Text>
          <Text style={defaultStyles.text_on_dark}>
            You will have 4 columns:
          </Text>
          <Text style={[defaultStyles.subHeadline, { textAlign: "center" }]}>
            Concept · Income · Expenses · Balance
          </Text>
          <Text style={defaultStyles.text_on_dark}>
            This is an example of a basic budget:
          </Text>
          <Image
            source={assets.example}
            style={{ resizeMode: "contain", width: 300, height: 200 }}
          />

          <View>
            <AppButton
              title=" Go Back"
              onPress={() => navigation.navigate("Budget")}
            ></AppButton>
            <AppButton
              title=" Create a Budget"
              onPress={() => navigation.navigate("Create Budget")}
            ></AppButton>
          </View>
          <View style={[defaultStyles.center, { padding: 10 }]}>
            <Text
              style={[defaultStyles.link, { marginBottom: 90 }]}
              onPress={() =>
                Linking.openURL(
                  "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
                )
              }
            >
              Checkout the Finance Manual
            </Text>
          </View>
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

export default Page6;
