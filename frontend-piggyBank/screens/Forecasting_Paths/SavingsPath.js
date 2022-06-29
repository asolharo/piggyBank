import React, { useState, useRef } from 'react';
import { StyleSheet, Dimensions, FlatList } from "react-native";

import Routes from '../../navigation/Routes';
import Screen from '../../components/Screen';


import assets from '../../constants/assets';
import Slide from '../../components/Slide';
import BottomOnBoard from '../../components/BottomOnBoard';

const SavingsSlides = [
  {
    id: '1',
    title: "Savings Tip",
    image: assets.savingstip,
    subtitle: "A helpful Tip will go here!",
    targetScreen: Routes.SAVINGS_TIP
  },
  {
    id: '2',
    title: "Savings Calculator",
    image: assets.savingstip,
    subtitle: "This is the Calculator Screen",
    targetScreen: Routes.SAVINGS_CALC
  },
]

const { width, height } = Dimensions.get('window')

const SavingsPath = () => {
  const [currSlideIndex, setCurrSlideIndex] = useState(0)
  const ref = useRef(null)

  const updateCurrentSlideIndex = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setCurrSlideIndex(currentIndex)
  }

  const goNextSlide = () => {
    const nextSlideIndex = currSlideIndex + 1;
    if(nextSlideIndex != SavingsSlides.length) {
      const offset = nextSlideIndex * width
      ref?.current?.scrollToOffset({ offset })
      setCurrSlideIndex(nextSlideIndex)
    }
  }

  const skip = () => {
    const lastSlideIndex = SavingsSlides.length - 1
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset })
    setCurrSlideIndex(lastSlideIndex)
  }

  return (
    // <Screen style={styles.container}>
<FlatList 
          pagingEnabled
          ref={ref}
          onMomentumScrollBegin={updateCurrentSlideIndex}
          data={SavingsSlides}
          contentContainerStyle={{ height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <Slide item={item} />}
        >
        <BottomOnBoard SavingsSlides={SavingsSlides} currSlideIndex={currSlideIndex} nextSlide={goNextSlide} skip={skip}/>
    </FlatList>
  // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    width: "100%",
  },
 
});

export default SavingsPath;