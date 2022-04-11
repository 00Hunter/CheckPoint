import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import color from '../color';

export default function AppTextInput({...otherprops}) {
  return (
    <View style={styles.container}>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
       
       
    }, 
    text:{
        color:color.light,
        padding:8,
        fontSize:25
        

    },

});
