import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


import defaultStyles from '../constants/defaultStyles';

function AppButton({title, onPress, color = "primary"}) {
  return (

  <TouchableOpacity style={[styles.button, {backgroundColor: defaultStyles.colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}
      </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: 300
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }

})

export default AppButton;