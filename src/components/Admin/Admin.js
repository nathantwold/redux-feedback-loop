import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

class Admin extends Component {

    // Run contained functions on page load
    componentDidMount = () => {
        this.getFeedback();
    }

    // DELETE call to database to delete feedback item on confirm
    deleteFeedback = (id) => {
        if (window.confirm('are you sure you want to delete this record?')) {
            axios.delete('/feedback/' + id).then((response) => {
                this.getFeedback();
            }).catch((error) => {
                console.log('error in delete', error);
            })
        }
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
                    <p>{moment(response.date).format("MMMM Do YYYY")}</p>
                    <p>Feeling: {response.feeling}, Understanding: {response.understanding},
                    Support: {response.support}, Comments: {response.comments}</p>
                    <button className="backButton" onClick={() => this.deleteFeedback(response.id)}>Delete</button></div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);