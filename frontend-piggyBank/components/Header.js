import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { assets } from '../constants'
import defaultStyles from '../constants/defaultStyles'


function Header ({ name }){


  return (
    <>
      <View style={[defaultStyles.header,defaultStyles.center, defaultStyles.padding]}>
        <Text style={defaultStyles.headline}>Hey {name}</Text>
        <Image source={assets.avatar} style={{ resizeMode: "contain", width: 70, height: 70}} />
      </View>
    </>
  );
}
  


export default Header;