import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData=async(key,lat)=>{
    try{
        // const location={
        //     lat,
        //     TimeStamp:Date.now()
        // }
        // console.log("lat",lat)
        await AsyncStorage.setItem(key,JSON.stringify(lat))
    }catch(error){
        console.log(error)
    }
}

const getData=async(key)=>{
    try{
        const value=await AsyncStorage.getItem(key)
        // console.log("1",value)
        const loc=JSON.parse(value);
        // console.log("2",loc)
        if(!loc){
            return null;
        }
        return loc;

    }catch(error){
        console.log(error)
    }
}
// const clearStorage = async () => {
//     try {
//       await AsyncStorage.clear()
//       alert('Storage successfully cleared!')
//     } catch (e) {
//       alert('Failed to clear the async storage.')
//     }
//   }

export default {storeData,getData}