import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from '@react-navigation/native';

const BottomOnBoard = ({ slides, currSlideIndex, nextSlide, skip }) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation()
  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currSlideIndex === index && {
                width: 25,
              },
            ]}
          />
        ))}
      </View>
      <View style={{ marginBottom: 40 }}>
        {currSlideIndex === slides.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity style={[styles.btn]}>
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: SIZES.medium,
                }}
                onPress={() => navigation.replace("Login")}
              >
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: SIZES.medium,
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity style={[styles.btn]} onPress={nextSlide}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontWeight: "bold",
                    fontSize: SIZES.medium,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomOnBoard;
