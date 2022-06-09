import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Dashboard = ({ route, navigation }) => {
  const userId  = route.params.userId
  const baseUrl = 'http://localhost:3000'
  const [userInfo, setUserInfo] = useState({})

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
  
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Welcome, { userInfo.fullname }</Text>
      <Text>{ userInfo.email }</Text>
      <Text>Balance: ${ userInfo.accountBalance.$numberDecimal }</Text>
    </View>
  )
}

export default Dashboard