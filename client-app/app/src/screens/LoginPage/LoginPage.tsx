import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import axios from "axios"; 

type LoginPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "LoginPage">;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {

  const fetchData = () => {
    axios
      .get("http://localhost:3000/exercises")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <ImageBackground
      source={require("../../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>BULK CITY</Text>

        <TextInput
          style={styles.input}
          placeholder="ENTER USERNAME"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="ENTER PASSWORD"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("AllWorkoutsPage")}
          //onPress={() => fetchData()}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          DON'T HAVE AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP!</Text>
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
    color: "black",
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
    color: "#00f",
    marginBottom: 20,
    fontFamily: "Optima",
  },
  loginButton: {
    width: "100%",
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
    color: "Optima",
  },
  signupLink: {
    color: "#00f",
    fontFamily: "Optima",
  },
});

export default LoginPage;