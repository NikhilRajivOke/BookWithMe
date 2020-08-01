import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import RentalHome from './pages/RentalHome.js';
import {Route,Switch} from 'react-router-dom';
import RentalDetail  from './pages/RentalDetails';
import SecretPage from './pages/SecretPage';
import ProtectedRoute from './components/auth/protectedRoute';
import GuestRoute from './components/guestRoute';
const Routes = () =>{
    return(
        <div className="container bwm-container">
        <Switch>
        <Route exact path='/'>
        <RentalHome></RentalHome>
        </Route>
        <ProtectedRoute path='/secret'>
            <SecretPage></SecretPage>
        </ProtectedRoute>
        <GuestRoute path='/login'>
        <Login></Login>
        </GuestRoute>
        <GuestRoute path='/register'>
        <Register></Register>
        </GuestRoute>
        <Route path='/rentals/:rental_id'>
            <RentalDetail></RentalDetail>
        </Route>
        </Switch>
        </div>
        )
}
export default Routes;