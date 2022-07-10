import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppButton from "../../components/AppButton";

import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import Header from "../../components/Header";

function SavingsTipScreen() {
  const navigation = useNavigation();
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View style={defaultStyles.center}>
          <AppText style={defaultStyles.headline}>Savings Trick</AppText>
          <AppText style={defaultStyles.subHeadline}>
            Save First, NOT Last
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Here's why putting your SAVE money aside first is so important:
          </AppText>
          <AppText style={defaultStyles.subHeadline}>Listen up! </AppText>
          <AppText style={defaultStyles.text_on_dark}> THIS IS A</AppText>
          <AppText style={defaultStyles.headline}> BIG RULE</AppText>
          <AppText style={defaultStyles.text_on_dark}>about money.</AppText>
          <AppText style={defaultStyles.text_on_dark}>
            You can only spend it once. So if youare saving for a new bike, but
            decide to use money from your SAVE category to go see a movie, that
            money is gone. You now can't use it for your bike. Your dream of a
            bike just got farther away.
          </AppText>
          <AppButton
            title="Start Saving!"
            onPress={() => navigation.navigate("SavingsCalculator")}
          ></AppButton>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: defaultStyles.colors.primary,
  },
  text: {
    color: defaultStyles.colors.white,
  },
});

export default SavingsTipScreen;
