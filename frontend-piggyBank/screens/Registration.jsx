import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../components/FormikTextInput';
import { useNavigation } from '@react-navigation/native';
import defaultStyles from '../constants/defaultStyles';


const Registration = () => {
  const baseUrl = 'http://localhost:3000'

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

  
  const navigation = useNavigation()
  
  const onSubmit = async (values) => {
    console.log(values)
    try {
      const res = await fetch(`${baseUrl}/user/add-user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const json = await res.json()
      console.log(json);
      navigation.navigate('Login')
    } catch (err) {
      console.log(err);
    }
  };
  
  const initialValues = {
    fullname: "",
    password: "",
    email: ""
  };
  
  return (
    <View style={{backgroundColor: defaultStyles.dark}}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.mb30}>Create a new account</Text>

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput 
              name="fullname" 
              placeholder="Full Name" 
            />
            <FormikTextInput 
              name="email" 
              placeholder="Email" 
              autoCapitalize='none'
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize='none'
            />
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Create Account</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <View style={{flexDirection: "row", justifyContent: 'center' }}>
        <Text>Do you already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,

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
    color: '#1248a1',
    textDecorationLine: 'underline'
  }
})

export default Registration