import { Image,StyleSheet, TextInput, View,Text} from 'react-native'
import {React,useContext,useState} from 'react'
import { Formik } from 'formik'
import  jwtDecode from 'jwt-decode' 

import auth from '../api/auth'
import AuthContext from '../hooks/AuthContext'
import secureStore from '../Utils/secureStore'
import ErrorMessage from '../Components/ErrorMessage'
import Button from "../Components/Button"





export default function LoginScreen() {
    const authContext=useContext(AuthContext);
    const[error,setError]=useState(false);
    

    const handleSubmit=async({email,password})=>{
    const result=await auth.login(email,password)
    console.log(result.status)
    
    if(result.status==400)   
    {
        setError(true)
        console.log("hello")
        return;
    }
 
    
    
    if(result.status==200){
    setError(false)

    // console.log(result.data)
    const user=jwtDecode(result.data);

    // console.log("hello user",user);
    
    await authContext.setUser(user);
    secureStore.storeToken(result.data);
    }
    }

    

  return (
      
    <View >
        <View style={styles.container}>
        <Text style={[styles.loginText]}>Login</Text>
        </View>
        <View style={styles.back}>
        <Formik
        initialValues={{email:"",password:""}}
        onSubmit={handleSubmit}
        >
            {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                <>
                 <View style={styles.EmailCol}>
                 {/* <Text style={styles.text}>Email</Text> */}
                    <TextInput 
                    style={styles.email} 
                    onChangeText={handleChange("email")}
                    onBlur={()=>setFieldTouched("email")} 
                    selectionColor={'black'}
                    placeholder="Email"
                    />   
                    <View style={styles.line}>
                    </View>
                </View>

                <ErrorMessage visible={touched.email} error={error}/>

                <View style={styles.PasswordCol}>
                    <TextInput 
                    style={styles.password}  
                    onBlur={()=>setFieldTouched("password")} 
                    onChangeText={handleChange("password")}
                    selectionColor={'black'}
                    // keyboardType="default"
                    secureTextEntry={true}
                    placeholder="Password"
                    />   
                    <View style={styles.line}>
                    </View>
                </View>
                
                
                <ErrorMessage visible={touched.password} error={error}/>

           
                
                <View style={styles.login}>
                    <Button 
                    title='Login' 
                    style={styles.btn} 
                    onPress={handleSubmit}
                    textcolor={{color:"#ffffff"}}
                    />
                </View>
                </>
            )}

        </Formik>
        </View>
        
    </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:,
        height:250,
        backgroundColor:"#5c6bc0"
    },
    btn:{
        backgroundColor:"#5c6bc0",
        top:25,
        color:"#ffffff"
    },
    back:{
        marginTop:110,
    },
    email:{
        color:"black",
        fontSize:17,
        padding:8
    },
    EmailCol:{
        width:"95%",
        padding:5,
        alignSelf:"center",
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20
    },
    password:{
        // borderRadius:25,/
        color:"black",
        fontSize:17,
        padding:6,
    },
    PasswordCol:{
        width:"95%",
        padding:10,
        alignSelf:"center",
        marginTop:40,
        marginBottom:10,
        borderColor:"#E8E8E8",
        borderWidth:2,
        borderRadius:20    
    },
    login:{
        margin:10
    },
    line:{
        width:"95%",
        alignSelf:"center",
    },
    loginText:{
        fontSize:50,
        color:"#ffffff",
        top:150,
        left:15,
    },
    text:{
        margin:8,
        padding:6,
        margin:9,
        fontSize:17,
        color:"#5c6bc0"
    },
    logo:{
        height:310,
        width:"100%"
    },

})