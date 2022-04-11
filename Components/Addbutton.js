import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Addbutton({onPress}) {
    return (
       <TouchableOpacity onPress={onPress}> 
            <View style={Styles.container}>    
                            <MaterialCommunityIcons name='plus' size={30} style={Styles.plus} color={'#ffffff'}/>
             </View>
        </TouchableOpacity>  
    )
}

const Styles=StyleSheet.create({

    container:{
        backgroundColor:'#494949',
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
    
    },
})

const styles = StyleSheet.create({})
