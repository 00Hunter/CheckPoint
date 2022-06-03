import * as location from 'expo-location'
import {useState,useEffect} from 'react';
// import Cache from '../Utils/Cache';


const key="Location";

const useLocation=()=>{
  const [Lat,setLocation]=useState();

  const getLocation=async()=>{

      try{   
            const {granted}= await location.requestForegroundPermissionsAsync();
            if(!granted){
                return;
            }else{
                const result=location.getCurrentPositionAsync({});
                const lat=(await result).coords.latitude;
                const lon=(await result).coords.longitude;
                setLocation({lat,lon})            
        }
    }
    catch(error){
        console.log(error);
    }
       
  }


  useEffect(()=>{
    getLocation();
  },[])

  return Lat ;
}

export default useLocation