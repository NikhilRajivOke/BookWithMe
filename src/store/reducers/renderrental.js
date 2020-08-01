import {combineReducers} from 'redux';

const initRentalReducer = () => {
    const item = (state = {}, action) => {
        
        switch (action.type) {
            case 'fetch_rental_id':
                
                return action.renderrental;
            default:
                return state;

        }

    }

    const isFetching = (state = false ,action) =>{
        
        switch (action.type){
            case 'fetch_isFetching':
                return true;
            case 'fetch_rental_id':
                return false;
            default:
                return state;
        }
        
    }

    return combineReducers({
        item,
        isFetching,
    });
}

const rental = initRentalReducer();
export default rental;