import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { NavigationProp, RouteProp } from "@react-navigation/native";

type CalendarPageProps = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const CalendarPage: React.FC<CalendarPageProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <Calendar
        // Initially visible month. Default = Date()
        current={"2023-07-01"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={"2022-05-10"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2025-05-30"}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"MMMM yyyy"}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        theme={{
          backgroundColor: "#1c1c1c",
          calendarBackground: "#1c1c1c",
          textSectionTitleColor: "white",
          selectedDayBackgroundColor: "#333333",
          selectedDayTextColor: "white",
          todayTextColor: "#00adf5",
          dayTextColor: "white",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "white",
          arrowColor: "white",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "white",
          indicatorColor: "white",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Dark background
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white", // White text for header
  },
  calendar: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 100, // Adjust height as needed
  },
});

export default CalendarPage;