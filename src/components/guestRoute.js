import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useAuth} from 'providers/authProvider';

const  GuestRoute =({children,...rest})=>{
console.log("In GuestRoute")
const onlyChild = React.Children.only(children)
const authService = useAuth();

debugger;
    return(
        <Route {...rest} render={(props)=> !authService.isAuthenticated() ? React.cloneElement(onlyChild,{...props,...rest}) : <Redirect to={{pathname:'/'}}/>}></Route>
    )
}

export default GuestRoute;
