import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useAuth} from 'providers/authProvider';

const  ProtectedRoute =({children,...rest})=>{

const onlyChild = React.Children.only(children)
const authService = useAuth();

    return(
        <Route {...rest} render={(props)=>authService.isAuthenticated() ? React.cloneElement(onlyChild,{...props,...rest}) : <Redirect to={{pathname:'/login'}}/>}></Route>
    )
}

export default ProtectedRoute;