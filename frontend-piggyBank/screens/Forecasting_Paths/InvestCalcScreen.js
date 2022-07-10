import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CalcTextInput from "../../components/calcform/CalcTextInput";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import { Formik } from "formik";
import Header from "../../components/Header";

// Investment Calculator /Compound Interest
//

const InvestCalcScreen = () => {
  let message;
  const onSubmit = async () => {
    let i = parseFloat(invest);
    let t = parseFloat(term);
    let r = 1 + parseFloat(rate) / 100;
    // FV = investment(1+rate)term
    let futureValue = "$" + i * Math.pow(r, t);
    message = `In ${t} years your initial investment of $${i} will grow to ${futureValue}.`;
  };
  const [invest, setInvest] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const initialValues = {
    invest: { invest },
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
            source={require("../../assets/images/onboarding_2.png")}
          />
          <Text style={defaultStyles.subHeadline}>Investment Calculator</Text>
        </View>
        <View>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
               <View style={{ marginLeft: 20 }}>
                <Text style={defaultStyles.text_on_dark}>
                  Initial Investment:
                </Text>
                <CalcTextInput
                  name="initial"
                  placeholder="$500"
                  onChangeText={(newInvest) => setInvest(newInvest)}
                  defaultValue={invest}
                />
                <Text style={defaultStyles.text_on_dark}>Length in Years:</Text>
                <CalcTextInput
                  name="term"
                  placeholder="5"
                  onChangeText={(newTerm) => setTerm(newTerm)}
                  defaultValue={term}
                />
                <Text style={defaultStyles.text_on_dark}>
                  Interest Rate:
                  </Text>
                <CalcTextInput
                  name="rate"
                  placeholder=".5%"
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

export default InvestCalcScreen;
