import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

// Initialize the navigation object
const Stack = createStackNavigator();

// Create the default theme for the app
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroud: 'transparent', 
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login">
        <Stack.Screen 
          name='Login'
          component={Login}
        />
        <Stack.Screen 
          name='Dashboard'
          component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
