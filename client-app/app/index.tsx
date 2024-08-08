// import { StyleSheet, Text, View } from "react-native";

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginPage from "./src/screens/LoginPage/LoginPage";
// import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
// import ResetPasswordPage from "./src/screens/ForgotPassword/ForgotPassword";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={ResetPasswordPage}
//         options={{ title: "Welcome" }}
//       />
//       <Stack.Screen name="Profile" component={ResetPasswordPage} />
//     </Stack.Navigator>
//   );
// };
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/screens/LoginPage/LoginPage'; // Adjust the path according to your project structure
import ResetPasswordPage from './src/screens/ForgotPassword/ForgotPassword'; // Adjust the path according to your project structure
import SignUpPage from './src/screens/SignUp/SignUpPage'; // Adjust the path according to your project structure

const Stack = createStackNavigator();

const NavigationStack: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPasswordPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpPage} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default NavigationStack;







// export default App;

