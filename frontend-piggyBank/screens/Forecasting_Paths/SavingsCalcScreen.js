import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Formik } from "formik";

import CalcTextInput from "../../components/calcform/CalcTextInput";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import Header
 from "../../components/Header";

// How much to save to get to goal?
// Need: Goal Amount, Initial Balance, Time to grow, interest rate
// Yield: suggested monthly contribution
// Monthly PMT = InterestRate/12 * years*12, *

const SavingsCalcScreen = () => {
  let message;
  const onSubmit = async () => {
    let goalAmt = parseFloat(goal);
    let years = parseFloat(term);
    let interest = parseFloat(rate) / 100;

    let pmt = round(
      (goalAmt * (interest / 12)) /
        (Math.pow(1 + interest / 12, 12 * years) - 1)
    );

    // PMT= Goal(rate/12) / ( ((1+ (rate/12))^(12* years)) -1 )

    // This simple method rounds a number to two decimal places.
    function round(x) {
      return Math.round(x * 100) / 100;
    }

    message = `In order to reach your goal of $${goalAmt} you will need to save $${pmt} each month for ${years} years.`;
  };
  const [goal, setGoal] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const initialValues = {
    goal: { goal },
    term: { term },
    rate: { rate },
    message: { message },
  };
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View style={defaultStyles.center}>
          <Image
            resizeMode="contain"
            style={[defaultStyles.image, { width: "60%" }]}
            source={require("../../assets/images/onboarding_4.png")}
          />
          <Text style={defaultStyles.headline}>Savings Calculator</Text>
        </View>
        <View>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <View style={{ marginLeft: 20 }}>
                <Text style={defaultStyles.text_on_dark}>Goal Amount:</Text>
                <CalcTextInput
                  name="initial"
                  placeholder="$500"
                  onChangeText={(newGoal) => setGoal(newGoal)}
                  defaultValue={goal}
                />
                <Text style={defaultStyles.text_on_dark}>Length in Years:</Text>
                <CalcTextInput
                  name="term"
                  placeholder="5"
                  onChangeText={(newTerm) => setTerm(newTerm)}
                  defaultValue={term}
                />
                <Text style={defaultStyles.text_on_dark}>Interest Rate:</Text>
                <CalcTextInput
                  name="rate"
                  placeholder="5%"
                  onChangeText={(newRate) => setRate(newRate)}
                  defaultValue={rate}
                />
                <View style={defaultStyles.center}>
                  <AppButton
                    title="Calculate!"
                    onPress={handleSubmit}
                  ></AppButton>
                </View>
                <View style={{ width: "80%" }}>
                  <Text
                    style={[defaultStyles.text_on_dark, defaultStyles.center]}
                    onChangeText={(newmessage) => setInvest(newmessage)}
                    defaultValue={message}
                  >
                    {message}
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SavingsCalcScreen;
