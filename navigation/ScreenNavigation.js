import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListLocationScreen from '../Screens/ListLocationScreen';
import LocationSave from '../Screens/LocationSave';
import HomeScreen from '../Screens/HomeScreen';

const Stack=createNativeStackNavigator();

const ScreenNavigation=()=>{
    return(
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ListLocationScreen" component={ListLocationScreen}/>
        <Stack.Screen name="LocationSave" component={LocationSave}/>
    </Stack.Navigator>
    )
}

export default ScreenNavigation;