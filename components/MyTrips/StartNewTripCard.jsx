import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {

    const router = useRouter();

  return (
    <View style = {{
        padding:20,
        marginTop: 50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}>
        <FontAwesome6 name="location-dot" size={40} color="black" />
      <Text style = {{
        fontFamily:'outfit -medium',
        fontSize: 30,
        textAlign:'center',
        // marginTop: 10
      }}>No Trips Planned yet</Text>

    <Text style = {{
        fontFamily:'outfit',
        fontSize: 20,
        textAlign:'center',
        color: Colors.GRAY
        // marginTop: 10
    }}>Looks like its time to plan a new travel experiences! Get started below</Text>

    <TouchableOpacity
    onPress={() =>router.push('/create-trip/search-place')}
     style = {{
        padding:10,
        backgroundColor: Colors.PRIMARY,
        borderRadius:15,
        marginTop:10,
        paddingHorizontal:30
    }}>
        <Text style = {{
            color:Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20
        }}>Start New Trip</Text>
    </TouchableOpacity>


    </View>
  )
}