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
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import CalendarPage from "./src/screens/CalendarScreen/CalendarScreen";
import WorkoutPage from "./src/screens/WorkoutDay/workout";
import LoginPage from "./src/screens/LoginPage/LoginPage";

export type RootStackParamList = {
  LoginPage: undefined;
  CalendarPage: undefined;
  WorkoutPage: { date: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        <Stack.Screen name="WorkoutPage" component={WorkoutPage} />
      </Stack.Navigator>
    
  );
};

export default App;

