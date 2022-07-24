import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';

import Slide from '../components/Slide';
import { assets } from '../constants'

// import {COLORS, SLIDE1, SLIDE2, SLIDE3 } from '../constants'; 
import BottomOnBoard from '../components/BottomOnBoard';
import defaultStyles from '../constants/defaultStyles';

const slides = [
  {
      id: '1',
      image: assets.onboarding1,
      title: 'Tired of running out of money?!',
      subtitle: 'Best way to learn finances'
    },
    {
      id: '2',
      image: assets.onboarding2,
      title: 'The only learning tool you need',
      subtitle: 'Youth will learn to manage money'
    },
    {
      id: '3',
      image: assets.onboarding3,
      title: 'Free. Forever.',
      subtitle: 'Our mission is to help 1,000,000 students prepare for their future, by learning how to budget.'
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
    <View style={{flex:1, backgroundColor: defaultStyles.colors.secondary}}>
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


export default OnBoardingScreen;