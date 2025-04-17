import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'
// import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false 
    }}>
        <Tabs.Screen name = "mytrip" options={{
            tabBarLabel:"My Trip",
            tabBarIcon:({color})=> <MaterialIcons name="location-city" 
            size={24} color={color} />,
        }}/>
        <Tabs.Screen name = "discover" options={{
            tabBarLabel:"Discover",
            tabBarIcon:({color})=> <Entypo name="globe"
             size={24} color={color} />,
        }}/>
        <Tabs.Screen name = "profile" options={{
            tabBarIcon:({color})=> <MaterialIcons name="person-pin" 
            size={24} color={color} />
        }}/>
    </Tabs>
  )
}