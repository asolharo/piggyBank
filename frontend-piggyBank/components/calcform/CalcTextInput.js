import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../constants/defaultStyles";

function CalcTextInput({ icon, ...otherProps }) {
  return (
    <View style={defaultStyles.input}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.white}
          style={defaultStyles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.placeholder}
        style={defaultStyles.textInput}
        {...otherProps}
      />
    </View>
  );
}

export default CalcTextInput;
