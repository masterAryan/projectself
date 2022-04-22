import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Header } from "react-native-elements";
let customFonts = {
  "Bubblegum-Sans": require("../assets/Fonts/BubblegumSans-Regular.ttf"),
};


export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/image.png")}
        style={{ height: RFValue(372) }}
      >
        <View>
          <Header
            backgroundColor={"violet"}
            centerComponent={{
              text: "Daily Routine",
              style: { color: "#fff", fontSize: 40 },
            }}
          />

          <TouchableOpacity style={styles.button}>
            <Image
              source={require("../assets/Google_icon.png")}
              style={styles.googleIcon}
            ></Image>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.guestButton}>
            <Image
              source={require("../assets/guest.png")}
              style={styles.guest}
            ></Image>
            <Text style={styles.googleText}>Guest Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf: "center",
    bottom: RFValue(-90),
  },
  guestButton: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf: "center",
    bottom: RFValue(-150),
  },
  googleIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain",
    justifyContent: "space-evenly",
  },
  googleText: {
    color: "black",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans",
  },
  guest: {
    width: RFValue(50),
    height: RFValue(50),
    left: RFValue(-10),
    resizeMode: "contain",
  },
});

export default login;
