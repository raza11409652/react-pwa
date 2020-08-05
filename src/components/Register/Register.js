import  React , { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from 'react-router-dom';
import registerService from '../../service/registerservice';
import { Redirect } from "react-router-dom";
class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            first :'' ,
            last:'', 
            date:'',
            gender:'Male',
            isLoading:false , 
            redirect : false

        } ; 
        this.register = this.register.bind(this);
    }
    register = (e)=>{
        console.log(e);
        e.preventDefault();
        console.log(this.state);
        if(this.state.first === null ||this.state.first ===''){
           alert('Please enter first name');
            return ; 
        }
        if(this.state.last === null ||this.state.last ===''){
            alert('Please enter last name');
             return ; 
        }
        if(this.state.date ===null ||this.state.date ===''){
            alert('Please enter date')
            return  ; 
        }
        registerService(this.state).then((result)=>{
           let error = result.error ; 
           if(error === false){
            let user = result.user ; 
            console.log(user);
            let password = result.password ; 
            let loginId  =user.user_login_id ; 
            alert('Your account has been created Login ID' + loginId + "Password  : "+password) ; 
            this.setState({redirect:true});
            

           }
        });
    }

    change=(e)=>{
        console.log(e);
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state);     
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to="/"></Redirect>
            )   
        }
        return(
           
           <form type="POST" onSubmit={this.register}>
        
                <div className="bg-white container p-5 text-center">
                <p>Whats your name</p>
                <div className="form-group">
                    <input className="input-control" name="first" onChange={this.change} placeholder="First name"></input>
                </div>
                <div className="form-group">
                    <input className="input-control" name="last" onChange={this.change} placeholder="Last name"></input>
                </div>
                <p>And your gender ?</p>
                <div className="selector">
                    <div>
                    <input id="nric" type="radio" name="gender" onChange={this.change} value="male" defaultChecked ></input>
                        <label  className="config-select">  
                        <span>MALE  </span>
                    </label>
                    </div>
                    <div>
                    <input id="nric" type="radio" name="gender" onChange={this.change} value="female" ></input>
                        <label  className="config-select">  
                        <span>FEMALE  </span>
                    </label>
                    </div>
                </div>
                <p className="mt-2 mb-0">Whats your date of birth ?  </p>
                <span className="text-small text-secondary">This can't be changed</span>
                <div className="form-group mt-2">
                    <input className="input-control" name="date" onChange={this.change} placeholder="YYYY/MM/DD"></input>
                </div>
                <NavLink to="/"> Login Now</NavLink>
                <div className="btn-wrapper-floating">
                    <button className="floating-btn" type="submit">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
           </form>
        );
    } ;
}
export default Register ; 