import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';

import AppText from '../../components/AppText';
import Screen from '../../components/Screen';
import defaultStyles from '../../constants/defaultStyles'

function DebtTipScreen() {
  const navigation = useNavigation()
  return (
<Screen>
  <AppText style={styles.title}>This is the Debt Tip/educational screen</AppText>
  <View >
<AppText>A helpful tip will go here:</AppText>
<AppButton title="NavtoCalc" onPress={() => navigation.navigate('Debt Pay-off')}></AppButton>
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

export default DebtTipScreen;