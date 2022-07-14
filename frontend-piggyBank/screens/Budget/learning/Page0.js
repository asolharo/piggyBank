import { View, Text, ScrollView } from "react-native";
import React from "react";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import Header from "../../../components/Header";
import defaultStyles from "../../../constants/defaultStyles";

const Page0 = ({ navigation }) => {
  return (
    <Screen>
      <Header />
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
            Budgetting 101
          </AppText>
          <AppText style={defaultStyles.subHeadline}>💵 </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            {" "}
            A budget helps you plan and evaluate your expenses. The most
            important part of budgetting is being specific and
          </AppText>

          <AppText style={defaultStyles.subHeadline}>
            Assign every dollar a job
          </AppText>

          {/* <Text style={[defaultStyles.text_on_dark, {fontSize:15}]}>
            * from "Personal Finances for Self-Reliance", pages 57 and 58
          </Text> */}
        </View>
        <View style={defaultStyles.center}>
          <AppButton
            title="Next"
            onPress={() => navigation.navigate("What is a Budget?")}
          ></AppButton>
        </View>
        <View style={[defaultStyles.center, { padding: 10 }]}>
          <Text
            style={[defaultStyles.link, {marginBottom:70}]}
            onPress={() =>
              Linking.openURL(
                "https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng"
              )
            }
          >
            Additional Info on Budgetting
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Page0;
