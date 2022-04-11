import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';



export default function AppText({Children,style}) {
    return (
       
            <View>
                    <Text style={[styles.text,style]}>
                        {Children}
                    </Text>
            </View>
      

    )
}

const styles = StyleSheet.create({
    text:{
        color:'#EFD469',
        fontSize:50
    }
})
