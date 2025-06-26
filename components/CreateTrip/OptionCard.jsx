import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import SelectTraveler from './../../app/create-trip/select-traveler';

export default function OptionCard({option, selectedOption}) {
  return (
    <View style = {[{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius:10,
    },selectedOption?.id == option?.id &&{borderWidth:3}]}>
      <View>
        <Text style = {{
            fontSize:20,
            fontFamily: 'outfit-bold',
        }}>{option?.title}</Text>

        <Text style = {{
            fontSize:13,
            fontFamily: 'outfit',
            color: Colors.GRAY
        }}>{option?.desc}</Text>
      </View>

      <Text style = {{
        fontSize:30,
      }}>{option?.icon}</Text>
    </View>
  )
}