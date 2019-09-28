import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    // Run contained functions on page load
    componentDidMount = () => {
        this.getFeedback();
    }

    // GET call to database to send to global redux state
    getFeedback = () => {
        axios.get('/feedback').then((response) => {
            this.props.dispatch({ type: 'SHOW_FEEDBACK', payload: response.data });
        }).catch((error) => {
            console.log('error in GET', error);
        })
    }

    render() {
        let responses = this.props.reduxStore.displayReducer;

        return (
            <div>
                <h1>Admin Page</h1>
                <h3>Feedback history</h3>
                {responses.map(response => <div className="response" key={response.id}>
                    {/* <p>Date: {Date.prototype.toDateString(response.date)}</p> */}
                    <p>Date: {Date.parse(response.date)}</p>
                    <p>Feeling: {response.feeling}, Understanding: {response.understanding},
                    Support: {response.support}, Comments: {response.comments}</p></div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);