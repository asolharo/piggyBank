
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CalcTextInput from "../../components/calcform/CalcTextInput";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";
import { Formik } from "formik";


// Investment Calculator /Compound Interest
// 


const InvestCalcScreen = () => {
  let message;
  const onSubmit = async () => {
    let i = parseFloat(invest);
    let t = parseFloat(term);
    let r = 1 +( parseFloat(rate) / 100);
    // FV = investment(1+rate)term
    let futureValue = '$' + (i * Math.pow(r, t));
    message = `In ${t} years your initial investment of $${i} will grow to ${futureValue}.`;
  }
  const [invest,setInvest] = useState('');
  const [term,setTerm] = useState('');
  const [rate,setRate] = useState('');
  const initialValues = {
    invest: {invest},
    term: {term},
    rate: {rate},
    message: {message}
  };
  return (
    <Screen>
      <Text style={styles.title}>Investment Calc screen</Text>
      <View>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <View>
              <Text style={{ padding: 10, fontSize: 20 }}>
                Initial Investment:
              </Text>
              <CalcTextInput 
              name="initial" 
              placeholder="$500"
              onChangeText={newInvest => setInvest(newInvest)} 
              defaultValue={invest} />
              <Text style={{ padding: 10, fontSize: 20 }}>
                Length in Years:
              </Text>
              <CalcTextInput name="term" 
              placeholder="5" 
              onChangeText={newTerm => setTerm(newTerm)} 
              defaultValue={term}
              />
              <Text style={{ padding: 10, fontSize: 20 }}>Interest Rate:</Text>
              <CalcTextInput name="rate" 
              placeholder=".5%"
              onChangeText={newRate => setRate(newRate)} 
              defaultValue={rate} />
              <AppButton
                title="Calculate!"
                onPress={handleSubmit}
              ></AppButton>
        <Text
         onChangeText={newmessage => setInvest(newmessage)} 
         defaultValue={message}
        >{message}</Text>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: defaultStyles.colors.primary,
  },
  text: {
    color: defaultStyles.colors.black,
  },
  textinput: {},
});
export default InvestCalcScreen;
