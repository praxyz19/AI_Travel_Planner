import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from './../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import {auth, db} from '../../configs/FreebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function GenerateTrip() {
    const {tripData, setTripData} = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    

    useEffect(() => {
        if (tripData) {
            GenerateAiTrip();
        }
    }, [])

    const GenerateAiTrip = async () =>{
        setLoading(true);

        const user = auth.currentUser;
        if (!user) {
          console.warn("User is not authenticated yet.");
          setLoading(false);
          return;
        }

        const FINAL_PROMPT = AI_PROMPT
        .replace("{location}", tripData?.locationInfo?.name)
        .replace("{totalDays}", tripData.totalNoOfDays)
        .replace("{totalNight}", tripData.totalNoOfDays - 1)
        .replace("{traveller}", tripData?.traveler?.title)
        .replace("{budget}", tripData.budget)
        .replace("{totalDays}", tripData.totalNoOfDays)
        .replace("{totalNight}", tripData.totalNoOfDays - 1)

        console.log("Final Prompt: ", FINAL_PROMPT);

        try {
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp = JSON.parse(result.response.text());

        setLoading(false);
        const docId = Date.now().toString();
        const result_ = await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripPlan: tripResp, //AI generated trip plan
            tripData: JSON.stringify(tripData), //user selected trip data
            docId:docId,
        });

         console.log("Trip successfully saved to Firestore.");
          router.push("/(tabs)/mytrip");
        } catch (error) {
          console.error("Error generating or saving trip:", error);
        } finally {
          setLoading(false);
        }
        
    }
  return (
    <View style = {{
        padding: 25,
        paddingTop:50,
        backgroundColor:Colors.WHITE,
        height: '100%',
    }}>
      <Text style = {{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        // marginTop: 25,
        textAlign: 'center',
      }}>Please wait...</Text>

      <Text style = {{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginTop: 25,
        textAlign: 'center',
      }}> We're generating your trip - good things take time...</Text>

      <Image source = {require('./../../assets/images/giphy.gif')}
       style = {{
        objectFit: 'contain',
        width: '100%',
        height:300,
        marginTop: 25,
       }} />

       <Text style = {{
        fontFamily: 'outfit',
        color:Colors.GRAY,
        fontSize: 20,
        marginTop: 25,
        textAlign: 'center',
      }}>Don't go back</Text>

    </View>
  )
}