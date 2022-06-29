import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppText from '../../components/AppText';
import CalcForm from '../../components/calcform/CalcForm';
import CalcFormField from '../../components/calcform/CalcFormField';
import SubmitButton from '../../components/calcform/SubmitButton';
import Screen from '../../components/Screen';
import defaultStyles from '../../constants/defaultStyles'




function SavingsCalcScreen() {
  const navigation = useNavigation()
  return (
<Screen>
  <Text style={styles.title}>This is the Savings Calc screen</Text>
  <View >
    <CalcForm
     initialValues={{
       goal: "",
       investment: "",
       growYears: "",
       rate: "",
      }}
      onSubmit={() => console.log(values)}
      // validationSchema={validationSchema}
      >
      <AppText style={styles.text}>Enter Savings Goal:</AppText>
      <CalcFormField 
      keyboardType="numeric"
      name="goal"
      placeholder="$5,000"
      />
      <AppText style={styles.text}>Enter Initial Investment:</AppText>
       <CalcFormField 
      keyboardType="numeric"
      name="investment"
      placeholder="$100"
      />
      <AppText style={styles.text}>Enter Years it will Grow:</AppText>
       <CalcFormField 
      keyboardType="numeric"
      name="growYears"
      placeholder="3"
      />
      <AppText style={styles.text}>Enter Interest Rate:</AppText>
       <CalcFormField 
      keyboardType="numeric"
      name="rate"
      placeholder="0.85%"
      />
      <SubmitButton title="Calculate"/>
    </CalcForm>
  </View>
</Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize:30,
    color: defaultStyles.colors.primary,
  },
  text: {
    color: defaultStyles.colors.white,

  }
})

export default SavingsCalcScreen;