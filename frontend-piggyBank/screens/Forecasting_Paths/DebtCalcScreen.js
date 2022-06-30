import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";

import CalcTextInput from "../../components/calcform/CalcTextInput";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import defaultStyles from "../../constants/defaultStyles";

const DebtCalcScreen = () => {
  let message;
  let payment;
  let total;
  let totalinterest;

  const onSubmit = async () => {
    let principal = parseFloat(amount);
    let interest = parseFloat(rate) / 100 / 12;
    let payments = parseFloat(length) * 12;
    // MonthlyPayment = BalanceRemaining * interestRate / (1 – (1 + interestRate)-NumberRemainingPayments)
    // Now compute the monthly payment figure, using esoteric math.
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x - 1);

    if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

         payment = round(monthly);
         total = round(monthly * payments);
         totalinterest = 
            round((monthly * payments) - principal);
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
         payment = "";
         total  = "";
         totalinterest  = "";
    }

    // This simple method rounds a number to two decimal places.
    function round(x) {
      return Math.round(x * 100) / 100;
    }


    message = `You're monthly payment will be $${payment}. You're total amount paid will be $${total}. Total interest paid will be $${totalinterest}`;
    console.log(message);
  };

  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [length, setLength] = useState("");
  const initialValues = {
    amount: { amount },
    rate: { rate },
    length: { length },
    payment: { payment },
    total: { total },
    totalinterest: { totalinterest },
    message: { message },
  };
  return (
    <Screen>
      <Text style={styles.title}>This is the Debt Calc screen</Text>
      <View>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <View>
              <Text style={{ padding: 10, fontSize: 20 }}>
                Amount of Loan/Remaining Balance:
              </Text>
              <CalcTextInput
                name="amount"
                placeholder="$500"
                onChangeText={(newAmount) => setAmount(newAmount)}
                defaultValue={amount}
              />
              <Text style={{ padding: 10, fontSize: 20 }}>Interest Rate:</Text>
              <CalcTextInput
                name="rate"
                placeholder=".5%"
                onChangeText={(newRate) => setRate(newRate)}
                defaultValue={rate}
              />
              <Text style={{ padding: 10, fontSize: 20 }}>
                Repayment Period in Years:
              </Text>
              <CalcTextInput
                name="length"
                placeholder=".5%"
                onChangeText={(newLength) => setLength(newLength)}
                defaultValue={length}
              />

              <AppButton title="Calculate!" onPress={handleSubmit}></AppButton>
              <Text
                onChangeText={(newmessage) => setMessage(newmessage)}
                defaultValue={message}
              >
                {message}
              </Text>
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
export default DebtCalcScreen;
