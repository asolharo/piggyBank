import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { assets, SIZES } from "../../../constants";


const Page3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Expenses</Text>
      </View>
      <View style={styles.baseText}>
        <Text>The next step to creating a budget is to classify and estimate your expenses.
        </Text>
        <Text>
        Track your expenses and place them in categories. Then split our expenses into two types: “Fixed” and “Variable.” Below are some examples.
        </Text>
        <Image source={assets.expenses} style={{ resizeMode: "contain", width:300, height: 200}} />
      </View>
      <Text>* from "Personal Finances for Self-Reliance", pages 57 and 58</Text>
      <View style={styles.baseText}>
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng')}>
          Go to manual
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  baseText: {
    fontFamily: "Cochin",
    marginTop:10,
    padding:30,
    textAlign: 'justify'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});


export default Page3;
