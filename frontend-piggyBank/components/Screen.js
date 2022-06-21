import React from 'react';
import Constants from "expo-constants";
import {SafeAreaView, StyleSheet, View} from 'react-native';

import defaultStyles from '../constants/defaultStyles';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
      {children}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.background,
    flex: 1,
    justifyContent: "center",
    padding: Constants.statusBarHeight,
    paddingTop: 20,
  },
})


export default Screen;