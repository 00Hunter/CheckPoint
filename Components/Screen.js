import React from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import Constants  from 'expo-constants'

export default function Screen({Children}) {
    return (    
       <SafeAreaView style={styles.view}>
           {Children}
       </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    
    view:{
        paddingTop:Constants.statusBarHeight
    }
})


