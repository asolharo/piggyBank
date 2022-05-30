import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';
import AppBarTab from './AppBarTab';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    height: 120,
    flexDirection: 'row',
  },
  subheading: {
    color: theme.colors.white,
    marginLeft: 20,
    marginTop: 30,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab 
          name="Login"
          navigateTo='Login'
        />
        <AppBarTab 
          name="Dashboard"
          navigateTo='Dashboard'
        />
      </ScrollView>
    </View>
  )
};

export default AppBar;