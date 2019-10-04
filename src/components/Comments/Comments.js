import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { IconButton, Input } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

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
        });
        this.props.history.push('/support');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments
        });
        this.props.history.push('/review');
    }

    render() {
        return (
            <Router>
                <h2>Are there any comments you'd like to leave?</h2>
                <Input type="text" onChange={this.handleChange}></Input>
                <br />
                <IconButton color="secondary" 
                    onClick={this.handleBack}><ChevronLeft /></IconButton>
                <IconButton color="primary" 
                    onClick={this.handleClick}><ChevronRight /></IconButton>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Comments);