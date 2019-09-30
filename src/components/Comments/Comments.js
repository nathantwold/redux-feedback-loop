import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Comments extends Component {
    // default value to be sent to redux state
    state = {
        comments: this.props.reduxStore.feedbackReducer.comments
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: ''
        })
        this.props.history.push('/support');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // send the current state to redux state
    handleClick = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        })
        this.props.history.push('/review');
    }

    render() {
        return (
            <Router>
                <h1>Are there any comments you'd like to leave?</h1>
                <input type='text' onChange={this.handleChange}></input>
                <br />
                <Button color="secondary" variant="contained" onClick={this.handleBack}>Back</Button>
                <Button color="primary" variant="contained" onClick={this.handleClick}>Next</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);