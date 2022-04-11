import {React,useContext,useEffect} from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';

import Button from "../Components/Button"
import AuthContext from '../hooks/AuthContext';
import LocationContext from '../hooks/LocationContext';

// import AuthContext from '../hooks/AuthContext';
import locationApi from "../api/location";
import secureStore from '../Utils/secureStore';





export default function HomeScreen({navigation}) {
    const locationContext=useContext(LocationContext)
    // const userContext=useContext(AuthContext)
    const authContext=useContext(AuthContext);
    const userId=authContext.user;

  
    const handleLogout=()=>{
        authContext.setUser(null);
        secureStore.removeToken();
    }
    // const getLocation=async()=>{
    //     const locations=locationContext.Location;
    //     if(!locations){
    //         await locationApi.getLocation(userContext.user)
    //     }
    // }

    useEffect(()=>{
        // getLocation();
        // getStarted();
    },[])

  return (
      <View style={styles.containers}>
           <View style={styles.logoContainer}>
           <Image source={require('../assets/logo.png')} style={styles.logo}/>      
          </View>
          
      <View style={styles.container}>
            <View style={styles.previous}>
                <Button title='Previous Location' onPress={()=>navigation.navigate("ListLocationScreen")}/>
            </View>

            <View style={styles.save}>
                <Button title ='Save Location'onPress={()=>navigation.navigate("LocationSave")}/>
            </View>
            <View style={styles.logout}>
                <Button title ='Logout'onPress={()=>{handleLogout()}}/>
            </View>
           
    </View>
</View>

  );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:350,
        padding:10,
        margin:20
    },
    containers:{
        backgroundColor:"#545454"
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",
      },
    logo:{
        width:400,
        height:400
    },
    previous:{
        padding:10
    },
    save:{
        padding:10
    },
    logout:{
        padding:10
    }
});
