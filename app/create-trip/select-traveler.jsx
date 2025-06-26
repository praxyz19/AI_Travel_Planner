import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectTravelList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectTraveler() {

    const navigation = useNavigation();
    const [selectedTraveler, setSelectedTraveler] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext)

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransperent: true,
            headerTitle: '',
        })
    },[])

    useEffect(() => {
        setTripData({...tripData,
            traveler: selectedTraveler
        })
    },[selectedTraveler])
    
  return (
    <View style = {{
        padding: 20,
        // paddingTop: 30,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style = {{
        fontSize:30,
        fontFamily: 'outfit-bold',
        marginTop:10
      }}>Who's Going</Text>

      <View style = {{
        // marginTop:10
        // marginBottom:10
        
      }}>
        <Text style = {{
            fontSize:17,
            fontFamily: 'outfit-bold',
        }}>Choose Your Travelers</Text>

        <FlatList 
            data = {SelectTravelList}
            renderItem={({item, index}) => (
                <TouchableOpacity
                 onPress={() => setSelectedTraveler(item)}
                 style = {{
                    marginVertical:10
                }}>
                    <OptionCard 
                    option = {item} 
                    selectedOption = {selectedTraveler}/>
                </TouchableOpacity>
            )}
        />
      </View>

      <TouchableOpacity style = {{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        borderRadius:15,
        marginTop:20
      }}>

        <Link href={'/create-trip/select-dates'}>

        <Text style = {{
            textAlign:'center',
            color: Colors.WHITE,
            fontSize:18,
            fontFamily: 'outfit-medium',
        }}>
            Continue
        </Text>
        </Link>
      </TouchableOpacity>

    </View>
  )
}