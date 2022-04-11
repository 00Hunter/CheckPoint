import {React,useEffect,useState,useContext} from "react";
import {StyleSheet,View,TextInput} from 'react-native'
import * as location from 'expo-location'
import { SafeAreaView } from "react-native-safe-area-context";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import locationApi from '../api/location'


import Cache2 from "../Utils/Cache2";
import useLocation from "../hooks/useLocation";
import Button from '../Components/Button'
import AuthContext from "../hooks/AuthContext";







export default function LocationSave({navigation}){

    const userContext=useContext(AuthContext);
    const userId=userContext.user;
     const getlocation=useLocation();

    // const [obj,setobj]=useState();
    const [name,setName]=useState();
    
        const permission=async()=>{
            const {granted}= await location.requestForegroundPermissionsAsync();
            if(!granted) return;
        }

    const handleSubmit=async()=>{

        //setting location to local variables
        //    const result= await Cache2.storeData(name,user,getlocation)
            //calling storelocation api
            // console.log()
            console.log(userId)
           const storedLocation=await locationApi.storeLocation(name,userId,getlocation)
                // console.log(getlocation);
        //    console.log(storedLocation)
            // if(!storedLocation=true){
            //     return alert("Could not save the location")
            // }
            alert("Location Saved!")
        // //updating the location and saving the location to the storage
    }


 useEffect(()=>{
     permission();
 },[])
    
    
return(
    <SafeAreaView style={styles.container}>
            <View style={styles.backbutton}>
                        <MaterialCommunityIcons onPress={()=>{navigation.navigate("HomeScreen")}}  size={40} name={'arrow-left'}/>
                </View>

                <View style={styles.textContainer}>
                    <TextInput style={styles.text} placeholder="Name" onChangeText={(text)=>{setName(text)}} />   
                </View>

                {/* <View style={styles.add}>
                    <SaveButton Children={"GET LOCATION"} onPress={()=>console.log("hello")} />
                </View> */}

                <View style={styles.add}>
                    <Button title={"Save"} onPress={handleSubmit}/>
                </View>

            
            
        
    </SafeAreaView>  
)}

const styles=StyleSheet.create({
    add:{
        padding:10
    },
    button:{
        backgroundColor:"black"
    },
     container:{
          
          backgroundColor:"#8d8d8d",
          flex:1
      },
    
    textContainer:{
        backgroundColor:"#bdbdbd",
        padding:8,
        borderRadius:30,
        width:"100%",
        flexDirection:"row",
        marginVertical:14,
        height:70,
    },
    text:{
        
        padding:8,
        fontSize:20
        
    }
    
})