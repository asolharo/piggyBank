import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../constants'
import AppButton from '../components/AppButton'
import { FlipInEasyX } from 'react-native-reanimated'

const Account = ({ route }) => {
  const baseUrl = 'http://localhost:3000'
  const [userInfo, setUserInfo] = useState()
  const userId = route.params.userId;
  const token = route.params.token
  console.log(userId, token);

  // Handle reset account balance
  // REQUEST NOT WORKING - problem in the backend
  async function handleReset() {
    console.log(userInfo.fullname);

    const bodyReq = {
      fullname: userInfo.fullname,
      email: userInfo.email,
      password: 'fedfed', // hash the psw back
      accountBalance: 1000
    }
    try {
      const res = await fetch(`${baseUrl}/user/edit-user/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth': `Bearer ${token}`,
        },
        body: JSON.stringify(bodyReq)
      })
      console.log('blah blah')
      const status = await res.text()
      console.log(status);
      
    } catch (err) {
      console.log('error');
      console.log(err);
    }
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
      <View>
        <Text style={styles.text}>Name: {userInfo.fullname}</Text>
        <Text style={styles.text}>Email: {userInfo.email}</Text>
      </View>
      <Pressable onPress={handleReset} style={styles.btn}>
        <Text style={styles.btnText}>Reset Account</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: SIZES.large,
    height: '100%',
    justifyContent: 'space-between'
  },
  btn: {
    backgroundColor: "#2245C4",
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    marginBottom: 20
  }
})

export default Account