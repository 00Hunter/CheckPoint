import {React,useContext,useEffect,useState} from 'react';
import {RefreshControl,FlatList,StyleSheet, View ,ScrollView,Button,Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import AppCard from '../Components/AppCard';
import Addbutton from '../Components/Addbutton';

import Cache2 from '../Utils/Cache2';

import LocationContext from '../hooks/LocationContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthContext from '../hooks/AuthContext'
import locationApi from '../api/location'
import AppText from '../Components/AppText';


const key='Location'

export default function ListLocationScreen({navigation}) {

  const userContext =useContext(AuthContext);
  const userId=userContext.user;
  const [error,setError]=useState(false);


 const locationContext=useContext(LocationContext);
const [refreshing, setRefreshing]=useState(false);




const onRefresh=async()=>{
  setRefreshing(true);
  // const loc =await Cache2.getData(key);
  const result =await locationApi.getLocation(userId);
  if(result.ok)  return setError(true);
  
  
   locationContext.setlocation(result)
  setRefreshing(false)
}
const retry=async()=>{
  const result =await locationApi.getLocation(userId);
  if(result.ok)  return setError(true);
  setError(false);
  locationContext.setlocation(result)
 
}

const loadLocations=async()=>{
    console.log(userId)
  const result=await locationApi.getLocation(userId)
  // if(result.ok)  return setError(true);


    setError(false);
    locationContext.setlocation(result.data);
    // console.log(result.data);
    // console.log(result.data)
     
}

const noData=()=>{
  return(
    <View>
      <Text>hi123</Text>
    </View>
  )
}

useEffect(()=>{
  loadLocations();
},[])

  return (
     
      <SafeAreaView>
        <View style={styles.buttons}>
          <View style={styles.icon}>
           <MaterialCommunityIcons onPress={()=>{navigation.navigate("HomeScreen")}}  size={40} name={'arrow-left'}/>
           </View>
           <View style={styles.add}>
           <Addbutton onPress={()=>{navigation.navigate("LocationSave")}}/>
           </View>
         </View>

            {error&&
            <>
              <Text>Error</Text>
              <Button title='Retry'  onPress={retry} />
            </>}
          <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
          >
            {locationContext.location?  locationContext.location.map((loc,index)=>{
         return( 
                <AppCard info={loc} index={index} />
         ) 
        // console.log(loc,index)
       }):
       noData()
      }
          </ScrollView>
              
      </SafeAreaView>
       
  );
}

const styles = StyleSheet.create({
  add:{
      // padding:3
  },
  buttons:{
    marginTop:15,
    // height:300,
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  },
  container:{
    backgroundColor:"#bdb9b7"
  },
  icon:{
    flex:1
  },
  scrollView:{
    backgroundColor:"#bdb9b7",
   
  }
});
