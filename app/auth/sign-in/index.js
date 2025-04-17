import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension'
import { auth } from '../../../configs/FreebaseConfig'

export default function SignIn() {
    const router = useRouter();
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])

    const OnSignIn = () => {

      if (!(email.length > 0) || !(password.length > 0)) {
        ToastAndroid.show('Please Enter all Details', ToastAndroid.LONG);
        return
      }


      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if(errorCode == 'auth/invalid-credential'){
          ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
        }
      });
    }


  return (
    <View style = {{
      padding:25,
      backgroundColor:Colors.WHITE,
      paddingTop:50,
      height:'100%'
    }}>

      <TouchableOpacity onPress={()=> router.back()}>
        <Ionicons name="arrow-back-circle" size={24} color="black" />
      </TouchableOpacity>

      <Text style = {{
        fontFamily:'outfit-bold',
        fontSize:25,
        marginTop:20
      }}>Let's Sign You In</Text>

      <Text style = {{
        fontFamily:'outfit',
        fontSize:25,
        color: Colors.GRAY,
        marginTop:10
      }}>Welcome back</Text>


      <Text style = {{
        fontFamily:'outfit',
        fontSize:25,
        color: Colors.GRAY,
        marginTop:10
      }}>You've been missed</Text>


      {/* Email */}
      <View style = {{
        marginTop:30
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Email</Text>
        <TextInput 
        style={styles.input} 
        onChangeText={(value) => setEmail(value)}
        placeholder='Enter Email'/>
      </View>


      {/* Password */}

      <View style = {{
        marginTop:30
      }}>
        <Text style={{
          fontFamily:'outfit'
        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
         style={styles.input} 
        onChangeText={(value) => setPassword(value)}
         placeholder='Enter Password'/>
      </View>

      {/* Sign in button */}

      <TouchableOpacity onPress={OnSignIn} style={{
        padding:20, 
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:60 
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign:'center'
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* create account button */}
      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-up')}
      style={{
        padding:20, 
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        borderWidth:1,
        marginTop:20
      }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign:'center'
        }}>Create an Account</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.GRAY,
    fontFamily:'outfit',
  }
})