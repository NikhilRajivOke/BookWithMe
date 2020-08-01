
import axios from 'axios';


export const extractApiError = (err) =>{
    let errors = [{title:"Error" , detail:"Something went wrong"}];

    if(err && err.data && err.data.errors){
        errors = err.data.errors;
    }
    return errors;
}
export const fetchRentals = () => async dispatch => {
    const res =await axios.get('/api/v1/rentals')
    dispatch({
        type: 'fetch_rentals',
        rentals:res.data,
    })
        /*.then(res => {
            const rentals = res.data;
            dispatch({
                type: 'fetch_rentals',
                rentals,
            });

        })*/
}



export const fetchRentalsById = rental_id =>async dispatch => {
    dispatch({type:'fetch_isFetching'});
    
    const res = await axios.get(`/api/v1/rentals/${rental_id}`)
    
    dispatch({
        type: 'fetch_rental_id',
        renderrental:res.data,
    })
}

export const createRental = newRental => {
    return {
        type: 'create_rental',
        rental: newRental,
    }
}

//Auth actions 
export const registerUser = (registerData)=>{
    return axios.post('/api/v1/register',registerData)
    .catch(error=>Promise.reject(extractApiError(error.response || {})));
}

export const loginVerifiedUser = (loginData)=>{
    return axios.post('/api/v1/login',loginData)
    .then(resp=>resp.data)
    .catch(error=>Promise.reject(extractApiError(error.response || {})));
}

export const userAuthenticated = token =>{
    return {
        type:'USER_AUTHENTICATED',
        username:token.username || '',
    }
}