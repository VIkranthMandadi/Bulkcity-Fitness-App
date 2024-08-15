import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type SignUpPageProps = {
  navigation: NavigationProp<any>;
};

const SignUpPage: React.FC<SignUpPageProps> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSignUp = () => {
    if (!username) {
      Alert.alert("All fields are required.");
      return;
    }

    if (username.length > 11) {
      Alert.alert("Your username is too long, please make it shorter.");
      return;
    }

    if (!email) {
      Alert.alert("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    if (password.length < 7) {
      Alert.alert("Your password is too short");
      return;
    }
    
    Alert.alert("Success", "Signed up successfully!");
    navigation.navigate("Login"); 
  };

  return (
    <ImageBackground
      source={require("../../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>SIGN UP</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
    },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    fontFamily: 'Arial Black',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: 'Arial Black',
  },
  signUpButton: {
    width: '55%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Arial Black',
  },
});

export default SignUpPage;
