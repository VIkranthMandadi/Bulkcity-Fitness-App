import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

type LoginPageProps = {
  navigation: NavigationProp<any>;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BULK CITY</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>
            DON'T HAVE AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height:"100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
    fontFamily: "Copperplate",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "black",
    fontFamily: "Copperplate",
  },
  forgotPassword: {
    color: "#0096FF",
    marginBottom: 20,
    fontFamily: "Optima",
  },
  loginButton: {
    width: "55%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    fontFamily: "Copperplate",
  },
  loginButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Copperplate",
  },
  signupText: {
    color: "white",
    fontFamily: "Optima",
  },
  signupLink: {
    color: "#0096FF",
    fontFamily: "Optima",
  },
});

export default LoginPage;
