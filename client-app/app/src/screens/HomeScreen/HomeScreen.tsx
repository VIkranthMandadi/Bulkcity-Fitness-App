import React from "react";
import { Button } from "react-native";
import { NavigationContainer, NavigationProp, RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from "react-native";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

type HomeScreenProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route}) => {
  return (
  
    
    
   
    <View style={styles.container}>
      <Text style={styles.title}>{"Hi Name,\nIt's Time to Bulk"}</Text>
      <View style={styles.dividerLine}>

      </View>
      
      
      <View style={styles.btnContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? '#a0a0a0' : '#d3d3d3', // Change color on press
            width: width * 0.5, 
            height: height * 0.1,

          },
        ]}
        onPress={() => alert('Wants to record a workout')}
      >
        <Text style={styles.buttonText}>Record a Workout</Text>
      </Pressable>
    </View>

    <View style={styles.btn2Container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            
            backgroundColor: pressed ? '#a0a0a0' : '#d3d3d3', // Change color on press
            width: width * 0.45, // Button takes up 60% of screen width
            height: height * 0.1,

          },
        ]}
        onPress={() => alert('Calender')}
      >
        <Text style={styles.buttonText}>Calender</Text>
      </Pressable>
    </View>

    <View style={styles.btn3Container}>
      <Pressable
        style={({ pressed }) => [
          styles.button3,
          {
            
            backgroundColor: pressed ? '#a0a0a0' : '#d3d3d3', // Change color on press
            width: width * 0.45, // Button takes up 60% of screen width
            height: height * 0.1,

          },
        ]}
        
        onPress={() => alert('Chatbot')}
      >
        
        
        <Text style={styles.buttonText3}>Bulk</Text>
        <Image source={require('./bulkbot.png')} style={styles.image} />
        <Text style={styles.buttonText3}>Bot</Text>
      </Pressable>
    </View>
  
      


      

    </View>
    

  );
};

const styles = StyleSheet.create({
container: {

  flex: 1,
  paddingTop: 10,
  paddingLeft: 0,
  backgroundColor: 'black',

},

btnText: {

  flex: 0.2,
  padding: 40,
  backgroundColor: 'gray',
  fontFamily: 'bebas neue',
  alignItems: 'center',
  justifyContent: 'center',
  

},
title: {

  paddingBottom: 40,
  paddingLeft: 10,
  backgroundColor: 'black',
  fontSize: 60,
  color: 'white',
  fontFamily: 'paprika'

},

backgroundContainer: {

  flex: 0,
  backgroundColor: 'black',


},

btnContainer: {
  flex: 0.2,
  paddingTop: 10,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'black',
},

btn2Container: {
  flex: 0.2,
  paddingTop: 10,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'black',
  
 
},

btn3Container: {
  
  
  paddingTop: 10,
  backgroundColor: 'black',
  flex: 0.2,
    justifyContent: 'center',
    
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
},


button: {
   // Adjust padding to change button size
   borderWidth: 4,
   borderColor: '#3a3a3a',
  borderRadius: 3, // Rounded corners
  elevation: 3, // Shadow for Android
  shadowColor: '#000', // Shadow color for iOS
  shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
  shadowOpacity: 0.3, // Shadow opacity for iOS
  shadowRadius: 2, // Shadow blur radius for iOS
  alignItems: 'center', // Center text horizontally
  justifyContent: 'center',
  flexDirection: 'column',

},

button3: {
  // Adjust padding to change button size
  borderWidth: 4,
  borderColor: '#3a3a3a',
 borderRadius: 3, // Rounded corners
 elevation: 3, // Shadow for Android
 shadowColor: '#000', // Shadow color for iOS
 shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
 shadowOpacity: 0.3, // Shadow opacity for iOS
 shadowRadius: 2, // Shadow blur radius for iOS
 alignItems: 'center', // Center text horizontally
 justifyContent: 'center',
 flexDirection: 'row',
 paddingLeft: 0,
 paddingRight: 0,

},

dividerLine: {

  flex: 0.2,
  backgroundColor: 'a3a3a3',


},
buttonText: {
  color: '#000', // Text color
  fontSize: 20, // Font size
  textAlign: 'center', // Center text horizontally
  fontFamily:  'bebas neue',
  fontWeight: 'bold',
},

buttonText3: {
  color: '#000', // Text color
  fontSize: 20, // Font size
  textAlign: 'center', // Center text horizontally
  fontFamily:  'bebas neue',
  fontWeight: 'bold',
  paddingLeft: 0,
  flex: 1,
},
image: {
  flex: 1.1,
  flexDirection: 'row',
  width: 10,
  height: 80, 
  paddingLeft: 0,

}


})

export default HomeScreen;