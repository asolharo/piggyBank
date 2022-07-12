import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../../components/AppButton";

import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import Header from "../../components/Header";

function InvestTipScreen() {
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
            Discover Investing:
          </AppText>
          <AppText style={defaultStyles.subHeadline}>
            Investments are for the long-term
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Money you set aside to
          </AppText>
          <AppText style={defaultStyles.subHeadline}>INVEST </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            {" "}
            is money that you will
          </AppText>
          <AppText style={defaultStyles.headline}> not need</AppText>
          <AppText style={defaultStyles.text_on_dark}>
            for emergencies or everyday expenses.
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            It's smart to put some money in investments – they earn more than a regular savings account. It's also wise to
            divide your money among different kinds of investments. While
            one investment may lose value, another may not. 
          </AppText>
   
          <AppButton
            title="Start Investing!"
            onPress={() => navigation.navigate("Interest Calculator")}
          ></AppButton>
        </View>
      </ScrollView>
    </Screen>
  );
}


export default InvestTipScreen;
