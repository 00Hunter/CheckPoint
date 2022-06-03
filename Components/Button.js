import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';


export default function SaveButton({title,onPress,style,textcolor}) {
  return (
  <TouchableOpacity onPress={onPress} style={[styles.container,style]}>
      <Text style={[styles.text,textcolor]}>
          {title}
      </Text>
      
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"#8d98f2",
        backgroundColor:"#ffffff",
        height:49,
        borderRadius:14,
        width:"100%",
        justifyContent:"center",
        
    },
    text:{
        fontSize:23,
        fontFamily:"Roboto",
        color:"black",
        alignSelf:"center",
        opacity:0.87
    }
});
