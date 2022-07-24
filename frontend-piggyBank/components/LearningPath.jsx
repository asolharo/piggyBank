import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import defaultStyles from "../constants/defaultStyles";

const LearningPath = ({ title, path }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(path)}>
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
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     marginTop: 10,
//     backgroundColor: "#e6eced",
//     borderRadius: 15,
//   },
//   body: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// });

export default LearningPath;
