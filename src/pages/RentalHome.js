import React from 'react';
import RenderRental from './renderRental';
import {fetchRentals} from '../actions';
import { connect } from 'react-redux';

class RentalHome extends React.Component {
    componentDidMount(){
        
        this.props.dispatch(fetchRentals());  
    }
    getData(rentals)
    { 
        const newRental = rentals.map((data) => {
            return(
                <div key={data._id} className="col-md-3">
                   <RenderRental rentals={data}></RenderRental>
                   
                </div>
            )
        })
        return newRental;
    }
   
   render() {
       
        const { rentals } = this.props;
        return (
            <div className="card-list">
                
                    <h1 className="page-title">Your Home All Around the World</h1>
                    <div className="row">
                        {this.getData(rentals)}
                    </div>
            </div>
        )
    }
 
}
const mapStateToProps = (state) => {
    return {
    rentals:state.rentals
}
}
export default connect(mapStateToProps)(RentalHome);