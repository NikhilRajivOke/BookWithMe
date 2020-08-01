import React,{useContext} from 'react';
import {loginVerifiedUser} from 'actions';
import jwt from 'jsonwebtoken';
import {connect} from 'react-redux';
import moment from 'moment';
import {userAuthenticated} from 'actions';

const {createContext} = React;

const AuthContext = createContext(null);
const AuthBaseProvider = ({children,dispatch}) =>{
    const decodeToken = token =>{
        return jwt.decode(token);
    }

    const signOut = () =>{
        localStorage.removeItem('bwm_token');
        dispatch({
            type:'USER_SIGNEDOUT'
        })
    }

    const isAuthenticated = () =>{
        const decodedtoken = decodeToken(getToken());
        debugger
        return isTokenValid(decodedtoken)
    }

    const isTokenValid = (decodedtoken) =>{
        debugger
        return (decodedtoken && moment().isBefore(getExpiration(decodedtoken)))
    }
    const signIn = (LoginData) =>{
        return loginVerifiedUser(LoginData)
        .then(token=>{
            const derivedtoken = token.token;
            localStorage.setItem('bwm_token',derivedtoken);
            const decodedToken = decodeToken(derivedtoken);

            dispatch(userAuthenticated(decodedToken));
            return token;
            })
    }       

    
    const authState = ()=>{
        const token = decodeToken(getToken());
        if(token && moment().isBefore(getExpiration(token))){
            dispatch(userAuthenticated(token))
        }
    }

    const getExpiration = (token)=>{
        return moment.unix(token.exp);
    }
    const getToken =()=>{
        return localStorage.getItem('bwm_token')
    }
    const authApi ={
        signIn,
        authState,
        signOut,
        isAuthenticated,
    }

    return(
        <AuthContext.Provider value={authApi}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthProvider  = connect()(AuthBaseProvider);
export const useAuth =() =>{
    return useContext(AuthContext);
}
export const withAuth = (Component) =>{
   return function(props){
       return (
           <AuthContext.Consumer>
               {(authApi)=><Component {...props} auth={authApi}></Component>}
           </AuthContext.Consumer>
       )
   }
}