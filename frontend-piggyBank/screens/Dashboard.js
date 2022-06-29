import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { assets, SIZES } from '../constants'
import Balance from '../components/Balance'
import LearningPath from '../components/LearningPath'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Dashboard = ({ route }) => {
  const userId  = route.params.userId
  const baseUrl = 'http://localhost:3000'
  const [userInfo, setUserInfo] = useState()
  const navigation = useNavigation()

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
    <>
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Hey {userInfo.fullname}</Text>
            <Image source={assets.avatar} style={{ resizeMode: "contain", width: 70, height: 70}} />
          </View>
          <Text style={{ marginTop: -10 }}>Welcome back!</Text>
          <Balance balance={userInfo.accountBalance.$numberDecimal} setBalance={setUserInfo} />
          <Text style={{ marginTop: 30, fontSize: 20 }}>Learning Paths</Text>
          <View style={{marginTop: 10}}>
            <LearningPath title="Budget" path="Budgeting"/>
            <LearningPath title="Financial Planning" path="Forecasting"/>
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: SIZES.large,
  },
  welcome:{
    fontSize: SIZES.superLarge,
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default Dashboard