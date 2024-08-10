import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/app";

type NavigationBarProps = {
  currentScreen: keyof RootStackParamList;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ currentScreen }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateTo = (screen: keyof RootStackParamList) => {
    if (screen !== currentScreen) {
      if (screen === "WorkoutPage") {
        // Assuming that 'WorkoutPage' needs a date parameter, you must provide it.
        navigation.navigate("WorkoutPage", { date: new Date().toISOString() });
      } else {
        // For screens without parameters
        navigation.navigate(screen as any);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo("HomePage")}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("CalendarPage")}>
        <Text style={styles.text}>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("AllWorkoutsPage")}>
        <Text style={styles.text}>Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("LoginPage")}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo("SignUp")}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#e7e7e7",
  },
  text: {
    fontSize: 16,
    color: "#007AFF",
  },
});

export default NavigationBar;
