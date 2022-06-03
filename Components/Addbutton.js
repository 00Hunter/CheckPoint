import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Addbutton({onPress}) {
    return (
       <TouchableOpacity 
       onPress={onPress}
       activeOpacity={0.7}  
       > 
            <View style={Styles.container} >    
                            <MaterialCommunityIcons name='plus' size={40} style={Styles.plus} color={'#ffffff'}/>
             </View> 
         </TouchableOpacity>   
    )
}

const Styles=StyleSheet.create({

    container:{
        backgroundColor:"#5c6bc0",
        width:70,
        height:70,
        right:10,
        borderRadius:70,
        alignItems:"center",
        justifyContent:"center",
    
    },
})


