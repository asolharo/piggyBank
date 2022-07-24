import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../constants/defaultStyles";
import { useNavigation } from "@react-navigation/native";


function PathBar({
  title,
  path,
  onPress,

}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(path)
      }}
    >
      <View style={defaultStyles.pathBar}>
        <Text style={defaultStyles.text_button}>{title}</Text>
        <MaterialCommunityIcons
          style={defaultStyles.icon}
          name="chevron-right"
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
}


export default PathBar;
