import {React,useContext,useEffect,useState} from 'react';
import {RefreshControl,StyleSheet, View ,ScrollView,Button,Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppCard from '../Components/AppCard';
import Addbutton from '../Components/Addbutton';



import LocationContext from '../hooks/LocationContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../hooks/AuthContext'
import locationApi from '../api/location'
import ListItem from '../Components/ListItem';



const key='Location'

export default function ListLocationScreen({navigation}) {

  const userContext =useContext(AuthContext);
  const userId=userContext.user;
  const [error,setError]=useState(false);


 const locationContext=useContext(LocationContext);
const [refreshing, setRefreshing]=useState(false);




const onRefresh=async()=>{
  setRefreshing(true);
  const result =await locationApi.getLocation(userId._userId);
  // if(!result.ok)  return setError(true);

  // setError(false)
   locationContext.setlocation(result.data);
    console.log(userId._userId)
  setRefreshing(false)

}


const loadLocations=async()=>{

  //sending get request with headers 
  const result=await locationApi.getLocation()
  // console.log("Hellllllo",result.data)
  // if(!result.ok)  return setError(true);

    // setError(false);
    locationContext.setlocation(result.data);   
}

const locations=locationContext.location || [];

useEffect(()=>{
  loadLocations();
},[])

  return (
     
      <SafeAreaView style={styles.container}>
        
        <View style={styles.buttons}>
           <MaterialCommunityIcons onPress={()=>{navigation.navigate("HomeScreen")}}  size={30} name={'arrow-left'} color={"#5c6bc0"}/>     
            <Text style={styles.header}>Previous Locations</Text>
         </View>
        
            {/* {error&&
            <>
              <Text>Error</Text>
              <Button title='Retry'  onPress={retry} />
            </>} */}
          <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          >
            {locations.map((loc,index)=>{
               
         return( 
                // <AppCard info={loc} index={index} />
                <ListItem info={loc} index={index} />
         ) 
        
       })
       
      }
        
          </ScrollView>
          <View style={styles.add} >
           <Addbutton onPress={()=>{navigation.navigate("LocationSave")}}/>
           </View>
      </SafeAreaView>
       
  );
}

const styles = StyleSheet.create({
  add:{
    // alignItems:"flex-end",
    alignSelf:"flex-end",
    alignItems:"flex-end",
    position:"absolute",
    bottom:30

  },
  buttons:{
    marginTop:15,
    flexDirection:"row",
    // justifyContent:"center",
    // alignContent:"center",
    alignItems:"center"
  },
  container:{
    backgroundColor:"#e8ebed",
    flex:1
  },
  header:{color:"#5c6bc0",
    fontSize:20,
    alignItems:"center",
    left:70
  },

  scrollView:{
    backgroundColor:"black",
   
  },
  
});
