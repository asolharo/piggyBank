import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { assets, SIZES } from "../../../constants";


const Page4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Fixed Expenses</Text>
      </View>
      <View style={styles.baseText}>
        <Text>Fixed expenses are for a definite amount and do not change. Most of these expenses will be monthly, but there may be some that occur more or less frequently. Fixed expenses cannot directly
be controlled by spending habits; instead, fixed expenses are controlled by assessing your situation and making changes. A
good way to identify fixed expenses is to ask, “Does this expense occur regularly, and is this expense the same amount each time?”
        </Text>
      </View>
      <Button
        title="Next"
        color="#f194ff"
        onPress={() => navigation.navigate('Variable Expenses')}
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


export default Page4;
