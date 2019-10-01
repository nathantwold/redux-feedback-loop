import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';

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
                <h1>Are there any comments you'd like to leave?</h1>
                <Input type="text" onChange={this.handleChange}></Input>
                <br />
                <Button color="secondary" variant="contained"
                    style={{
                        borderRadius: 5, margin: 5, padding: "12px 36px", fontSize: "16px"
                    }} onClick={this.handleBack}>Back</Button>
                <Button color="primary" variant="contained"
                    style={{
                        borderRadius: 5, margin: 5, padding: "12px 36px", fontSize: "16px"
                    }} onClick={this.handleClick}>Next</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Comments);