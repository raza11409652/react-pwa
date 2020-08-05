import axios from 'axios';
const loginService = (data)=>{
    let loginId = data.loginId ; 
    let password = data.password ; 
    let formData = new FormData();
    formData.append("loginId" , loginId);
    formData.append("password" , password);
     return new Promise((resolve , reject)=>{
         axios.post('http://localhost/api/v1/login.php' , 
         formData
         )
         .then((responseJson)=>{
             resolve(responseJson.data)
         })
         .catch((err)=>reject(err));
     }) ; 
 
     
 }
 export default loginService;