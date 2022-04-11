import { Button,StyleSheet, TextInput, View } from 'react-native'
import {React,useContext} from 'react'
import { Formik } from 'formik'

// import user from '../api/user'
// import Client from '../api/Client'
import user from '../api/user'
import AuthContext from '../hooks/AuthContext'

export default function RegisterScreen() {

    const authContext=useContext(AuthContext);
    const handleSubmit=async({name,email,password})=>{
        // console.log(name,email,password)
      const result=await user.register(name,email,password)
        
        authContext.setUser(result.data);
    }
  return (
    <View style={styles.container}>
        <Formik
        initialValues={{name:'',email:'',password:''}}
        onSubmit={handleSubmit}
        >
            {({handleChange,errors,handleSubmit})=>(
                <>
                <TextInput 
                placeholder='Name'
                style={styles.name}
                onChangeText={handleChange('name')}
                />

                <TextInput
                placeholder='Email'
                onChangeText={handleChange('email')}
                style={styles.email}
                />

                <TextInput
                placeholder='password'
                style={styles.password}
                onChangeText={handleChange('password')}
                />
                <Button title='Register' onPress={handleSubmit}/>
                </>
            )}

        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:200,
        padding:10
    },
    name:{
        padding:10
    },
    email:{
        padding:10
    },
    password:{
        padding:10
    }    
})