import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';

import AppText from '../../components/AppText';
import Screen from '../../components/Screen';
import defaultStyles from '../../constants/defaultStyles'

function SavingsTipScreen() {
  return (
<Screen>
  <AppText style={styles.title}>This is the Savings Calc Tip screen</AppText>
  <View >
<AppText>Helpful tip here:</AppText>
<AppButton title="NavtoCalc"></AppButton>
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

export default SavingsTipScreen;