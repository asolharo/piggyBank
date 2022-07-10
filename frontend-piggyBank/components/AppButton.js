import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


import defaultStyles from '../constants/defaultStyles';

function AppButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity style={defaultStyles.button_submit} onPress={onPress}>
        <Text style={defaultStyles.button_text}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}


export default AppButton;