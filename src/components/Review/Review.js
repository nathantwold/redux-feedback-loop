import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
                <h1>Review your feedback</h1>
                <div className="results">
                    <h3>Feeling: {this.props.reduxStore.feedbackReducer.feeling}</h3>
                    <h3>Understanding: {this.props.reduxStore.feedbackReducer.understanding}</h3>
                    <h3>Support: {this.props.reduxStore.feedbackReducer.support}</h3>
                    <h3>Comments: {this.props.reduxStore.feedbackReducer.comments}</h3>
                </div>
                <br />
                <Button color="secondary" variant="contained" onClick={this.handleBack}>Back</Button>
                <Button color="primary" variant="contained" onClick={this.handleSubmit}>Submit</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);