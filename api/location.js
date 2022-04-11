import Client from "./Client";

const getLocation=(userId)=>Client.apiClient.get(`/store/${userId}`)

const storeLocation=(name,userId,location)=>Client.apiClient.post(`/store/${userId}`,{name,userId,location})
// const storeLocation=(name,userId,location)=>console.log("hello")

const deleteLocation=(id)=>Client.apiClient.put(`/store/${id}`,{id})

export default {getLocation,storeLocation,deleteLocation};