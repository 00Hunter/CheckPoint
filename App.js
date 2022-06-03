import 'react-native-gesture-handler';
import {react,useEffect,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';


//---Import of Utils
import LocationContext from './hooks/LocationContext';
import secureStore from './Utils/secureStore';


//---Import of Screens
import ScreenNavigation from './navigation/ScreenNavigation';
import AuthNavigator from './navigation/AuthNavigator';
import AuthContext from './hooks/AuthContext';
import ListItem from './Components/ListItem';



export default function App() {

const[location,setlocation]=useState();
const [user,setUser]=useState();

const restoreToken=async()=>{
  const result =await secureStore.getToken();
  // console.log('hello honey',result);

  setUser(jwtDecode(result));
}

useEffect(()=>{
    restoreToken();
},[])


  return (
      <AuthContext.Provider value={{user,setUser}}>
      <LocationContext.Provider value={{location,setlocation}}>
        <View style={{flex:1,backgroundColor:"#545454"}}>
          <NavigationContainer>
          {user?<ScreenNavigation/>:<AuthNavigator/>}
          </NavigationContainer>
          </View>
      </LocationContext.Provider>
      </AuthContext.Provider> 
      // <ListItem/>
    )
}




