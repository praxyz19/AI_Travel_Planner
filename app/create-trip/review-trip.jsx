import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from "moment";

export default function ReviewTrip() {

    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
        })
    },[])

  return (
    <View style = {{
        padding:25,
        paddingTop:50,
        backgroundColor: Colors.WHITE,
        height:'100%',
    }}>
      <Text style = {{
        fontFamily: 'outfit-bold',
        fontSize:35,
        marginTop:25
      }}>Review Trip</Text>

      <View style = {{
        marginTop:20
      }}>
        <Text style = {{
            fontFamily: 'outfit-bold',
            fontSize:20,
        }}>Smart Travelers Double-Check.</Text>

        {/* Destination info  */}
        <View style = {{
            marginTop:40,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            {/* <MaterialIcons name="location-pin" size={40} color="black" /> */}
            <Text style = {{
                fontSize:35
            }}> 🌍 </Text>
            <View>
                <Text style = {{
                    fontFamily: 'outfit',
                    fontSize: 20,
                    color:Colors.GRAY,
                }}>Destination</Text>
                <Text style = {{
                    fontFamily: 'outfit-medium',
                    fontSize:20,
                }}>{tripData?.locationInfo?.name}</Text>
            </View>
        </View>

        {/* selected date info  */}
        <View style = {{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            {/* <MaterialIcons name="location-pin" size={40} color="black" /> */}
            <Text style = {{
                fontSize:35
            }}> 🗓️ </Text>
            <View>
                <Text style = {{
                    fontFamily: 'outfit',
                    fontSize: 20,
                    color:Colors.GRAY,
                }}>Travel Dates</Text>
                <Text style = {{
                    fontFamily: 'outfit-medium',
                    fontSize:17,
                }}>{moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                "  "}
              ({tripData?.totalNoOfDays} days)</Text>
            </View>
        </View>

        {/* Traveleres info  */}
        <View style = {{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            {/* <MaterialIcons name="location-pin" size={40} color="black" /> */}
            <Text style = {{
                fontSize:35
            }}> 🧳 </Text>
            <View>
                <Text style = {{
                    fontFamily: 'outfit',
                    fontSize: 20,
                    color:Colors.GRAY,
                }}>Who's travelling</Text>
                <Text style = {{
                    fontFamily: 'outfit-medium',
                    fontSize:20,
                }}>{tripData?.traveler?.title}</Text>
            </View>
        </View>

        {/* Budget info  */}
        <View style = {{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            {/* <MaterialIcons name="location-pin" size={40} color="black" /> */}
            <Text style = {{
                fontSize:35
            }}> 🏷️ </Text>
            <View>
                <Text style = {{
                    fontFamily: 'outfit',
                    fontSize: 20,
                    color:Colors.GRAY,
                }}>Selected Budget</Text>
                <Text style = {{
                    fontFamily: 'outfit-medium',
                    fontSize:20,
                }}>{tripData?.budget}</Text>
            </View>
        </View>

      </View>

      <TouchableOpacity 
    //   onPress={()=> onClickContinue()}
            style = {{
                    padding:15,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius:15,
                    marginTop:50
                  }}>
                    <Text style = {{
                        textAlign:'center',
                        color: Colors.WHITE,
                        fontSize:18,
                        fontFamily: 'outfit-medium',
                    }}>
                        Build My Trip
                    </Text>
                    
                  </TouchableOpacity>
      
    </View>
  )
}