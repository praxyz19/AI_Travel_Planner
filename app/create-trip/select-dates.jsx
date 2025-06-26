import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { useNavigation, useRouter } from "expo-router";
  import { Colors } from "../../constants/Colors";
  import { CreateTripContext } from "../../context/CreateTripContext";
  import { Calendar } from "react-native-calendars";
  import moment from "moment";
  
  export default function SelectDates() {
    const navigation = useNavigation();
    const router = useRouter();
  
    const [markedDates, setMarkedDates] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { tripData, setTripData } = useContext(CreateTripContext);
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
      });
    }, []);
  
    const onDayPress = (day) => {
      const selected = moment(day.dateString);
  
      if (!startDate || (startDate && endDate)) {
        setStartDate(selected);
        setEndDate(null);
        setMarkedDates({
          [selected.format("YYYY-MM-DD")]: {
            startingDay: true,
            endingDay: true,
            color: Colors.PRIMARY,
            textColor: Colors.WHITE,
          },
        });
      } else if (selected.isAfter(startDate, "day")) {
        const range = {};
        let current = moment(startDate);
        while (current.isSameOrBefore(selected, "day")) {
          const dateStr = current.format("YYYY-MM-DD");
          range[dateStr] = {
            color: Colors.PRIMARY,
            textColor: Colors.WHITE,
          };
          current.add(1, "day");
        }
        range[startDate.format("YYYY-MM-DD")].startingDay = true;
        range[selected.format("YYYY-MM-DD")].endingDay = true;
  
        setEndDate(selected);
        setMarkedDates(range);
      } else {
        // user tapped a date before the startDate
        setStartDate(selected);
        setEndDate(null);
        setMarkedDates({
          [selected.format("YYYY-MM-DD")]: {
            startingDay: true,
            endingDay: true,
            color: Colors.PRIMARY,
            textColor: Colors.WHITE,
          },
        });
      }
    };
  
    const OnDateSelectionContinue = () => {
      if (!startDate || !endDate) {
        return;
      }
  
      const totalNoOfDays = endDate.diff(startDate, "days") + 1;
      setTripData({
        ...tripData,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        totalNoOfDays,
      });
      router.push("/create-trip/select-budget");
    };
  
    return (
      <View
        style={{
          padding: 25,
          paddingTop: 75,
          backgroundColor: Colors.WHITE,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
            marginTop: 30,
          }}
        >
          Travel Dates
        </Text>
  
        <View style={{ marginTop: 30 }}>
          <Calendar
            markingType={"period"}
            markedDates={markedDates}
            onDayPress={onDayPress}
            minDate={moment().format("YYYY-MM-DD")}
            theme={{
              todayTextColor: Colors.PRIMARY,
              arrowColor: Colors.PRIMARY,
            }}
          />
        </View>
  
        <TouchableOpacity
          onPress={OnDateSelectionContinue}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 35,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  