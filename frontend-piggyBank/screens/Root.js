import React, {useState} from 'react'
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Account from './Account';
import Dashboard from './Dashboard';
import Forecasting from './Forecasting_Paths/ForecastingScreen';
import SavingsCalcScreen from './Forecasting_Paths/SavingsCalcScreen';
import BudgetHome from './Budget/BudgetHome';
import BudgetCreate from './Budget/BudgetCreate';
import DebtCalcScreen from './Forecasting_Paths/DebtCalcScreen'
import InvestCalcScreen from './Forecasting_Paths/InvestCalcScreen'
import SavingsTipScreen from './Forecasting_Paths/SavingsTipScreen'
import InvestTipScreen from './Forecasting_Paths/InvestTipScreen'
import DebtTipScreen from './Forecasting_Paths/DebtTipScreen'
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
import Header from '../components/Header';
import Page0 from './Budget/learning/Page0';
import Page1 from './Budget/learning/Page1';
import Page2 from './Budget/learning/Page2';
import Page3 from './Budget/learning/Page3';
import Page4 from './Budget/learning/Page4';
import Page5 from './Budget/learning/Page5';
import Page6 from './Budget/learning/Page6';

const Root = ({ route }) => {
  const userId = route.params.userId
  const token = route.params.token

  // Initialize the navigation object
  const Drawer = createDrawerNavigator();

  // Get the info of the person logged in
  const baseUrl = "http://localhost:3000";
  const [userInfo, setUserInfo] = useState();
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await fetch(`${baseUrl}/user/users/${userId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const responseJson = await res.json();
        console.log(responseJson);
        setUserInfo(responseJson);
      } catch (err) {
        console.log(err);
      }
    };
    if (isFocused) {
      getUserInfo();
    }
  }, [isFocused]);

  if (!userInfo) {
    return <View></View>;
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Header name={userInfo.fullname}/>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => props.navigation.navigate('Login')}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} initialParams={{ userId: userId }}/>
        <Drawer.Screen name='Budget' component={BudgetHome} />
        <Drawer.Screen name='Forecasting' component={Forecasting} />
        <Drawer.Screen name="Account" component={Account} initialParams={{ userId: userId, token: token }}/>
        <Drawer.Screen name='Create Budget' component={BudgetCreate} initialParams={{ userId: userId }} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='SavingsCalculator' component={SavingsCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Savings Tips' component={SavingsTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Interest Calculator' component={InvestCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Investing Tips' component={InvestTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Debt Pay-off' component={DebtCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Debt Pay-off Tips' component={DebtTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>

        <Drawer.Screen name='Budgeting 101' component={Page0} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='What is a Budget?' component={Page1} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='A Protection' component={Page2} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Expenses' component={Page3} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Fixed Expenses' component={Page4} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Variable Expenses' component={Page5} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Example' component={Page6} options={{ drawerItemStyle: {display: 'none'}}}/>
    </Drawer.Navigator>
  )
}

export default Root