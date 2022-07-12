import React from "react";
import { ScrollView, View } from "react-native";

import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import defaultStyles from "../../constants/defaultStyles";

function BudgetOverview() {
  return (
    <Screen>
      <Header />
      <ScrollView>
        <View style={defaultStyles.center}>
          <AppText
            style={[
              defaultStyles.headline,
              { marginBottom: 20, marginTop: 20 },
            ]}
          >
            Budgetting 101
          </AppText>
          <AppText style={defaultStyles.subHeadline}>
            Assign every dollar a job
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            So no money slips through your fingers.
          </AppText>
          <AppText style={defaultStyles.subHeadline}>💵 </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            {" "}
            A budget helps you plan and evaluate your expenses.
          </AppText>
          <AppText style={defaultStyles.headline}> BE SPECIFIC</AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Budget for a specific period of time (such as weekly, biweekly,
            monthly) according to your pay schedule.
          </AppText>
          <AppText style={defaultStyles.text_on_dark}>
            Because income and expenses can vary from week to week, month to
            month, prepare a new budget each and every week or month. Enter all
            income and expenses each time you prepare a budget. Balance income
            with expenses, and spend less than you earn. For this practice you
            will use a monthly period. Link to Outside budget sheet:
          </AppText>
          <View style={[defaultStyles.link, { borderColor: defaultStyles.colors.accent, borderWidth: 3, padding: 10}, defaultStyles.center]}>
            <AppText style={defaultStyles.text_on_dark}>
              Find additional budget resources here:
            </AppText>
            <AppText
              style={defaultStyles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.churchofjesuschrist.org/bc/content/shared/english/pdf/callings/welfare/72727_FamilyBudgetWorksheet_pdf.pdf"
                )
              }
            >
              From "Budget Worksheet"
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default BudgetOverview;
