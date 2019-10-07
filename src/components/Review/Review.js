import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';

class Review extends Component {

    handleBack = () => {
        this.props.history.push('/comments')
    }

    handleSubmit = () => {
        // axios POST to send redux state to database;
        axios.post('/feedback', this.props.reduxStore.feedbackReducer).then((result) => {
            console.log('feedback submitted', result);
        }).catch((error) => {
            console.log(error);
        })
        // clear redux state after POST
        this.props.dispatch({
            type: 'CLEAR_FORM'
        })
        this.props.history.push('/submitted')
    }

    render() {
        return (
            <Router>
                <h2>Review your feedback</h2>
                <h5>
                    Feeling: {this.props.reduxStore.feedbackReducer.feeling}
                </h5>
                <h5>
                    Understanding: {this.props.reduxStore.feedbackReducer.understanding}
                </h5>
                <h5>
                    Support: {this.props.reduxStore.feedbackReducer.support}
                </h5>
                <h5>
                    Comments: {this.props.reduxStore.feedbackReducer.comments}
                </h5>
                <IconButton color="secondary"
                    onClick={this.handleBack}><Cancel /></IconButton>
                <IconButton color="primary"
                    onClick={this.handleSubmit}><Save /></IconButton>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Review);