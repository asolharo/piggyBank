import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import Balance from '../../components/Balance';

const BudgetCreate = ({ route }) => {
    const [donation, Slider_donations] = useState();
    const [savings, Slider_savings] = useState();
    const [food, Slider_food] = useState();
    const [rent, Slider_rent] = useState();
    const [utilities, Slider_utilities] = useState();

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
          //console.log(responseJson);
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
    //console.log(`Test: ${userId}`)

    const initialBudget = userInfo.accountBalance.$numberDecimal
    const expenses = donation + savings + food + rent + utilities
    var mssg = ""

    var finalBudget = 0
    if (expenses > initialBudget) {
        finalBudget = expenses - initialBudget
        mssg = "You spend more than you earn by " + finalBudget
    } else {
        finalBudget = initialBudget - expenses
        mssg = "Your balance is " + finalBudget
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Create Budget</Text>

            <Balance balance={userInfo.accountBalance.$numberDecimal} setBalance={setUserInfo} />

            <View>
                <Text>Church donations: {donation}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => Slider_donations(sliderValue)
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <View>
                <Text>Savings: {savings}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => Slider_savings(sliderValue)
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <View>
                <Text>Food: {food}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => Slider_food(sliderValue)
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <View>
                <Text>Mortgage or Rent: {rent}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={100}
                value={0}
                onValueChange={
                (sliderValue) => Slider_rent(sliderValue)
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <View>
                <Text>Utilities: {utilities}</Text>
                <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={
                (sliderValue) => Slider_utilities(sliderValue)
                }
                thumbTintColor="#656566"
                style={{width: 300, height: 40}}
            />
            </View>
            <Button
        title="Save budget"
        onPress={() => Alert.alert('Your monthly income is: ' + initialBudget + '\n\
        \nYour monthly expenses are\nChurch donations: ' + donation + '\
        \nSavings: ' + savings + '\
        \nFood: ' + food + '\
        \nMortgage or Rent: ' +  rent + '\
        \nUtilities: ' +  utilities + '\n\n' + mssg)}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems:"flex-start",
        marginTop: 100,
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
    }

  });

export default BudgetCreate
