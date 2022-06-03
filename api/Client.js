import {create} from "apisauce";
import secureStore from "../Utils/secureStore";

const apiClient=create({
    // baseURL:"http://15.207.55.168/api"
    // baseURL:"http://15.20wd7.55.168/api"
    baseURL:"http://192.168.1.16:3000/api" 
    // baseURL:"http://0434-223-130-28-110.ngrok.io/api"
})
//Sending get request
apiClient.addAsyncRequestTransform(async(request)=>{
    const authToken=await secureStore.getToken();
    // console.log(authToken)
    if(!authToken) return;


    request.headers["x-auth-token"]=authToken;
    console.log(request)
})
 


export default {
    apiClient
};