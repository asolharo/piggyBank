import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import { Link, useNavigation } from '@react-navigation/native';



const Registration = () => {

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
  
  const navigation = useNavigation()
  
  const onSubmit = (values) => {
    console.log(values);
  };
  
  const initialValues = {
    username: "",
    password: "",
  };
  
  return (
    <View style={styles.container}>
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
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            />
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Create Account</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <View style={{flexDirection: "row", justifyContent: 'center' }}>
        <Text>Do you alredy have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Registration