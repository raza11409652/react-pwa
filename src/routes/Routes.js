import React from 'react';
import {BrowserRouter, Route ,  Switch} from 'react-router-dom';
import Login from '../components/Login/Login'
import Error from '../components/Error/Error' 
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dash" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="*" component={Error}/>
            
        </Switch>
    </BrowserRouter>
    );
export default Routes;