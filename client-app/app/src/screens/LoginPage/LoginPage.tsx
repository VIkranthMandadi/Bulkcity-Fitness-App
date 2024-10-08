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

type LoginPageProps = {
  navigation: NavigationProp<any>;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username) {
      Alert.alert("All fields are required");
      return;
    }

    if (!password) {
      Alert.alert("All fields are required");
      return;
    }
    navigation.navigate('HomePage', { username });
  };

  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bulk City</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ResetPassword', { title: 'Please enter your new password' })}
        >
          <Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          DON'T HAVE AN ACCOUNT?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('SignUp')}
          >
            SIGN UP!
          </Text>
        </Text>
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
  forgotPassword: {
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#0096FF',
    fontFamily: 'Arial Black',
    fontSize: 17
  },
  loginButton: {
    width: '55%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Arial Black',
  },
  signupText: {
    color: 'white',
    fontFamily: 'Arial Black',
    fontSize: 17
  },
  signupLink: {
    color: '#0096FF',
    fontFamily: 'Arial Black',
  },
});

export default LoginPage;
