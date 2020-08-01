import rentals from './reducers/rentals';
import { createStore,combineReducers , applyMiddleware,compose} from 'redux';
import renderrental from './reducers/renderrental';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
/*const addPromiseToDispatch = (store) =>{
    const {dispatch} = store;

    return action => {
        if(action.then && typeof action.then === 'function'){
            return action.then(dispatch);
        }
        dispatch(action);
    }
}

const addThunkToDispatch = store =>{
    const {dispatch} = store;

    return action => {
        if(typeof action === 'function'){
            return action(dispatch);
        }
        dispatch(action);
    }

}*/
export function initStore (){
    
    const reducers = combineReducers({
        rentals,
        renderrental,
        auth
  
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPPOSE_ || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)));


/*store.dispatch = addPromiseToDispatch(store);
store.dispatch = addThunkToDispatch(store);*/
return store;
}