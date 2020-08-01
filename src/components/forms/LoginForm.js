import React from 'react';
import { useForm } from 'react-hook-form';
import FormError from './FormError';


const Email_Pattern = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/
const LoginForm = ({ onSubmit }) => {

    const { register, handleSubmit, errors } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    ref={register({ required:"Email is required ", pattern: {value:Email_Pattern,message:"Invalid email format!!"} })}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email" />
                  <FormError errors={errors} name="email">
                        {
                            (message)=><p>{message}</p>
                        }
                  </FormError>

            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    ref={register({ required:"Password is required", minLength: { value: 8, message: "Password must be minimum of 8 characters!" } })}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password" />
                    <FormError errors={errors} name="password">
                        {
                            (message)=><p>{message}</p>
                        }
                    </FormError>
            </div>
            <button
                type="submit"
                className="btn btn-bwm-main">Submit</button>
        </form>

    )
}
export default LoginForm