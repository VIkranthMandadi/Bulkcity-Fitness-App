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


type SignUpProps = {
  navigation: NavigationProp<any>;
};

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  return (
   
      <View style={styles.container}>
        <Text style={styles.title}>BULK CITY</Text>

        <Text style={styles.signupText}>
          Sign Up
            <Text style={styles.signupLink} id={'1'} > SIGN UP!</Text>
        </Text>
      </View>
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


export default SignUp;