import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Comments extends Component {
    // default value to be sent to redux state
    state = {
        comments: ''
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: ''
        })
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
    }

    render() {
        return (
            <Router>
                <h1>Are there any comments you'd like to leave?</h1>
                <input type='text' onChange={this.handleChange}></input>
                <br />
                <Link to='/support'>
                    <button className="backButton" onClick={this.handleBack}>Back</button>
                </Link>
                <Link to='/review'>
                    <button onClick={this.handleClick}>Next</button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);