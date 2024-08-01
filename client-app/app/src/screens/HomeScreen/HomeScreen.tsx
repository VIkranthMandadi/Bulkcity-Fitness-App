import React from "react";
import { Button } from "react-native";
import { NavigationContainer, NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route}) => {
  return (
  
    
    
    
    <View style={styles.container}> 
      <Text style={styles.title}>Hi Name, /n It's Time to Bulk</Text>

    </View>
  );
};

const styles = StyleSheet.create({
container: {

  flex: 1,
  paddingTop: 40,
  backgroundColor: 'gray',

},
title: {

  padding: 40,
  backgroundColor: 'black',
  fontSize: 25,
  color: 'white',

}


})

export default HomeScreen;