import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import axios from "axios";

type AllWorkoutsPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AllWorkoutsPage">;
};

type Workout = {
  _id: string; // Change 'id' to '_id' to match your data
  name: string;
  day: string;
  imageUrl?: string;
};

const AllWorkoutsPage: React.FC<AllWorkoutsPageProps> = ({ navigation }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/exercises")
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      {workouts.map((workout) => (
        <TouchableOpacity
          key={workout._id} // Use _id as the key
          style={styles.card}
          onPress={() => {
            // Add navigation or actions for each workout card
          }}
        >
          <ImageBackground
            source={{ uri: workout.imageUrl }}
            style={styles.imageBackground}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{workout._id || "No Name"}</Text>
              <Text style={styles.description}>
                {workout.day || "No Day Specified"}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: "#ccc", // Add a border to see card outlines
    borderWidth: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 15,
  },
  title: {
    color: "#fff", // Ensure text is white on dark overlay
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#fff", // Ensure text is white on dark overlay
    fontSize: 14,
  },
});

export default AllWorkoutsPage;
