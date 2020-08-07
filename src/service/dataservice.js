import axios from 'axios';
const dataservice = ()=>{
     return new Promise((resolve , reject)=>{
         axios.get('https://myfod.in/react-pwa-api/v1/data.php' , 
         )
         .then((responseJson)=>{
             resolve(responseJson.data)
         })
         .catch((err)=>reject(err));
     }) ; 
 
     
 }
 export default dataservice;