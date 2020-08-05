import  React , { Component } from "react";
import loginService from '../../service/loginservice';
import { NavLink} from 'react-router-dom';
import './Login.css'
import { Redirect } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loginId :'' ,
            password:'' , 
            isLoading:false , 
            redirect : false

        } ; 
        this.login = this.login.bind(this);
        // this.notify = this.notify.bind(this );

    }
    login= (e)=>{
        e.preventDefault();
        const loginId = this.state.loginId ; 
        const password = this.state.password ; 
        if(loginId.length <6){
            console.log("Please enter valid login Id");
            return ;
        }
        if(password.length<8){
            console.log("Please enter valid password");
            return ; 
        }
        this.setState({isLoading:true}) ; 
        loginService(this.state).then((result)=>{
        // console.log(result);
        if(result.error){
            alert(result.msg);
            this.setState({isLoading:false}) ;  
            return ;
        }else{
            console.log(result.user) ;
           localStorage.setItem('user-id' , result.user.user_id);
           localStorage.setItem('user-name' , result.user.user_first_name + " "  + result.user.user_last_name) ; 
           localStorage.setItem('user-login' , loginId);
           this.setState({isLoading:false , redirect:true});

        }


       }) ;
    }
    change = (e)=>{
        this.setState({[e.target.name] : e.target.value}); 
        // console.log(this.state.loginId);
    }
    render(){
        if(this.state.redirect){
           return(
            <Redirect to="/dash"></Redirect>
           );
        }
        return(
            <div className="login-wrapper">
                <div className="header">PWA</div>
                <p className="sub-header">CatchPhrase</p>
                <form className="form" onSubmit={this.login}>
                <div className="form-group">
                    <input type="text" name="loginId" className="input-control" placeholder="Login Id" onChange={this.change}></input>
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="input-control" placeholder="Password" onChange={this.change}></input>
                </div>
                <div className="form-group">
                 {this.state.isLoading?<div className="btn btn-white btn-block">Please wait....</div>: <button type="submit" className="btn btn-white btn-block">Log in</button>    }  
                </div> 
                <NavLink to="/register"> New user register</NavLink>
                </form>
            </div>
        )
    }
}
export default Login;