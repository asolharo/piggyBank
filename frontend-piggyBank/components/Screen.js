import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import defaultStyles from '../constants/defaultStyles';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[defaultStyles.screenView, style]}>
      <View>
      {children}
      </View>
    </SafeAreaView>
  );
}



export default Screen;