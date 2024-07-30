
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

const App = () => {
  return (
    <ImageBackground 
      source={{uri: 'https://path-to-your-background-image.png'}}
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
        
        <TouchableOpacity style={styles.loginButton}>
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
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
  forgotPassword: {
    color: '#00f',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
  },
  signupLink: {
    color: '#00f',
  },
});

export default App;
