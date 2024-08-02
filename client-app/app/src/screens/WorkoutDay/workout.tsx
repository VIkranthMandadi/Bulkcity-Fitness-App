import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";

type WorkoutPageProps = {
  route: RouteProp<RootStackParamList, "WorkoutPage">;
  navigation: NativeStackNavigationProp<RootStackParamList, "WorkoutPage">;
};

const WorkoutPage: React.FC<WorkoutPageProps> = ({ route }) => {
  const { date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout for {date}</Text>
      {/* Replace this with your actual workout data */}
      <Text style={styles.workoutText}>
        This is where the workout details will be displayed.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Dark background
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white", // White text for header
  },
  workoutText: {
    fontSize: 18,
    color: "white", // White text for workout details
  },
});

export default WorkoutPage;
