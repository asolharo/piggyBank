import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "../components/FormikTextInput";

const LoginScreen = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  
  const baseUrl = 'http://localhost:3000'
  const navigation = useNavigation()
  
  const onSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch(`${baseUrl}/user/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const responseJson = await res.json()
      if (res.status === 200 && responseJson.token){
        navigation.navigate('Root', { 
          userId: responseJson.userId,
          token: responseJson.token
        })
        resetForm({ values: {
          email: values.email,
          password: ''
        }})
      } else {
        console.log("Can't login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email is incorrect")
      .required("Email is required"),
    password: yup
      .string()
      .min(3, "Password is too short")
      .required("Password is required"),
  });

  return (
    // Container
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="blue"
      />

      {/* Header */}
      <ImageBackground
        source={require("../assets/images/onboarding_1.png")}
        style={{
          height: Dimensions.get("window").height / 2.5,
        }}
      >
        <View style={styles.appNameBox}>
          <Text style={styles.appName}>Piggy Bank</Text>
        </View>
      </ImageBackground>

      {/* Middle */}
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <View>
              <FormikTextInput name="email" placeholder="Email" placeholderTextColor= "#000"/>
              <FormikTextInput
                name="password"
                placeholder="Password"
                placeholderTextColor= "#000"
                secureTextEntry={true}
              />
              <Pressable onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </Pressable>
            </View>
          )}
        </Formik>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>Not a member?</Text>
          <Pressable onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.link}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  appNameBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1967a3",
  },

  appName: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 15,
  },

  title: {
    fontSize: 30,
    paddingBottom: 10,
    paddingTop: 20,
  },
  btn: {
    backgroundColor: "#2245C4",
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  mb30: {
    marginBottom: 30,
  },
  link: {
    marginLeft: 5,
    color: "#1248a1",
    textDecorationLine: "underline",
  },
});
