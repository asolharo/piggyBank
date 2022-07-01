import { Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Settings from './Settings'
import Dashboard from './Dashboard';
import Forecasting from './Forecasting_Paths/ForecastingScreen';
import SavingsCalcScreen from './Forecasting_Paths/SavingsCalcScreen';
import BudgetHome from './Budget/BudgetHome';
import BudgetCreate from './Budget/BudgetCreate';
import BudgetOverview from './Budget/BudgetOverview';
import DebtCalcScreen from './Forecasting_Paths/DebtCalcScreen'
import InvestCalcScreen from './Forecasting_Paths/InvestCalcScreen'

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

const Root = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name='Budget' component={BudgetHome} />
        <Drawer.Screen name='Forecasting' component={Forecasting} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name='SavingsCalculator' component={SavingsCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Create Budget' component={BudgetCreate} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Budget Overview' component={BudgetOverview} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Interest Calculator' component={InvestCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
        <Drawer.Screen name='Debt Pay-off' component={DebtCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
    </Drawer.Navigator>
  )
}

export default Root