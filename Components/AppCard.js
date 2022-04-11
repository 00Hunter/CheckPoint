import { React, useContext} from "react";
import {
  Linking,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// import Cache2 from '../Utils/Cache2'
import AppText from "./AppText";
import Cache2 from "../Utils/Cache2";
import LocationContext from "../hooks/LocationContext";
import AuthContext from "../hooks/AuthContext";
import locationApi from '../api/location';


export default function AppCard({ info, index, renderRightAction }) {

  const locationContext = useContext(LocationContext);
  const authContext=useContext(AuthContext);
  const user=authContext.user;
  

  

  const openMap = async () => {
    const link = `https://www.google.com/maps/search/?api=1&query=${info.userLocation.lat}%2C${info.userLocation.lon}`;
    try {
      Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
    console.log(info);
  };

  const Deletelocation = async () => {
    const newItems = locationContext.location;
    
    const filtred = newItems.filter(function (currentValue) {
      return currentValue !== info;
    });
    // Sending put request to db
    const result =await locationApi.deleteLocation(info._id);
    console.log(result);
    locationContext.setlocation(filtred);
    // await Cache2.deleteLocation(index);
    alert("Deleted!");
  };

  return (
   
    
      <TouchableOpacity onPress={openMap}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../images/image2.jpg")}
          />
          <View style={styles.detailContainer}>
            <View style={styles.text}>
              <AppText Children={info.name} style={styles.title} />
            </View>

            <TouchableOpacity style={styles.more}>
              <Feather
                name="more-vertical"
                size={24}
                color="black"
                onPress={Deletelocation}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: "#424242",
    overflow: "hidden",
    margin: 8,
    flexDirection: "column",
  },
  detail: {
    justifyContent: "center",
  },
  detailContainer:{
      flexDirection:"row"
  },
  image: {
    height: 170,
    width: "100%",
  },
  more: {
      padding:10
  },
  text: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
