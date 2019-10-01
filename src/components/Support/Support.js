import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button, Radio, RadioGroup } from '@material-ui/core';

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
                    <RadioGroup style={{ display: "block" }}>
                        <label>I've been abondoned</label>
                        <Radio value="1" onChange={this.handleChange}
                            color="primary" checked={this.state.support === '1'} />
                        <Radio value="2" onChange={this.handleChange}
                            color="primary" checked={this.state.support === '2'} />
                        <Radio value="3" onChange={this.handleChange}
                            color="primary" checked={this.state.support === '3'} />
                        <Radio value="4" onChange={this.handleChange}
                            color="primary" checked={this.state.support === '4'} />
                        <Radio value="5" onChange={this.handleChange}
                            color="primary" checked={this.state.support === '5'} />
                        <label>I'm fully supported!</label>
                    </RadioGroup>
                </div>
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

export default connect(mapStateToProps)(Support);