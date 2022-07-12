import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { SIZES } from "../constants";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "../components/FormikTextInput";
import defaultStyles from "../constants/defaultStyles";
import Screen from "../components/Screen";

const Account = ({ route }) => {
  const baseUrl = "http://localhost:3000";
  const [userInfo, setUserInfo] = useState();
  const userId = route.params.userId;
  const token = route.params.token;
  //console.log(userId, token);

  // Handle reset account balance
  async function handleReset() {
    const bodyReq = {
      fullname: userInfo.fullname,
      email: userInfo.email,
      password: "fedfed", // hash the psw back
      accountBalance: 1000,
    };
    try {
      const res = await fetch(`${baseUrl}/user/edit-user/${userId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyReq),
      });
      const status = await res.text();
      console.log(status);
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  }

  React.useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await fetch(`${baseUrl}/user/users/${userId}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const responseJson = await res.json();
        console.log(responseJson);
        setUserInfo(responseJson);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  }, []);

  if (!userInfo) {
    return <View></View>;
  }

  const initialValues = {
    newBalance: "",
  };

  const validationSchema = yup.object().shape({
    newBalance: yup.string().required("Amount is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const bodyReq = {
      fullname: userInfo.fullname,
      email: userInfo.email,
      password: "fedfed", // hash the psw back
      accountBalance: parseInt(values.newBalance),
    };
    try {
      const res = await fetch(`${baseUrl}/user/edit-user/${userId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyReq),
      });
      const status = await res.text();
      console.log(status);
      resetForm({
        values: {
          newBalance: "",
        },
      });
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={defaultStyles.text_on_dark}>
              Name: {userInfo.fullname}
            </Text>
            <Text style={defaultStyles.text_on_dark}>
              Email: {userInfo.email}
            </Text>
          </View>
          <View style={styles.containerFormik}>
            <Text style={defaultStyles.headline}>Came up Short?</Text>
            <Text style={defaultStyles.subHeadline}>Change Balance Amount</Text>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <View>
                  <FormikTextInput
                    name="newBalance"
                    placeholder="$1,500"
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                  />
                  <View style={defaultStyles.center}>
                    <Pressable
                      onPress={handleSubmit}
                      style={defaultStyles.button_submit}
                    >
                      <Text style={styles.btnText}>Change the Balance</Text>
                    </Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </View>

          <View style={defaultStyles.center}>
            <Text style={defaultStyles.subHeadline}>Budgetting is Hard!</Text>
            <Text style={defaultStyles.headline}>Need a Re-Do?</Text>
            <Pressable
              onPress={handleReset}
              style={defaultStyles.button_submit}
            >
              <Text style={styles.btnText}>Reset Account</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.large,
    height: "100%",
    justifyContent: "space-between",
  },
  containerFormik: {
    padding: 30,
  },
  btn: {
    backgroundColor: "#2245C4",
    padding: 15,
    margin: 15,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Account;
