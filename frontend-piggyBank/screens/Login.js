import React from 'react';
import { Text, View, TextInput, Dimensions, StyleSheet,TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    // Container
    <ScrollView
      style={{flex: 1, backgroundColor:'#ffffff'}}
      showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ImageBackground
          source={require('../assets/images/onboarding_1.png')}
          style={{
            height: Dimensions.get('window').height / 2.5,
          }}>
            <View style={styles.appNameBox}>
              <Text style={styles.appName}>Piggy Bank</Text>
            </View>
          </ImageBackground>

        {/* Middle */}
        <View style={styles.middle}>
          <View style={{padding: 40}}>
            <Text style={{color:'black', fontSize: 34}}>Welcome</Text>

            <View style={styles.container}>
              <View style={{marginTop: 50}}>
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
          </View>
        </View>
    </ScrollView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  appNameBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1967a3',
  },

  appName: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 15,
  },

  middle: {
    flex: 1.5,
    backgroundColor:'white',
    bottom: 50,
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
    marginTop:70,
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