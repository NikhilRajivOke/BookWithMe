import React from 'react';
import {Link} from 'react-router-dom'
const RenderRental =({rentals}) => {
        return (
            <Link className='rental-link' to={`/rentals/${rentals._id}`}>
            <div className="card bwm-card">
                <img className="card-img-top" src={rentals.image} alt={rentals.title} />
                <div className="card-body">
                    <h6 className={`card-subtitle mb-0  type-${rentals.category}`}>{rentals.shared ? 'Shared ' : 'Whole '}{rentals.category} &#183; {rentals.city}</h6>
                    <h5 className="card-title big-font">{rentals.title}</h5>
                    <p className="card-text">${rentals.dailyPrice} per Night &#183; Free Cancelation</p>
                </div>
            </div>
            </Link>
        )
    
}
export default RenderRental;