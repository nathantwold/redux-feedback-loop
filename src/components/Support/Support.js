import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Support extends Component {
    // default value to be sent to redux state
    state = {
        support: this.props.reduxStore.feedbackReducer.support
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: ''
        });
        this.props.history.push('/understanding');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        if (this.state.support === '') {
            alert('Please select an answer')
        } else {
            this.props.dispatch({
                type: 'SET_SUPPORT',
                payload: this.state.support
            });
            this.props.history.push('/comments');
        }
    }

    render() {
        return (
            <Router>
                <h1>How well are you being supported?</h1>
                <div>
                    <form>
                        <label><input onChange={this.handleChange} checked={this.state.support === '1'}
                            type='radio' value='1' />1</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '2'}
                            type='radio' value='2' />2</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '3'}
                            type='radio' value='3' />3</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '4'}
                            type='radio' value='4' />4</label>
                        <label><input onChange={this.handleChange} checked={this.state.support === '5'}
                            type='radio' value='5' />5</label>
                    </form>
                </div>
                <Button color="secondary" variant="contained" onClick={this.handleBack}>Back</Button>
                <Button color="primary" variant="contained" onClick={this.handleClick}>Next</Button>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Support);