import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import AppBar from './components/AppBar';
import Registration from './components/Registration';

// Initialize the navigation object
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login">
        <Stack.Screen 
          name='Login'
          component={Login}
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
        <Stack.Screen 
          name='Dashboard'
          component={Dashboard}
          options={{
            header: props => <AppBar {...props} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
