import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './constants';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Registration from './screens/Registration';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Root from './screens/Root';

// Initialize the navigation object
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null)
  useEffect( async() => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched")
    if (appData == null) {
      setIsAppFirstLaunch(true)
      AsyncStorage.setItem("isAppFirstLaunched", "false")
    } else {
      setIsAppFirstLaunch(false)
    }
  }, [])
  return (
    isAppFirstLaunch != null && (
        <>
        {Platform.OS === 'ios' &&
        <View style={{
            width: "100%",
            height: 100, // For all devices, even X, XS Max
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: COLORS.white}}
        />}
        
        <SafeAreaView>

        </SafeAreaView>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen 
                name='Login'
                component={Login}
              />
              <Stack.Screen 
                name='Root'
                component={Root}
              />
              <Stack.Screen
                name='Registration'
                component={Registration}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )
  );
}

export default App;
