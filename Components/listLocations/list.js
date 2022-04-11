import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function list({location}) {
  return (
    
        location.map((loc,index)=>{
           return(
            <AppCard onpress={()=>console.log("hello")} info={loc}/>
           )
        })
       
  );
}

const styles = StyleSheet.create({});
