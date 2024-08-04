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
        >
          <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
          
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          DON'T HAVE AN ACCOUNT? 
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink} id={'1'} > SIGN UP!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    color: "black",
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
    fontFamily: "Papyrus",
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
    fontFamily: "Optima",
  },
  forgotPassword: {
    color: "#0096FF",
    marginBottom: 20,
    fontFamily: "Optima",
  },
  loginButton: {
    width: "70%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Papyrus",
  },
  signupText: {
    color: "white",
    fontFamily: "Optima",
  },
  signupLink: {
    color: "#0096FF",
    fontFamily: "Optima",
    marginBottom: -2,
  
  },
});


export default LoginPage;