
import AsyncStorage from '@react-native-async-storage/async-storage';

const key="Location"




const storeData=async(name,{lat,lon})=>{
    try{
        const locationcoor={
            Name:name,
            lat:lat,
            lon:lon
        }
            const Location = await AsyncStorage.getItem(key)
            let newLocation = JSON.parse(Location);
            if( !newLocation ){
            newLocation = []
            }

            newLocation.push( locationcoor )               
            await AsyncStorage.setItem(key, JSON.stringify(newLocation) )
            return true
            

 
    }catch(error){
        console.log(error)
        return error;
    }
}

const getData=async()=>{
    try{
        const value=await AsyncStorage.getItem(key)
        const loc=JSON.parse(value);    
        if(!loc){
            return null;
        }
        return loc;

    }catch(error){
        console.log(error)
    }
}

const deleteLocation=async(index)=>{
    const value=await AsyncStorage.getItem(key)
    const loc=JSON.parse(value);  
        loc.splice(index,1);
        await AsyncStorage.setItem(key, JSON.stringify(loc))
}



const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }



export default {deleteLocation,storeData,getData,clearStorage}