import {combineReducers} from 'redux';

const initAuth = () => {
    const isAuth = (state = false, action) => {
        
        switch (action.type) {
            case 'USER_AUTHENTICATED':
                return true
            case 'USER_SIGNEDOUT':
                return false
            default:
                return state;

        }

    }

    const username = (state = '' ,action) =>{
        
        switch (action.type){
            case 'USER_AUTHENTICATED':
                return action.username
            case 'USER_SIGNEDOUT':
                return ''
            default:
                return state;
        }
        
    }

    return combineReducers({
        isAuth,
        username,
    });
}

const auth = initAuth();
export default auth;