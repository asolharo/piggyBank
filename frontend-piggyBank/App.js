import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AppBar from './components/AppBar';

import OnBoardingScreen from './screens/OnBoardingScreen';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './constants';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Registration from './screens/Registration';


// Initialize the navigation object
const Stack = createStackNavigator();


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
              initialRouteName="OnBoardingScreen"
              screenOptions={{
                headerShown: false
              }}>
              <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                  header: props => <AppBar {...props} />
                }}
              />
              <Stack.Screen 
                name='Dashboard'
                component={Dashboard}
                options={{
                  header: props => <AppBar {...props} />
                }}
              />
              <Stack.Screen 
                name='Registration'
                component={Registration}
                options={{
                  header: props => <AppBar {...props} />
                }}
              />
              {isAppFirstLaunch && <Stack.Screen 
                name='OnBoardingScreen'
                component={OnBoardingScreen}
              />}
              
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )
  );
}

export default App;
