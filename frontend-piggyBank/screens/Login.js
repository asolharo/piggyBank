import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

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
      <Button
        title="Log in"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={{flexDirection: 'row'}}>
        <Text>Don't have an account? </Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('CreateAccount')}
        />
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
  }
});

export default LoginScreen;