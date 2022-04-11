import {react,useEffect,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {name as appName} from './app.json';

//---Import of Utils
import Cache2 from './Utils/Cache2';
import LocationContext from './hooks/LocationContext';
import secureStore from './Utils/secureStore';


//---Import of Screens

import ScreenNavigation from './navigation/ScreenNavigation';
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import AuthNavigator from './navigation/AuthNavigator';
import AuthContext from './hooks/AuthContext';



const key='Location'
export default function App() {

const[location,setlocation]=useState();
const [user,setUser]=useState();

//   const arr=async()=>{
//     const loc =await Cache2.getData(key);
//     setlocation(loc);
// }
const restoreToken=async()=>{
  const result =await secureStore.getToken();
  setUser(result);
}

useEffect(()=>{
    restoreToken();
},[])



  return (
    <AuthContext.Provider value={{user,setUser}}>
    <LocationContext.Provider value={{location,setlocation}}>
        <NavigationContainer>
        {user?<ScreenNavigation/>:<AuthNavigator/>}
        </NavigationContainer>
    </LocationContext.Provider>
    </AuthContext.Provider> 
  );
}

const styles=StyleSheet.create({

container:{
  marginVertical:100
}

})


