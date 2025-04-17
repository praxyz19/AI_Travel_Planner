import { View, Text, StyleSheet, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension'
import { auth } from '../../../configs/FreebaseConfig'
import { useState } from 'react'
import { length } from './../../../node_modules/@protobufjs/utf8/index.d';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

   
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const[fullName, setFullName] = useState();


  useEffect(()=> {
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const OnCreateAccount = () => {

      if(!email?.length > 0 || !password?.length > 0 || !fullName?.length > 0){
        ToastAndroid.show('Please Enter all Details', ToastAndroid.LONG);
        return
      }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });
  }


  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=> router.back()}>
        <Ionicons name="arrow-back-circle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
        marginTop:20
      }}>Create New Account</Text>

            {/* user Full Name */}
            <View style = {{
              marginTop:30
            }}>
              <Text style={{
                fontFamily:'outfit'
              }}>Full Name</Text>
              <TextInput 
              style={styles.input} 
              placeholder='Enter Full Name'
              onChangeText={(value) => setFullName(value)}
              />
            </View>


       {/* Email */}
            <View style = {{
              marginTop:30
            }}>
              <Text style={{
                fontFamily:'outfit'
              }}>Email</Text>
              <TextInput 
              style={styles.input} 
              placeholder='Enter Email'
              onChangeText={(value) => setEmail(value)}
              />
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
               placeholder='Enter Password'
               onChangeText={(value) => setPassword(value)}
               />
            </View>

            {/* create acc button */}
            
                  <TouchableOpacity onPress={OnCreateAccount} style={{
                    padding:20, 
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
                    marginTop:60 
                  }}>
                    <Text style={{
                      color: Colors.WHITE,
                      textAlign:'center'
                    }}>Create Account</Text>
                  </TouchableOpacity>
            
                  {/* sign in button */}
                  <TouchableOpacity
                    onPress={()=>router.replace('auth/sign-in')}
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
                    }}>Sign In</Text>
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
