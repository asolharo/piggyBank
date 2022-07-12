import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../../components/AppButton";

import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import Header from "../../components/Header";

function DebtTipScreen() {
  const navigation = useNavigation();
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View style={defaultStyles.center}>
          <AppText
            style={[
              defaultStyles.headline,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >
            Owing Money:
          </AppText>
          <AppText style={defaultStyles.subHeadline}>
            If you borrow money, you owe a debt
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            You have made a promise to pay back the
          </AppText>
          <AppText style={defaultStyles.subHeadline}>PRINCIPAL </AppText>

          <AppText style={defaultStyles.text_on_dark}>
            The problem with borrowing money is that it is way too easy to do.
            For each month that you still owe money you have to pay additional
            in interest. That means, you could end up paying a whole lot more
            for an item if you hae to borrow money to purchase it!
          </AppText>

          <AppButton
            title="How much interest?"
            onPress={() => navigation.navigate("Debt Pay-off")}
          ></AppButton>
        </View>
      </ScrollView>
    </Screen>
  );
}


export default DebtTipScreen;
