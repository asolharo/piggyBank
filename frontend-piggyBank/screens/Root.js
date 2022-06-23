import { Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Settings from './Settings'
import Dashboard from './Dashboard';
import Forecasting from './ForecastingScreen';
import SavingsCalcScreen from './SavingsCalcScreen';
import Budgeting from './Budgeting';

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
        <Drawer.Screen name='Budgeting' component={Budgeting} />
        <Drawer.Screen name='Forecasting' component={Forecasting} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name='SavingsCalculator' component={SavingsCalcScreen} options={{ drawerItemStyle: {display: 'none'}}}/>
    </Drawer.Navigator>
  )
}

export default Root