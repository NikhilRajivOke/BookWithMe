import React from 'react';
import {useForm} from 'react-hook-form';
import sameAs from 'helper/validators';
import FormError from './FormError';

const RegisterForm = ({onSubmit}) => {
    const {register,handleSubmit,errors,getValues} = useForm();
    const Email_Pattern = /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    ref={register({required:"Username is required"})}
                    name="username"
                    className="form-control"
                    id="username" />
                   <FormError errors={errors} name="username">
                        {(message)=><p>{message}</p>}
                   </FormError>
                {/* <div className="alert alert-danger">
                      <div *ngIf="username.errors.required">
                        Username is required.
                      </div>
                    </div> */}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    ref={register({required:"Email is required !!",pattern:{value:Email_Pattern,message:"Invalid Email Format !!"}})}
                    className="form-control"
                    id="email" />
                    <FormError errors={errors} name="email">
                        {(message)=><p>{message}</p>}
                   </FormError>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    ref={register({required:"Password is Required !",minLength:{value:8,message:"Password must be min of 8 characters !"}})}
                    className="form-control"
                    id="password" />
                    <FormError errors={errors} name="password">
                        {(message)=><p>{message}</p>}
                   </FormError>
                   
            </div>

            <div className="form-group">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                    type="password"
                    name="passwordConfirmation"
                    ref={register({required:"value is required !",minLength:{value:8,message:"Password must be min of 8 characters !"},validate:{sameAs : sameAs('password',getValues)}})}
                    className="form-control"
                    id="passwordConfirmation" />
                    <FormError errors={errors} name="passwordConfirmation">
                        {(message)=><p>{message}</p>}
                   </FormError>
            </div>
            <button
                type="submit"
                className="btn btn-bwm-main">Submit</button>
        </form>
    )
}

export default RegisterForm;
