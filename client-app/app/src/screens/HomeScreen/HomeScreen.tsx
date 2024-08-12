import React from "react";
import { Pressable, Dimensions, StyleSheet, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";

const { width, height } = Dimensions.get("window");

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomePage">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {"Hi Name,\nit's time to "}
        <Text style={styles.bulkText}>Bulk</Text>
      </Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#293b47" : "#2b444e" },
          ]}
          onPress={() => alert("Wants to record a workout")}
        >
          <Text style={styles.buttonText}>Record a Workout</Text>
        </Pressable>
      </View>

      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#293b47" : "#2b444e" },
          ]}
          onPress={() => alert("Calendar")}
        >
          <Text style={styles.buttonText}>Calendar</Text>
        </Pressable>
      </View>

      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#a8cbe3" : "#cdf1ff" },
          ]}
          onPress={() => navigation.navigate("BulkBot")}
        >
          <Text style={styles.bulkButtonText}>Bulk Bot</Text>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#a8cbe3" : "#cdf1ff" },
          ]}
          onPress={() => navigation.navigate("AllWorkoutsPage")}
        >
          <Text style={styles.bulkButtonText}>AllWorkouts</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    backgroundColor: "#20333a",
  },
  title: {
    paddingLeft: width * 0.125,
    paddingTop: 60,
    marginBottom: "auto",
    fontSize: 60,
    color: "#96d5ff",
    fontFamily: "Helvetica",
    fontWeight: "bold",
  },
  bulkText: {
    color: "#cdf1ff",
  },
  btnContainer: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 7,
    width: width * 0.75,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#91b3c9",
    fontSize: 20,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
  bulkButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
