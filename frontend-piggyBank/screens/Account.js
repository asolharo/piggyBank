import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../constants'
import AppButton from '../components/AppButton'

const Account = ({ route }) => {
  const baseUrl = 'http://localhost:3000'
  const [userInfo, setUserInfo] = useState()
  const userId = route.params.userId;

 function handleReset() {
  console.log('reset!');
 }

  React.useEffect(() => {
    const getUserInfo = async() => {
      try {
        const res = await fetch(`${baseUrl}/user/users/${userId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        const responseJson = await res.json()
        console.log(responseJson);
        setUserInfo(responseJson)
        
      } catch (err) {
        console.log(err);
      }
    }

    getUserInfo()
  }, [])

  if (!userInfo) {
    return <View></View>
  }

  return (
    <View style={styles.container}>
      <Text>Name: {userInfo.fullname}</Text>
      <Text>Email: {userInfo.email}</Text>
      <AppButton title='Reset Account' onPress={handleReset} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: SIZES.large,
  }
})

export default Account