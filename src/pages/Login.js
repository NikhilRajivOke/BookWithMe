import React from 'react';
import LoginForm from 'components/forms/LoginForm';
import ApiError from 'components/forms/ApiError';
import {Redirect} from 'react-router-dom';
import {withAuth} from 'providers/authProvider';

class Login extends React.Component {
    state={
            shouldRedirect : false,
            errors : [],
    }
   
    loginUser = Logindata =>{     
        this.props.auth.signIn(Logindata)
        .then(token=>{       
            this.setState({shouldRedirect:true});
            })
        .catch(err=>this.setState({errors:err}));
    }
    render() {
        const {shouldRedirect,errors} = this.state;
        const { message } = this.props.location.state || '';
        if(shouldRedirect){
            return <Redirect to={{pathname:'/'}}/>
        }
        return (
            <div className = "bwm-form" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="page-title">Login</h1>
                        {message && <div className="alert alert-success">
                            {message}
                        </div>}
                    <ApiError errors={errors}/>
                    <LoginForm onSubmit={this.loginUser}/>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                            <img src="/images/login-image.jpg" alt="Login an user" />
                        </div>
                    </div>
                </div>
          </div >  
        )
    }
}


export default withAuth(Login);