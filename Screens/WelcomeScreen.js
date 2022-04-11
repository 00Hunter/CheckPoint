import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'


export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.Login}>
             <Button title='Login' onPress={()=>{navigation.navigate("Login")}}/>    
        </View>
        <View style={styles.Register}>
             <Button title='Register' onPress={()=>{navigation.navigate("Register")}}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    marginTop:300
},
Login:{
    padding:15
},
Register:{
    padding:15
}
})