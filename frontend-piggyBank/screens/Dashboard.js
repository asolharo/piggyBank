import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { assets, SIZES } from "../constants";
import Balance from "../components/Balance";
import LearningPath from "../components/LearningPath";
import { useIsFocused } from "@react-navigation/native";
import defaultStyles from "../constants/defaultStyles";
import PathBar from "../components/PathBar";
import Header from "../components/Header";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";

const forecastMenu = [
  {
    title: "Budget",
    targetScreen: "./SavingsTipScreen",
    path: "Savings Tips",
  },
  {
    title: "Forecasting",
    targetScreen: "./ForecastingScreen",
    path: "Forecasting",
  },
];

const Dashboard = ({ route }) => {
  const baseUrl = "http://localhost:3000";
  const [userInfo, setUserInfo] = useState();
  const userId = route.params.userId;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await fetch(`${baseUrl}/user/users/${userId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const responseJson = await res.json();
        console.log(responseJson);
        setUserInfo(responseJson);
      } catch (err) {
        console.log(err);
      }
    };
    if (isFocused) {
      getUserInfo();
    }
  }, [isFocused]);

  if (!userInfo) {
    return <View></View>;
  }

  return (
    <>
      <Screen>
        <View
          style={[
            defaultStyles.header,
            defaultStyles.center,
            defaultStyles.padding,
          ]}
        >
          <Text style={defaultStyles.subHeadline}>Hey {userInfo.fullname}</Text>
          <Image
            source={assets.avatar}
            style={{ resizeMode: "contain", width: 70, height: 70 }}
          />
        </View>

        <View style={defaultStyles.padding}>
          <Text style={defaultStyles.subHeadline}>Welcome back!</Text>
          <Text style={defaultStyles.headline}>Let's Get Learning</Text>
          <Balance
            balance={userInfo.accountBalance.$numberDecimal}
            setBalance={setUserInfo}
          />
           <Text style={[defaultStyles.subHeadline, { marginTop: 20 }]}>
            Choose a path to get started:
          </Text>
          </View>
          <FlatList
          data={forecastMenu}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <PathBar title={item.title} path={item.path} />
          )}
        ></FlatList>
      </Screen>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: SIZES.large,
//   },
//   welcome: {
//     fontSize: SIZES.superLarge,
//   },
//   welcomeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// });

export default Dashboard;
