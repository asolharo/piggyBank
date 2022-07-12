import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { assets, SIZES } from "../../../constants";


const Page6 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Example Budget</Text>
      </View>
      <View style={styles.baseText}>
        <Text>On a table put your income on the first row, then your fixed expenses followed with your variable expenses. You can have 4 columns:
        </Text>
        <Text>Concept  /  Incomes  /  Expenses  /  Balance
</Text>
        <Text>This is an example of a basic budget</Text>
        <Image source={assets.example} style={{ resizeMode: "contain", width:300, height: 200}} />
      </View>
      <Text>* from "Personal Finances for Self-Reliance", page 59</Text>
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


export default Page6;
