import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import react from 'react';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack=createNativeStackNavigator();
const AuthNavigator=()=>{
    return( 
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>)
   
}

export default AuthNavigator