import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalsById } from 'actions';
import RentalInfo from './RentalInfo';


class RentalDetail extends React.Component {
    componentDidMount() {
        const rental_id = this.props.match.params.rental_id;
        this.props.dispatch(fetchRentalsById(rental_id));
    }
    render() {
        const { renderrental, isFetching } = this.props;
        debugger
        if (isFetching) { return null; }
        return (
            <section id="rentalDetails">
                <div className="upper-section">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <!-- TODO: Display rental image --> */}
                            <img src={renderrental.image} alt={renderrental.title} />
                        </div>
                        <div className="col-md-6">
                            {/* <!-- TODO: Display rental image --> */}
                            <img src={renderrental.image} alt={renderrental.title} />
                        </div>
                    </div>
                </div>

                <div className="details-section">
                    <div className="row">
                        <div className="col-md-8">
                        <RentalInfo renderrental={renderrental}></RentalInfo>
                    </div>
                    <div className="col-md-4"> BOOKING</div>
                </div>
                </div>
            </section >

        )
    }
}
const mapStatetoProp = (state) => {
    debugger
    return {
        renderrental: state.renderrental.item,
        isFetching: state.renderrental.isFetching,
    }
}
const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStatetoProp)(RentalDetailWithRouter);