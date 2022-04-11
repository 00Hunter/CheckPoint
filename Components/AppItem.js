import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './AppText'


export default function AppItem({item}) {
    return (
        <View style={Styles.container}>
            <MaterialCommunityIcons name='chevron-right' size={20}/>

            <View style={styles.detailcontainer}> 
            <AppText Children={item}/>
            </View>
            
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        padding:5,
        // backgroundColor:'#EFD469',
        backgroundColor:'blue',
        flexDirection:'row',
        height:40,
    },
    detailcontainer:{
        flex:1,
        margin:10
    }
    
})

const styles = StyleSheet.create({})
