import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {
    handleSubmit = () => {
        // axios POST to database
        axios.post('/feedback', this.props.reduxStore.feedbackReducer)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        // clear redux state after POST
        this.props.dispatch({
            type: 'CLEAR_FORM'
        })
    }

    render() {
        return (
            <Router>
                <h1>Review your feedback</h1>
                <h3>Feeling: {this.props.reduxStore.feedbackReducer[0]}</h3>
                <h3>Understanding: {this.props.reduxStore.feedbackReducer[1]}</h3>
                <h3>Support: {this.props.reduxStore.feedbackReducer[2]}</h3>
                <h3>Comments: {this.props.reduxStore.feedbackReducer[3]}</h3>
                <Link to='/submit'>
                    <button onClick={this.handleSubmit}>Submit</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);