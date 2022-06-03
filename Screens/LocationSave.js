import {React,useEffect,useState,useContext} from "react";
import {Image,Modal,StyleSheet,View,Text,TextInput} from 'react-native'
import * as location from 'expo-location'
import { SafeAreaView } from "react-native-safe-area-context";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import locationApi from '../api/location'


import useLocation from "../hooks/useLocation";
import Button from '../Components/Button'
import AuthContext from "../hooks/AuthContext";



export default function LocationSave({navigation}){

     const userContext=useContext(AuthContext);
     const userId=userContext.user;
     const getlocation=useLocation();

    
     const [name,setName]=useState();
     const [Visible,setVisible]=useState(false);

        const permission=async()=>{
            const {granted}= await location.requestForegroundPermissionsAsync();
            if(!granted) return alert("Permission not granted");
        }

     const handleSubmit=async()=>{
            try{
                const storedLocation=await locationApi.storeLocation(name,getlocation) 

                if(storedLocation.status!=200){
                    setVisible(false)
                    console.log("Error occured")
                }

                setVisible(true)
            }

            catch(e){
                console.log("Error occured")
            }
        }

        const handleSave=()=>{
            setVisible(true);
            navigation.navigate("HomeScreen")
        }

 useEffect(()=>{
     permission();
 },[])
    
    
return(

            <View style={styles.container} >
                <View style={styles.header}> 
                <View style={styles.backbutton}>
                       <MaterialCommunityIcons onPress={()=>{navigation.navigate("HomeScreen")}}
                         size={30} name={'arrow-left'} color={"white"}/>
                </View>
                    <Text style={styles.text}>Save Location</Text>
                </View>
               
                <View style={styles.BtnContainer}>
                    <View style={styles.textContainer}>
                        <TextInput style={styles.textInput} placeholder="Name" onChangeText={(text)=>{setName(text)}} maxLength={10}/>   
                    </View>

                    <View style={styles.add}>
                        <Button title={"Save"} onPress={handleSubmit} style={styles.SaveBtn} textcolor={{color:"#ffffff"}}/>
                    </View>
                    <Modal 
                    visible={Visible}
                    animationType={"fade"}
                    transparent={true}
                    >
                            {/* <Button title={"CLose"}onPress={()=>setVisible(false)}/> */}
                            <View style={styles.ModalContainerParent}>
                                    <View style={styles.ModalContainerChild}>
                                        <View style={styles.ModalHeader}>
                                            <Image source={require("../assets/okay-96.png")} style={styles.ModalImage}/>
                                            <Text style={styles.TextAwesome}>Awesome</Text>
                                        </View>
                                        <Button title={"Close"} style={styles.CloseBtn} textcolor={{color:"#4d5ba6"}} onPress={handleSave}></Button>
                                    </View>
                            </View>
                    </Modal>
                </View>              
         </View>
    // </SafeAreaView>  
)}

const styles=StyleSheet.create({
    add:{
        padding:10,
        
    },
    button:{
         backgroundColor:"black",
    },
    BtnContainer:{
       top:100
    },
    backbutton:{
        bottom:20
    },
     container:{
          backgroundColor:"#F5F5F5",
          flex:1
      },
      CloseBtn:{
        top:40,
        backgroundColor:"#e8e8e8"
    },
    header:{
        height:200,
        width:"100%",
        backgroundColor:"#5c6bc0"   ,
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    ModalContainerParent:{
        backgroundColor:"#353535",
        flex:1,
        opacity:0.9,
        justifyContent:"center",
        alignItems:"center"
    },
    ModalContainerChild:{backgroundColor:"white",
        height:250,
        width:"95%",
        borderRadius:20
    },
    ModalHeader:{width:"100%",
        height:150,
        backgroundColor:"#4d5ba6"
    },
    ModalImage:{
        alignSelf:"center",
        top:5
    },
    TextAwesome:{fontSize:30,
        alignSelf:"center",
        top:3,
        color:"#35ab75",
        fontWeight:"bold"
    },
    textContainer:{
        backgroundColor:"#ffffff",
        padding:8,
        borderRadius:40,
        height:50,
        justifyContent:"center",
        width:"95%",
        alignSelf:"center",
        borderColor:"#E8E8E8",
        borderWidth:1,
    },
    text:{
        fontSize:50,
        color:"#ffffff",
        margin:20,
        alignSelf:"center",
    },
    textInput:{
        alignContent:"center",
        justifyContent:"center",
        padding:6,
        fontSize:20,
    
    },
    SaveBtn:{
        backgroundColor:"#5c6bc0",
        height:50,
        top:30
    },
    
})