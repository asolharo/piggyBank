import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import defaultStyles from '../constants/defaultStyles'

const Slide = ({ item }) => {

  return (
    <View style={[defaultStyles.center, defaultStyles.onboard_view]}>
      <Image source={item.image} style={{flex: 1,height: '60%', width: '100%', resizeMode: 'contain'}}/>
      <Text style={defaultStyles.onboard_title}>{item.title}</Text>
      <Text style={[defaultStyles.onboard_subtitle, {textAlign: 'center'}]}>{item.subtitle}</Text>
    </View>
  )
}


export default Slide