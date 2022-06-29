import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
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
      <View style={styles.pathBar}>
        <Text style={styles.text}>{title}</Text>
        <MaterialCommunityIcons
          style={styles.icon}
          name="chevron-right"
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    color:  defaultStyles.colors.black,
  },
  text: {
    fontSize: 25,
  },
  pathBar: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    flexDirection: "row",
    height: 80,
    marginVertical: 20,
    padding: 10,
    width: "100%"
  },

});

export default PathBar;
