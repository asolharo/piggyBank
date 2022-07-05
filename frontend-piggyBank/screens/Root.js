import React from 'react'
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
import BudgetOverview from './Budget/BudgetOverview';
import DebtCalcScreen from './Forecasting_Paths/DebtCalcScreen'
import InvestCalcScreen from './Forecasting_Paths/InvestCalcScreen'
import SavingsTipScreen from './Forecasting_Paths/SavingsTipScreen'
import InvestTipScreen from './Forecasting_Paths/InvestTipScreen'
import DebtTipScreen from './Forecasting_Paths/DebtTipScreen'

// Initialize the navigation object
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
}

const Root = ({ route }) => {
  const userId = route.params.userId
  const token = route.params.token
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} initialParams={{ userId: userId }}/>
        <Drawer.Screen name='Budget' component={BudgetHome} />
        <Drawer.Screen name='Forecasting' component={Forecasting} />
        <Drawer.Screen name="Account" component={Account} initialParams={{ userId: userId, token: token }}/>
        <Drawer.Screen name='Create Budget' component={BudgetCreate} initialParams={{ userId: userId }} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Budget Overview' component={BudgetOverview} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='SavingsCalculator' component={SavingsCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Savings Tips' component={SavingsTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Interest Calculator' component={InvestCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Investing Tips' component={InvestTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Debt Pay-off' component={DebtCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Debt Pay-off Tips' component={DebtTipScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
    </Drawer.Navigator>
  )
}

export default Root