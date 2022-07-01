import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Slider from '@react-native-community/slider'

const BudgetCreate = () => {
    const [donation, Slider_donations] = useState(0);
    const [savings, Slider_savings] = useState(0);
    const [food, Slider_food] = useState(0);
    const [rent, Slider_rent] = useState(0);
    const [utilities, Slider_utilities] = useState(0);

const initialBudget = 1000
const expenses = donation + savings + food + rent + utilities
var mssg = ""

var balance = 0
if (expenses > initialBudget) {
    balance = expenses - initialBudget
    mssg = "You spend more than you earn by " + balance
} else {
    balance = initialBudget - expenses
    mssg = "Your balance is " + balance
}

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Create Budget</Text>

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
        title="Press me"
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
