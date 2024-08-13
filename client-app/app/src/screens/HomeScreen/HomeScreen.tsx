// import React from "react";
// import { Pressable, Dimensions, StyleSheet, Text, View } from "react-native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "@/app";

// const { width, height } = Dimensions.get("window");

// type HomeScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, "HomePage">;
// };

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         {"Hi Name,\nit's time to "}
//         <Text style={styles.bulkText}>Bulk</Text>
//       </Text>

//       <View style={styles.btnContainer}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.button,
//             { backgroundColor: pressed ? "#293b47" : "#2b444e" },
//           ]}
//           onPress={() => alert("Wants to record a workout")}
//         >
//           <Text style={styles.buttonText}>Record a Workout</Text>
//         </Pressable>
//       </View>

//       <View style={styles.btnContainer}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.button,
//             { backgroundColor: pressed ? "#293b47" : "#2b444e" },
//           ]}
//           onPress={() => alert("Calendar")}
//         >
//           <Text style={styles.buttonText}>Calendar</Text>
//         </Pressable>
//       </View>

//       <View style={styles.btnContainer}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.button,
//             { backgroundColor: pressed ? "#a8cbe3" : "#cdf1ff" },
//           ]}
//           onPress={() => navigation.navigate("BulkBot")}
//         >
//           <Text style={styles.bulkButtonText}>Bulk Bot</Text>
//         </Pressable>
//       </View>
//       <View style={styles.btnContainer}>
//         <Pressable
//           style={({ pressed }) => [
//             styles.button,
//             { backgroundColor: pressed ? "#a8cbe3" : "#cdf1ff" },
//           ]}
//           onPress={() => navigation.navigate("AllWorkoutsPage")}
//         >
//           <Text style={styles.bulkButtonText}>AllWorkouts</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingBottom: 50,
//     backgroundColor: "#20333a",
//   },
//   title: {
//     paddingLeft: width * 0.125,
//     paddingTop: 60,
//     marginBottom: "auto",
//     fontSize: 60,
//     color: "#96d5ff",
//     fontFamily: "Helvetica",
//     fontWeight: "bold",
//   },
//   bulkText: {
//     color: "#cdf1ff",
//   },
//   btnContainer: {
//     marginBottom: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     borderRadius: 7,
//     width: width * 0.75,
//     height: height * 0.1,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   buttonText: {
//     color: "#91b3c9",
//     fontSize: 20,
//     fontFamily: "Helvetica",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   bulkButtonText: {
//     color: "#ffffff",
//     fontSize: 20,
//     fontFamily: "Helvetica",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default HomeScreen;
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type HomePageProps = {
  route: RouteProp<{ params: { username: string } }, 'params'>;
};

const HomePage: React.FC<HomePageProps> = ({ route }) => {
  const { username } = route.params;

  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>HI {username.toUpperCase()},</Text>
        <Text style={styles.subtitle}>IT’S TIME TO</Text>
        <Text style={styles.subtitle}>BULK</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>RECORD A WORKOUT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CALENDAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BULK BOT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ALL WORKOUTS</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Copperplate',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: -25,
  },
  subtitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Copperplate',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    width: '55%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
  },
});

export default HomePage;