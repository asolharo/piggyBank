import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { assets, SIZES } from "../../../constants";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page4 = ({ navigation }) => {
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
            Fixed Expenses
          </AppText>
          <View style={styles.baseText}>
            <Text style={[defaultStyles.subHeadline, { textAlign: "center" }]}>
              Fixed expenses are constant. . . They do not fluctuate
            </Text>
            <Text style={defaultStyles.text_on_dark}>
              Most of these types of expenses will be monthly, but there may be
              some that occur more or less frequently.
            </Text>
            <Text style={defaultStyles.text_on_dark}>
              Fixed expenses cannot directly be controlled by spending habits;
              instead, fixed expenses are controlled by assessing your situation
              and making changes. 
              </Text>
              <Text style={defaultStyles.text_on_dark} >
              A good way to identify fixed expenses is to
              ask, “Does this expense occur regularly, and is this expense the
              same amount each time?”
            </Text>
          </View>
          <AppButton
            title="Next"
            color="#f194ff"
            onPress={() => navigation.navigate("Variable Expenses")}
          />
          <View style={[defaultStyles.center, { padding: 10 }]}>
            <Text
              style={[defaultStyles.link, {marginBottom:70}]}
              onPress={() =>
                Linking.openURL(
                  "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
                )
              }
            >
              Read About Fixed Expenses
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

export default Page4;
