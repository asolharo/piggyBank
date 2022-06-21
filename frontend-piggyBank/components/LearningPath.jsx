import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const LearningPath = ({ title, path }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(path)}>
      <View style={styles.body}>
        <Text style={{ fontSize: 16 }}>{title}</Text>
        <Icon
        name='chevron-right'
        type='font-awesome'
        color='#517fa4'
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: "#e6eced",
    borderRadius: 15,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})

export default LearningPath