import React from 'react';
import RegisterForm from 'components/forms/RegisterForm'
import { registerUser } from 'actions';
import { Redirect } from 'react-router-dom';
import  ApiError  from 'components/forms/ApiError';

class Register extends React.Component {

    state = {
        shouldRegister: false,
        errors: [],
    }

    signUp = (registerData) => {
        registerUser(registerData)
            .then(() => this.setState({ shouldRegister: true }))
            .catch(error =>{ 
                this.setState({ errors: error })});
    }

    render() {
        const { shouldRegister, errors } = this.state;
        if (shouldRegister) {
            return <Redirect to={{ pathname: '/login' , state:{message:'You have succesfully registered !!'} }} />
        }
        return (
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="page-title">Register</h1>

                        <ApiError errors = {errors}/>
                        <RegisterForm onSubmit={this.signUp} />
                    </div>

                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
                            <img src="/images/register-image.jpg" alt="Register an user" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;