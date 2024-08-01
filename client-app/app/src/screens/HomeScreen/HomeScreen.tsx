import React from "react";
import { Button } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

type HomeScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};



export default HomeScreen;
