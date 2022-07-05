import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from "formik";

import AppText from '../../components/AppText';
import CalcForm from '../../components/calcform/CalcForm';
import CalcFormField from '../../components/calcform/CalcFormField';
import SubmitButton from '../../components/calcform/SubmitButton';

import CalcTextInput from '../../components/calcform/CalcTextInput';
import AppButton from "../../components/AppButton";
import Screen from '../../components/Screen';
import defaultStyles from '../../constants/defaultStyles'

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

    let pmt = round((  (goalAmt * (interest/12)) / (Math.pow((1 + interest/12),(12 * years)) - 1 )  ));

// PMT= Goal(rate/12) / ( ((1+ (rate/12))^(12* years)) -1 )

    // This simple method rounds a number to two decimal places.
    function round(x) {
      return Math.round(x * 100) / 100;
    }

    message = `In order to reach your goal of $${goalAmt} you will need to save $${pmt} each month for $${years} years.`;
  }
  const [goal,setGoal] = useState('');
  const [term,setTerm] = useState('');
  const [rate,setRate] = useState('');
  const initialValues = {
    goal: {goal},
    term: {term},
    rate: {rate},
    message: {message}
  };
  return (
    <Screen>
      <Text style={styles.title}>Savings Goal Calc screen</Text>
      <View>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <View>
              <Text style={{ padding: 10, fontSize: 20 }}>
                Goal Amount:
              </Text>
              <CalcTextInput 
              name="initial" 
              placeholder="$500"
              onChangeText={newGoal => setGoal(newGoal)} 
              defaultValue={goal} />
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
              placeholder="5%"
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

export default SavingsCalcScreen;