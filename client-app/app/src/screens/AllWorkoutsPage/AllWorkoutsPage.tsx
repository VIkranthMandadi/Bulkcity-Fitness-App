import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
    ImageBackground,
  Button,
  
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import axios from "axios";

type AllWorkoutsPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AllWorkoutsPage">;
};

const AllWorkoutsPage: React.FC<AllWorkoutsPageProps> = ({ navigation }) => {
  const fetchData = () => {
    axios
      .get("http://localhost:3000/exercises")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <Button
      title="All Workouts Page"
      onPress={() => fetchData()}
      />
  );
};


export default AllWorkoutsPage;
