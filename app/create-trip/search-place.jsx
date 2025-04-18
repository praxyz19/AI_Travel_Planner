import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Reference } from './../../node_modules/@firebase/database-types/index.d';
import { CreateTripContext } from './../../context/CreateTripContext'

export default function SearchPlace() {

    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext)
    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTransperent: true,
            headerTitle: 'Search Place',
        })

    } , [])

    useEffect(() => {
        console.log(tripData);
    }),[tripData]

  return (
    <View style = {{
        flex:1,
        padding:25,
        paddingTop:30,
        backgroundColor: Colors.WHITE,
        // height: '100%',
        // display:'flex',
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Places'
      fetchDetails = {true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description);
        console.log(details?.geometry.location);
        console.log(details?.photos[0]?.photo_reference);
        console.log(details?.url);
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRef:details?.photos[0]?.photo_reference,
                mapsUrl: details?.url,
            }
        })
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}

      styles={{
        textInputContainer:{
            borderWidth:2,
            borderRadius:10,
            marginTop:25
        }
      }}
    />
    </View>
  )
}