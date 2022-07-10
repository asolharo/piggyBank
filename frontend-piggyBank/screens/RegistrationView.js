import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "../components/FormikTextInput";
import { useNavigation } from "@react-navigation/native";
import Screen from "../components/Screen";
import defaultStyles from "../constants/defaultStyles";
import CalcTextInput from "../components/calcform/CalcTextInput";
import AppButton from "../components/AppButton";

const RegistrationView = () => {
  const baseUrl = "http://localhost:3000";

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

  const navigation = useNavigation();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const res = await fetch(`${baseUrl}/user/add-user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      console.log(json);
      navigation.navigate("Login");
    } catch (err) {
      console.log(err);
    }
  };

  const initialValues = {
    fullname: "",
    password: "",
    email: "",
  };

  return (
    <Screen>
      <View style={defaultStyles.center}>
        <Image
          resizeMode="contain"
          style={[defaultStyles.image, { width: "60%" }]}
          source={require("../assets/images/onboarding_3.png")}
        />
        
        <Text style={defaultStyles.subHeadline}>Create a new account</Text>
      </View>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={defaultStyles.center}>
            <CalcTextInput name="fullname" placeholder="Full Name" />
            <CalcTextInput
              name="email"
              placeholder="Email"
              autoCapitalize="none"
            />
            <CalcTextInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <AppButton 
            title='Create Account'
            onPress={handleSubmit} 
            >
            </AppButton>
          </View>
        )}
      </Formik>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={[defaultStyles.text_on_dark, {fontSize:13}, {marginTop:-6}]}>Do you already have an account?</Text>
        <Pressable 
        onPress={() => navigation.navigate("Login")}>
          <Text style={defaultStyles.link}>Login</Text>
        </Pressable>
      </View>
    </Screen>
  );
};

export default RegistrationView;
