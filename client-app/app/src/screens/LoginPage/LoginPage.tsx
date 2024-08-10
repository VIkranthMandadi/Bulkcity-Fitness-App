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

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import axios from "axios"; 


type LoginPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "LoginPage">;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  return (
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
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>
            DON'T HAVE AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP!</Text>
          </Text>
        </TouchableOpacity>
        </View>

  
  );
};
    

  {/* const fetchData = () => {
    axios
      .get("http://localhost:3000/exercises")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }; */}
  {/* return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BULK </Text>
        <Text style={styles.titleCity}>CITY</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        placeholderTextColor="#cdf1ff"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#cdf1ff"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        DON'T HAVE AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP!</Text>
      </Text>
    </View>
  ); */}

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
    backgroundColor: "#20333a",
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 50,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#7dc3df",
    fontFamily: "Helvetica",
  },
  titleCity: {
    fontSize: 60,
    fontWeight: "bold",
    color: "cdf1ff",
    fontFamily: "Helvetica",
  },
  input: {
    width: "88%",
    height: 50,
    backgroundColor: "#2b444e",
    borderRadius: 7,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#000",
    fontWeight: "condensed",
    fontFamily: "Helvetica",
  },
  forgotPassword: {
    color: "#00f",
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#cdf1ff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  signupText: {
    color: "#fff",
    fontFamily: "Helvetica",
  },
  signupLink: {
    color: "#00f",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
});

export default LoginPage;
