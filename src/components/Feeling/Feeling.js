import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Button, Radio, RadioGroup } from '@material-ui/core';

class Feeling extends Component {
    // default value to be sent to redux state
    state = {
        feeling: this.props.reduxStore.feedbackReducer.feeling
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: ''
        });
        this.props.history.push('/');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        if (this.state.feeling === '') {
            alert('Please select an answer')
        } else {
            this.props.dispatch({
                type: 'SET_FEELING',
                payload: this.state.feeling
            });
            this.props.history.push('/understanding');
        }
        this.setState({
            feeling: ""
        })
    }

    render() {
        return (
            <Router>
                <h1>How are you feeling today?</h1>
                <div>
                    <RadioGroup style={{ display: "block" }}>
                        <label>Terrible</label>
                        <Radio value="1" onChange={this.handleChange}
                            color="primary" checked={this.state.feeling === '1'} />
                        <Radio value="2" onChange={this.handleChange}
                            color="primary" checked={this.state.feeling === '2'} />
                        <Radio value="3" onChange={this.handleChange}
                            color="primary" checked={this.state.feeling === '3'} />
                        <Radio value="4" onChange={this.handleChange}
                            color="primary" checked={this.state.feeling === '4'} />
                        <Radio value="5" onChange={this.handleChange}
                            color="primary" checked={this.state.feeling === '5'} />
                        <label>Great!</label>
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

export default connect(mapStateToProps)(Feeling);