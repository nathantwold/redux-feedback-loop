import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
                <Link className="link" to='/support'>
                    <Button color="secondary" variant="contained" onClick={this.handleBack}>Back</Button>
                </Link>
                <Link className="link" to='/review'>
                    <Button color="primary" variant="contained" onClick={this.handleClick}>Next</Button>
                </Link>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Comments);