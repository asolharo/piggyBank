import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const LearningPath = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
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