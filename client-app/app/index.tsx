import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
// import React from 'react';
// import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';

// const App = () => {
//   return (
//     <ImageBackground 
//       source={{uri: '../images/bg.png'}}
//       style={styles.background}
//     >
//       <View style={styles.container}>
//         <Text style={styles.title}>BULK CITY</Text>
        
//         <TextInput
//           style={styles.input}
//           placeholder="ENTER USERNAME"
//           placeholderTextColor="#999"
//         />
        
//         <TextInput
//           style={styles.input}
//           placeholder="ENTER PASSWORD"
//           placeholderTextColor="#999"
//           secureTextEntry={true}
//         />
        
//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>LOGIN</Text>
//         </TouchableOpacity>
        
        
//         <Text style={styles.signupText}>
//           DON'T HAVE AN ACCOUNT? <Text style={styles.signupLink}>SIGN UP!</Text>
//         </Text>
//       </View>
//     </ImageBackground>

//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     color: 'black',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 50,
//     fontFamily: 'Papyrus',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     fontSize: 18,
//     color: 'black',
//     fontFamily: 'Optima'
//   },
//   forgotPassword: {
//     color: '#00f',
//     marginBottom: 20,
//     fontFamily: 'Optima'
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#333',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,

//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     fontFamily: 'Papyrus',
//   },
//   signupText: {
//     color: 'Optima',
//   },
//   signupLink: {
//     color: '#00f',
//     fontFamily: 'Optima'
//   },
// });

// export default App;
