import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable, unstable_enableLogBox } from 'react-native';
import Slider from '@react-native-community/slider'
import Balance from '../../components/Balance';

const BudgetCreate = ({ route }) => {
    const [donation, setDonations] = useState(0);
    const [savings, setSavings] = useState(0);
    const [food, setFood] = useState(0);
    const [rent, setRent] = useState(0);
    const [utilities, setUtilities] = useState(0);
    const [balance, setBalance] = useState(0);

    const userId  = route.params.userId
    const baseUrl = 'http://localhost:3000'
    const [userInfo, setUserInfo] = useState()


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
          setUserInfo(responseJson)
          setBalance(responseJson.accountBalance.$numberDecimal)
        } catch (err) {
          console.log(err);
        }
      }
      getUserInfo()
    }, [])

    if (!userInfo) {
        return <View></View>
    }

    const handleSubmit = () => {
      console.log('press!');
    }
    
    return (
      <>
        <Balance balance={balance}  />
        <View style={styles.container}>
            <View>
                <Text>Church donations: ${donation}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => {
                  setDonations(sliderValue)
                  setBalance(balance - (sliderValue - donation))
                }}
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
                />
            </View>
            <View>
                <Text>Savings: ${savings}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => {
                  setSavings(sliderValue)
                  setBalance(balance - (sliderValue - savings))
                }
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
                />
            </View>
            <View>
                <Text>Food: ${food}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => {
                  setFood(sliderValue)
                  setBalance(balance - (sliderValue - food))
                }
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
                />
            </View>
            <View>
                <Text>Mortgage or Rent: ${rent}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => {
                  setRent(sliderValue)
                  setBalance(balance - (sliderValue - rent))
                }
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <View>
                <Text>Utilities: ${utilities}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => {
                  setUtilities(sliderValue)
                  setBalance(balance - (sliderValue - utilities))
                }
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
        </View>
        <Pressable onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.btnText}>Save Budget</Text>
        </Pressable>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems:"flex-start",
      marginTop: 30,
      marginLeft:30
    },
    baseText: {
      fontFamily: "Cochin",
      marginTop:20,
      padding:30,
      textAlign: 'justify'
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    btn: {
      backgroundColor: "#2245C4",
      padding: 15,
      margin: 15,
      borderRadius: 15,
      marginBottom: 40,
    },
    btnText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 18,
    },

  });

export default BudgetCreate
