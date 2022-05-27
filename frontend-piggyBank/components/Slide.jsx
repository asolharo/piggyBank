import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Slide = ({ item }) => {

  const { width, height } = Dimensions.get('window')

  return (
    <View style={{ alignItems: 'center'}}>
      <Image source={item.image} style={{height: '75%', width: width , resizeMode: 'contain'}}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: 'center',
    lineHeight: 23,
  }
})

export default Slide