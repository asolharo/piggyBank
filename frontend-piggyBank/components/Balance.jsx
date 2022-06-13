import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NumberFormat from 'react-number-format'

const Balance = ({ balance, setBalance }) => {
  return (
    <View style={styles.container}>
    <Text style={{ paddingBottom: 10 }}>Current Balance: </Text>
      <NumberFormat 
        value={balance}
        displayType="text"
        thousandSeparator
        prefix="$"
        renderText={(value) => <Text  style={styles.number}>{value}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 30,
    backgroundColor: "#e6eced",
    borderRadius: 15,
  },
  number:{
    fontSize: 20,
  }
})

export default Balance