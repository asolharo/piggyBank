import React from 'react';
import { Text, View, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          //onChangeText={(text) => onChangeEmail(text)}
          placeholder="Enter your username"
          placeholderTextColor="lightgray"
        />
      </View>
      <View style={styles.fields}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          //onChangeText={(text) => onChangePassword(text)}
          placeholder="Enter your password"
          placeholderTextColor="lightgray"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.btn1Text}>Log in</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity style={{height:50}}>
          <Text style={styles.btn2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 0,
    paddingLeft: 8,
    borderRadius: 30,
  },
  fields: {
    marginTop: 20,
  },
  btn1: {
    margin: 30,
    marginTop:100,
    backgroundColor: '#1866a3',
    width: 300,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:30,
  },
  btn1Text:{
    fontSize:20,
    color:'white',
    alignSelf:'center',
  },
  btn2: {
    fontSize:14,
    color:'teal'
  }
});

export default LoginScreen;