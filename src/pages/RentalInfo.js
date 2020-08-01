import React from 'react';
import RentalAssets from './RentalAssets';
import { capitalise } from 'helper/functions';



const RentalInfo = ({renderrental}) =>{
    debugger
    return(<div className="rental">

        <h2 className={`rental-type type-${renderrental.category}`}>{renderrental.shared ? "Shared" : "Whole"}  {renderrental.category}</h2>
        <h1 className="rental-title">{renderrental.title}</h1>
        <h2 className="rental-city">{capitalise(renderrental.city)}</h2>
        <div className="rental-room-info">
            <span><i className="fa fa-building"></i>{renderrental.numOfRooms} bedrooms </span>
            <span><i className="fa fa-user"></i> {renderrental.numOfRooms + 4} guests</span>
            <span><i className="fa fa-bed"></i>  {renderrental.numOfRooms + 2} beds</span>
        </div>

        <p className="rental-description">
            {renderrental.description}
        </p>
        <hr />
        <RentalAssets></RentalAssets>
    </div>)
}
export default RentalInfo;