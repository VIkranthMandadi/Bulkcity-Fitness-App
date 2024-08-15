import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import CalendarPage from "./src/screens/CalendarScreen/CalendarScreen";
import WorkoutPage from "./src/screens/WorkoutDay/workout";
import LoginPage from "./src/screens/LoginPage/LoginPage";
import AllWorkoutsPage from "./src/screens/AllWorkoutsPage/AllWorkoutsPage";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ResetPasswordPage from "./src/screens/ForgotPassword/ForgotPassword";
import SignUpPage from "./src/screens/SignUp/SignUpPage";
import BulkBot from "./src/screens/BulkBot/BulkBot";
import HomePage from "./src/screens/HomeScreen/HomeScreen";

export type RootStackParamList = {
  LoginPage: undefined;
  CalendarPage: undefined;
  WorkoutPage: { date: string };
  AllWorkoutsPage: undefined;
  HomePage: undefined;
  ResetPassword: undefined;
  SignUp: undefined;
  BulkBot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {

  return (
    <Stack.Navigator initialRouteName="AllWorkoutsPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="CalendarPage" component={CalendarPage} />
      <Stack.Screen name="WorkoutPage" component={WorkoutPage} />
      <Stack.Screen name="AllWorkoutsPage" component={AllWorkoutsPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="BulkBot" component={BulkBot} />
    </Stack.Navigator>
  );
};

export default App;


