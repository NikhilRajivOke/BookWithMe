const rentals = (state =[],action) =>{

    switch(action.type)
    {
        case 'fetch_rentals':
              return action.rentals;
        
        case 'create_rental':
            return [...state,action.rentals];
         
        default :
            return state;
            
    }

}

export default rentals;