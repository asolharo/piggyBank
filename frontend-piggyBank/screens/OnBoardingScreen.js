import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';

import Slide from '../components/Slide';
import { assets } from '../constants'

import {COLORS, SLIDE1, SLIDE2, SLIDE3 } from '../constants'; 
import BottomOnBoard from '../components/BottomOnBoard';

const slides = [
  {
      id: '1',
      image: assets.onboarding1,
      title: 'Best way to learn finances',
      subtitle: 'Tired of running out of money?!'
    },
    {
      id: '2',
      image: assets.onboarding2,
      title: 'Best way to learn finances',
      subtitle: 'Tired of running out of money?!'
    },
    {
      id: '3',
      image: assets.onboarding3,
      title: 'Best way to learn finances',
      subtitle: 'Tired of running out of money?!'
    }
]

const { width, height } = Dimensions.get('window')

const OnBoardingScreen = () => {

  const [currSlideIndex, setCurrSlideIndex] = useState(0)
  const ref = useRef(null)

  const updateCurrentSlideIndex = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setCurrSlideIndex(currentIndex)
  }

  const goNextSlide = () => {
    const nextSlideIndex = currSlideIndex + 1;
    if(nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width
      ref?.current?.scrollToOffset({ offset })
      setCurrSlideIndex(nextSlideIndex)
    }
  }

  const skip = () => {
    const lastSlideIndex = slides.length - 1
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset })
    setCurrSlideIndex(lastSlideIndex)
  }

  return (
    <View style={{flex:1, backgroundColor: COLORS.white}}>
        <FlatList 
          pagingEnabled
          ref={ref}
          onMomentumScrollBegin={updateCurrentSlideIndex}
          data={slides}
          contentContainerStyle={{ height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <Slide item={item} />}
        />
        <BottomOnBoard slides={slides} currSlideIndex={currSlideIndex} nextSlide={goNextSlide} skip={skip}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default OnBoardingScreen;