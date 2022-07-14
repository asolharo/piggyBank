import React from "react";
import { StyleSheet, View, Text, Button, Image, ScrollView, Linking } from "react-native";
import { assets, SIZES } from "../../../constants";

import AppButton from "../../../components/AppButton";
import AppText from "../../../components/AppText";
import Screen from "../../../components/Screen";
import defaultStyles from "../../../constants/defaultStyles";


const Page5 = ({navigation}) => {
  return (
    <Screen>
    <ScrollView>
      <View
        style={[defaultStyles.center, { flex: 1, flexDirection: "column" }]}
      >
          <AppText
            style={[
              defaultStyles.headline,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >
          Variable Expenses
          </AppText>
      </View>
      <View style={styles.baseText}>
        <Text style={[defaultStyles.subHeadline, {textAlign: 'center'}]}>Variable expenses are not the same amount each month.
        </Text>
        <Text style={defaultStyles.text_on_dark}>
        There are some variable expenses that are not directly controlled by your spending habits.
        </Text>
        <Text style={defaultStyles.text_on_dark}>
           For example, expenses like your utility
bills (water, gas, electric, and so on) fluctuate based on usage. However, even though the monthly amount may vary, you can still budget for these.
</Text>
        <Text style={defaultStyles.text_on_dark}>
When it comes to budgeting, the most important variable ex- penses are the ones you have the most control over. These are directly controlled by your spending habits. 
</Text>
        <Text style={defaultStyles.text_on_dark}>A good way to identify many of these expenses is to ask yourself, 
        </Text>
        <Text style={[defaultStyles.subHeadline, {textAlign: 'center'}]}>
        “Do I buy this from a store (or online)?”
        </Text>
        <Text style={defaultStyles.text_on_dark}>
         For many variable expenses, you can make the choice to spend more or less in these areas. Examples include groceries, fuel, eating out, cell phones, and entertainment.
        </Text>
      </View>
      <View style={defaultStyles.center}>

      <AppButton
        title="Next"
        color="#f194ff"
        onPress={() => navigation.navigate('Example')}
        />
        </View>
      <View style={[defaultStyles.center, { padding: 10 }]}>
        <Text 
        style={[defaultStyles.link, {marginBottom:90}]}
              onPress={() => Linking.openURL('https://www.churchofjesuschrist.org/manual/personal-finances-for-self-reliance?lang=eng')}>
          Go to manual
        </Text>
      </View>
    </ScrollView>
    </Screen>
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
