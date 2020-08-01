import React from 'react';

const ApiError = ({errors}) =>{
    if(errors && errors.length > 0 ){
    return (
        <div className="alert alert-danger">
            {
               errors.map(err =>
                    <p key={err.title}>
                        {err.detail}
                    </p>
                )
            }
        </div>
    )}
    
    return null;
}

export default ApiError;