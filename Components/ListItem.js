import {React,useContext,useState} from 'react'
import { Modal,Image,Linking,StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';



import LocationContext from "../hooks/LocationContext";
import AuthContext from "../hooks/AuthContext";
import locationApi from '../api/location';



export default function ListItem({info}) {

    const locationContext = useContext(LocationContext);
    const authContext=useContext(AuthContext);
    const user=authContext.user;
    const [Visible,setVisible]=useState(false)

    const openMap = async () => {
        // console.log("BYREEEEEE",info.userLocation)
        const link = `https://www.google.com/maps/search/?api=1&query=${info.userLocation.lat}%2C${info.userLocation.lon}`;
        try {
          Linking.openURL(link);
        } catch (error) {
          console.log(error);
        }
        console.log(info);
      };
    
      const Deletelocation = async () => {

        const newItems = locationContext.location;
        
        const filtred = newItems.filter(function (currentValue) {
          return currentValue !== info;
        });
        // Sending put request to db
        const result =await locationApi.deleteLocation(info._id);
        console.log(result);
        locationContext.setlocation(filtred);

      };

     

  return (
    
        <TouchableOpacity onPress={openMap}>
            <View style={styles.Container}>
                    <Image source={require('../images/image4.jpg')} style={styles.image4}/>
            <View style={styles.Comps}>
                    <Text style={styles.Text}>{info.name}</Text>
                     <TouchableOpacity onPress={Deletelocation} style={styles.bin}>
                      <Image source={require("../assets/Delete2.png")} style={styles.Delete}/>
                    </TouchableOpacity>

                   
            </View>

            </View>
        </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    bin:{
        width:"45%"
    },
    Container:{
        flexDirection:'row',
        margin:10,
        backgroundColor:"#c5cae9",
        borderRadius:17,
        alignItems:"center",
        width:"95%",
        alignSelf:"center",
        height:100,
        borderColor:"#5c6bc0",
        borderWidth:1
    },
    Comps:{
        flexDirection:"row"
    },
    Delete:{
        right:10,
      
    },
    image4:{
        margin:10,
        height:90,
        width:90,
        borderRadius:100,
        borderColor:"#ad1457",
        borderWidth:1
    },
    Text:{
      color:"#5c6bc0",
      padding:15,
      fontWeight:'600',
      fontSize:30,
      flex:1
  }
})