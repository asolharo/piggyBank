import React, { useState } from "react";
import { View,Text, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
import AppText from "../../components/AppText";
import Slider from "@react-native-community/slider";
import Balance from "../../components/Balance";
import { useIsFocused } from "@react-navigation/native";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import defaultStyles from "../../constants/defaultStyles";
import App from "../../App";

// const BudgetCreate2 = ({ route }) => {
//     const [donation, setDonations] = useState(0);
//     const [savings, setSavings] = useState(0);
//     const [food, setFood] = useState(0);
//     const [rent, setRent] = useState(0);
//     const [utilities, setUtilities] = useState(0);
//     const [balance, setBalance] = useState(0);
//     const isFocused = useIsFocused();

//     const userId  = route.params.userId
//     const baseUrl = 'http://localhost:3000'
//     const [userInfo, setUserInfo] = useState()

//     React.useEffect(() => {
//       const getUserInfo = async() => {
//         try {
//           const res = await fetch(`${baseUrl}/user/users/${userId}`, {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//             }
//           })
//           const responseJson = await res.json()
//           setUserInfo(responseJson)
//           setBalance(responseJson.accountBalance.$numberDecimal)
//         } catch (err) {
//           console.log(err);
//         }
//       }
//       if(isFocused){
//         getUserInfo()
//       }
//     }, [isFocused])

//     if (!userInfo) {
//         return <View></View>
//     }

function BudgetCreate2() {
  const balance = 1000;
  const donation = 100;
  const expenses = 400;
  const savings = 200;
  const food = 200;
  const rent = 400;
  const utilities = 50;

  const handleSubmit = () => {
    const expenses = donation + savings + food + rent + utilities;
    if (balance > expenses) {
      Alert.alert("Under budget");
    } else if (balance == 0) {
      Alert.alert("No money left in the balance");
    } else {
      Alert.alert("Over budget");
    }
  };

  return (
    <>
      <Screen>
        <Header />
        <ScrollView style={defaultStyles.padding}>

        <Text style={defaultStyles.subHeadline}>Lots of Items</Text>
          <Text style={defaultStyles.headline}>Let's Get Budgetting</Text>
          <Balance balance={balance} />
          <View style={[defaultStyles.center, { marginTop: 30 }]}>
            <View>
              <AppText style={defaultStyles.text_slider}>
                Charitable Donations: ${donation}
              </AppText>
              <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={(sliderValue) => {
                  setDonations(sliderValue);
                  setBalance(balance - (sliderValue - donation));
                }}
                thumbTintColor="#656566"
                style={defaultStyles.slider}
              />
            </View>
            <View>
              <AppText style={defaultStyles.text_slider}>
                Savings: ${savings}
              </AppText>
              <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={(sliderValue) => {
                  setSavings(sliderValue);
                  setBalance(balance - (sliderValue - savings));
                }}
                thumbTintColor="#656566"
                style={defaultStyles.slider}
              />
            </View>
            <View>
              <AppText style={defaultStyles.text_slider}>Food: ${food}</AppText>
              <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={(sliderValue) => {
                  setFood(sliderValue);
                  setBalance(balance - (sliderValue - food));
                }}
                thumbTintColor="#656566"
                style={defaultStyles.slider}
              />
            </View>
            <View>
              <AppText style={defaultStyles.text_slider}>
                Housing: ${rent}
              </AppText>
              <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={(sliderValue) => {
                  setRent(sliderValue);
                  setBalance(balance - (sliderValue - rent));
                }}
                thumbTintColor="#656566"
                style={defaultStyles.slider}
              />
            </View>
            <View>
              <AppText style={defaultStyles.text_slider}>
                Utilities: ${utilities}
              </AppText>
              <Slider
                maximumValue={1000}
                minimumValue={0}
                minimumTrackTintColor="#76d6ff"
                maximumTrackTintColor="#01579B"
                step={1}
                value={0}
                onValueChange={(sliderValue) => {
                  setUtilities(sliderValue);
                  setBalance(balance - (sliderValue - utilities));
                }}
                thumbTintColor="#656566"
                style={defaultStyles.slider}
              />
            </View>
          </View>
          
          <View style={defaultStyles.center}>
            <Pressable
              onPress={handleSubmit}
              style={defaultStyles.button_submit}
            >
              <AppText style={defaultStyles.button_text}>Save Budget</AppText>
            </Pressable>
          </View>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "flex-start",
  //   marginTop: 30,
  //   marginLeft: 30,
  // },
  baseText: {
    fontFamily: "Cochin",
    marginTop: 20,
    padding: 30,
    textAlign: "justify",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
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

export default BudgetCreate2;
