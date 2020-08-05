import axios from 'axios';
const registerService = (data)=>{
    let firstName = data.first ; 
    let lastName = data.last ; 
    let date  = data.date    ; 
    let gender  = data.gender ; 
    let formData = new FormData();
    formData.append("firstName" , firstName);
    formData.append("lastName" , lastName);
    formData.append("date"  ,date);
    formData.append("gender" , gender) ;
     return new Promise((resolve , reject)=>{
         axios.post('hhttp://18.224.211.14/react-pwa-api/v1/register.php' , 
         formData
         )
         .then((responseJson)=>{
             resolve(responseJson.data)
         })
         .catch((err)=>reject(err));
     }) ; 
 
     
 }
 export default registerService;