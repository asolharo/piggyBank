import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import ForecastingScreen from './screens/Forecasting_Paths/ForecastingScreen';
import SavingsCalcScreen from './screens/Forecasting_Paths/SavingsCalcScreen';

export default function App() {
  return (
    <NavigationContainer>
<SavingsCalcScreen/>
    </NavigationContainer>
  );
}
