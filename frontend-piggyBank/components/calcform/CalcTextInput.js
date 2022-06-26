import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../../constants/defaultStyles';


function CalcTextInput({icon, ...otherProps}) {
  return (
 <View style={styles.container}>
  {icon && <MaterialCommunityIcons name={icon}  size={20}  color={defaultStyles.colors.medium}  style={styles.icon}/>}
  <TextInput 
  placeholderTextColor={defaultStyles.colors.dark}
  style={defaultStyles.textInput} {...otherProps}/>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    // borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderColor: defaultStyles.colors.secondary,
    borderWidth: 1,
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    backgroundColor: defaultStyles.colors.accent,
  
  }

})
export default CalcTextInput;