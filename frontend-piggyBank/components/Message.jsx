import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Message = ({ text, type }) => {
  return (
    <View>
        {
            type == 'error'
            ? <Text style={styles.error}>{text}</Text>
            : <Text style={styles.success}>{text}</Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    },
    success: {  
        color: 'green'
    }
})

export default Message