import React from "react";
import {
  Pressable,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import { RouteProp } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomePage">;
  route: RouteProp<RootStackParamList, "HomePage">;
  
};

// type HomeScreenProps = {
//   route: RouteProp<{ params: { username: string } }, 'params'>;
// };

const HomePage: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const { username } = route.params;

// const HomePage: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
        HI {username.toUpperCase()}, {"\n"}IT’S TIME TO{" "}
          <Text style={styles.bulkText}>BULK</Text>
        </Text>

        <View style={styles.btnContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#d6d6d6" : "#5e5e5e" },
            ]}
            onPress={() => alert("Wants to record a workout")}
          >
            <Text style={styles.buttonText}>RECORD A WORKOUT</Text>
          </Pressable>
        </View>

        <View style={styles.btnContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#d6d6d6" : "#5e5e5e" },
            ]}
            onPress={() => navigation.navigate("CalendarPage")}
          >
            <Text style={styles.buttonText}>CALENDAR</Text>
          </Pressable>
        </View>

        <View style={styles.btnContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#d6d6d6" : "#5e5e5e" },
            ]}
            onPress={() => navigation.navigate("BulkBot")}
          >
            <Text style={styles.buttonText}>BULK BOT</Text>
          </Pressable>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#d6d6d6" : "#5e5e5e" },
            ]}
            onPress={() => navigation.navigate("AllWorkoutsPage")}
          >
            <Text style={styles.buttonText}>ALL WORKOUTS</Text>
          </Pressable>
        </View>
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
    justifyContent: "flex-end",
    paddingBottom: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 60,
    fontFamily: "Copperplate",
  },
  bulkText: {
    fontSize: 55,
    color: "#ffffff",
    fontFamily: "Copperplate",
  },
  btnContainer: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    
  },
  button: {
    borderRadius: 20,
    width: width * 0.75,
    height: height * 0.08,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: '#333',
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Copperplate",
    textAlign: "center",
  },
});

export default HomePage;
