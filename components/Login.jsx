import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

  return (
    <View>
      <Image source={require('./../assets/images/Login.jpeg')}
        style = {{
            width:'100%',
            height: 450
        }}
      />

      <View style = {styles.container}>
        <Text style={{
                fontSize:25,
                fontFamily:'outfit-bold',
                textAlign:'center',
                // marginTop:-10
                // marginBottom: 16
            }}>AI Travel Planner</Text>

        <Text style = {{
            fontFamily:'outfit',
            fontSize:15,
            textAlign:'center',
            color: Colors.GRAY,
            marginTop:15
            // lineHeight: 26
        }}>Discover your next adventure effortlessly. Personalized itenaries at your fingertips. Travel smarter with AI driven insights</Text>

        <TouchableOpacity style = {styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text style ={{
                  color: Colors.WHITE,
                  textAlign:'center',
                  fontFamily:'outfit',
                  fontSize:17
              }}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:24
    },
    button:{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        borderRadius:99,
        marginTop:'15%',
    }
})