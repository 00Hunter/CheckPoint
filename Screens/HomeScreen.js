import 'react-native-gesture-handler';
import {React,useContext,useState} from 'react';
import { TouchableOpacity,Modal,Image,StyleSheet, View ,Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'





import Button from "../Components/Button"
import AuthContext from '../hooks/AuthContext';
import LocationContext from '../hooks/LocationContext';

import locationApi from "../api/location";
import secureStore from '../Utils/secureStore';


export default function HomeScreen({navigation}) {
    const locationContext=useContext(LocationContext)
    const authContext=useContext(AuthContext);
    const userId=authContext.user;
        
  
    const handleLogout=()=>{
        authContext.setUser(null);
        secureStore.removeToken();
    }


        const [Visible,setVisible]=useState(false)
        const [Save,setSave]=useState(false);

  return (
      <View style={styles.containers}>
           <View style={styles.logoContainer}>
                <Image source={require('../assets/CheckPoint.jpg')} style={styles.logo}/>      
          </View>

          <TouchableOpacity onPress={()=>setVisible(true)} style={styles.chevron} >
                <Image source={require("../assets/logout.png")} style={styles.logout}/>
          </TouchableOpacity>
          <Modal 
            visible={Visible} 
            animationType="fade" 
            style={styles.modalContent}
            transparent={true}
            statusBarTranslucent={false}
          >
              <View style={styles.modalBackground}>    
                    <View style={styles.modalContainer}>
                      <Text style={styles.modalText}>Logout From Check Point ?</Text>
                         <View style={styles.buttonContainer}> 
                            <Button title={'Yes, log out'}onPress={handleLogout} style={styles.modallogoutBtn} textcolor={{color:"#ffffff"}}/>
                            <Button title={'Close'}onPress={()=>setVisible(false)} style={styles.modalcloseBtn} textcolor={{color:"#3044bd"}}/>
                         </View>
                    </View>
                </View> 
          </Modal>

         <View style={styles.container}>
                <View style={styles.previous}>
                    <Button 
                    title='Previous Locations'
                    onPress={()=>navigation.navigate("ListLocationScreen")}
                    textcolor={{color:"#001b8f"}}
                    style={styles.PreviousBtn}
                    />
                </View>

                <View style={styles.save}>
                    <Button 
                    title ='Save Location'
                    onPress={()=>navigation.navigate("LocationSave")}
                    textcolor={{color:"#001b8f"}}
                    style={styles.SaveLocationBtn}
                    />
      
                </View>    
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",
         margin:20
    },
    container:{
        marginVertical:350,
    },
    containers:{
        backgroundColor:"#5c6bc0"
    },
    chevron:{
        top:60,
        left:10,
        
    },
    logoContainer: {
        position: "absolute",
        top:5,
        justifyContent:"center"
      },
    logo:{
        width:400,
        height:400
    },
    modalBackground:{
        backgroundColor:"#191919",
        opacity:0.9,
        flex:1,
    },
    modalContainer: {
          top:250,
          height:200,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf:"center",
          backgroundColor: '#ffffff',
          borderRadius:10,
    },

    modalcloseBtn:{
        backgroundColor:"#e8e8e8",
        borderRadius:7,
        width:"40%"
    },

    modallogoutBtn:{
        backgroundColor:"#3044bd",
        width:"60%",
        borderRadius:7
    },
    modalText:{
        fontSize:22,
        fontWeight:"bold",
        color:"black",
        marginVertical:10,
        left:27,
        bottom:15
    },
    PreviousBtn:{
        height:40
    },
    previous:{
        padding:10,
        margin:5
    },
    save:{
        padding:10,
        margin:5
    },
    logout:{
        height:28,
        width:28
    },
    SaveLocationBtn:{
        height:40
    },
});
