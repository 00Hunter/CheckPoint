import Client from "./Client";



const getLocation=()=>Client.apiClient.get(`/store`)

const storeLocation=(name,location)=>Client.apiClient.post(`/store`,{name,location})
// const storeLocation=(name,userId,location)=>console.log("hello")

const deleteLocation=(id)=>Client.apiClient.put(`/store/${id}`,{id})

export default {getLocation,storeLocation,deleteLocation};