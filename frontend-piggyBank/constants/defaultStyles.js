import {  Dimensions, Platform } from 'react-native';

import colors from './colors';
import Constants from "expo-constants";


export default {
  center: {
    alignItems: 'center',
  },
  colors,
  container:{
    padding: 18,
  },
  container_welcome: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button_submit: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: 300
  },
  button_text: {
    color: colors.white,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.medium,
  },
  headline: {
    fontSize: 30,
    color: colors.primary,
    fontWeight : 'bold' 
  },
  icon: {
    color: colors.text_on_light,
  },
  image: {
    width: "100%",
    height: 300,
  },
  input: {
    borderColor: colors.secondary,
    backgroundColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "85%",
  },
  link: {
      marginLeft: 5,
      fontSize: 15,
      color: colors.text_on_dark,
      textDecorationLine: "underline",
  },
  padding: {
    padding: 10,
  },
  pathBar: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    height: 80,
    marginVertical: 20,
    padding: 10,
    width: "100%"
  },
  placeholder: {
    color: colors.light,
  },
  screenView: {
    backgroundColor: colors.background,
    flex: 1,
    padding: Constants.statusBarHeight,
    paddingTop: 20,
  },
  slider: {
    width: 250,
     height: 40
  },
  subHeadline: {
    fontSize: 24,
    color: colors.accent,
  },
  text_on_light: { 
    color: colors.text_on_light,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
},
  text_on_dark: {
    padding: 10,
    fontSize: 20,
    color: colors.text_on_dark,
},
text_button: {
  padding: 10,
  fontSize: 20,
  color: colors.text_on_light,
},
textInput: {
  borderColor: colors.secondary,
  color: colors.black,
},
text_slider: {
  marginTop: 10,
  fontSize: 15,
  color: colors.text_on_dark,
}
};