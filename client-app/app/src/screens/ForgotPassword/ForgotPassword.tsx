import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

type ResetPasswordPageProps = {
  navigation: NavigationProp<any>;
};

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Handle password reset logic here
    Alert.alert("Success", "Password has been reset.");
  };

  return (
    <ImageBackground
      source={require("../../images/bg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>RESET PASSWORD</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter New Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
        >
          <Text style={styles.resetButtonText}>RESET</Text>
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
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: "black",
  },
  title: {
    fontSize: 37,
    fontWeight: "bold",
    color: "white",
    marginBottom: 50,
    fontFamily:"Copperplate",
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
  resetButton: {
    width: "55%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    
  },
  resetButtonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Copperplate",
  },
});

export default ResetPasswordPage;
