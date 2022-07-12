import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Page2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>First Step</Text>
      </View>
      <View style={styles.baseText}>
        <Text>Budgeting can also help you to protect your family from hardship as you use it to allocate money for building an emergency fund, paying down debt, and saving for future expenses.
        </Text>
        <Text>
        To build a budget, start with your income.
        </Text>

        <Text>
        Your income is the base amount to consider. The best practice is to keep expenses under your total income.
        </Text>

      </View>
      <Button
        title="Next"
        color="#f194ff"
        onPress={() => navigation.navigate('Expenses')}
      />
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


export default Page2;
