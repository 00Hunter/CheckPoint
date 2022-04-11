import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';


export default function SaveButton({title,onPress}) {
  return (
  <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>
          {title}
      </Text>
      
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1b1b1b",

        height:38,
        borderRadius:20,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontFamily:"Roboto",
        color:"white"
    }
});
