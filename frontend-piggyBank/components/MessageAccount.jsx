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
        color: 'white',
        padding: 15,
        margin: 15,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        fontSize: 16,
    },
    success: {  
        color: 'white',
        padding: 15,
        margin: 15,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 15,
        fontSize: 16,
    }
})

export default Message