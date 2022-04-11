import { StyleSheet, TextInput, View,Button } from 'react-native'
import {React,useContext} from 'react'
import { Formik } from 'formik'

import auth from '../api/auth'
import AppText from '../Components/AppText'
import AuthContext from '../hooks/AuthContext'
import secureStore from '../Utils/secureStore'





export default function LoginScreen() {
    const authContext=useContext(AuthContext);

    const handleSubmit=async({email,password})=>{
    const result=await auth.login(email,password)
    authContext.setUser(result.data)
    secureStore.storeToken(result.data);
    // console.log(result.data)
    }

  return (
    <View style={styles.container}>
        <Formik
        initialValues={{email:"",password:""}}
        onSubmit={handleSubmit}
        // validationSchema={ValidationSchema}
        >
            {({handleChange,handleSubmit,errors})=>(
                <>
                 <View style={styles.textContainer}>
                    <TextInput 
                    style={styles.email} 
                    placeholder="Email" 
                    onChangeText={handleChange("email")} 
                    />   
                </View>
                <AppText Children={errors.email}/>
                <View style={styles.textContainer}>
                    <TextInput 
                    style={styles.password} 
                    placeholder="Password" 
                    onChangeText={handleChange("password")}
                    />   
                </View>
                <View>
                    <Button 
                    title='Login' 
                    style={styles.btn} 
                    onPress={handleSubmit}/>
                </View>
                </>
            )}
        </Formik>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:200
    },
    email:{
        padding:10
    },
    password:{
        padding:10
    }
})