import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { assets, SIZES } from "../../../constants";


const Page5 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Variable Expenses</Text>
      </View>
      <View style={styles.baseText}>
        <Text>Variable expenses are not the same amount each month.There are some variable expenses that are not directly controlled by your spending habits. For example, expenses like your utility
bills (water, gas, electric, and so on) fluctuate based on usage. However, even though the monthly amount may vary, you can still budget for these.
When it comes to budgeting, the most important variable ex- penses are the ones you have the most control over. These are directly controlled by your spending habits. A good way to identify many of these expenses is to ask yourself, “Do I buy this from a store (or online)?” For many variable expenses, you can make the choice to spend more or less in these areas. Examples include groceries, fuel, eating out, cell phones, and entertainment.
        </Text>
      </View>
      <Button
        title="Next"
        color="#f194ff"
        onPress={() => navigation.navigate('Example')}
      />

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


export default Page5;
