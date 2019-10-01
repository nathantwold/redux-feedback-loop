import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { IconButton, Radio, RadioGroup, InputLabel } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

class Understanding extends Component {
    // default value to be sent to redux state
    state = {
        understanding: this.props.reduxStore.feedbackReducer.understanding
    }

    // clears the current redux state for re-entry
    handleBack = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: ''
        });
        this.props.history.push('/feeling');
    }

    // set the current local state
    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    // send the current state to redux state
    handleClick = () => {
        if (this.state.understanding === '') {
            alert('Please select an answer')
        } else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.understanding
            });
            this.props.history.push('/support');
        }
    }

    render() {
        return (
            <Router>
                <h1>How well are you understanding the content?</h1>
                <div>
                    <RadioGroup style={{ display: "-webkit-inline-box" }}>
                        <InputLabel>1
                            <Radio value="1" onChange={this.handleChange}
                                color="primary" checked={this.state.understanding === '1'} />
                        </InputLabel>
                        <InputLabel>2
                            <Radio value="2" onChange={this.handleChange}
                                color="primary" checked={this.state.understanding === '2'} />
                        </InputLabel>
                        <InputLabel>3
                            <Radio value="3" onChange={this.handleChange}
                                color="primary" checked={this.state.understanding === '3'} />
                        </InputLabel>
                        <InputLabel>4
                            <Radio value="4" onChange={this.handleChange}
                                color="primary" checked={this.state.understanding === '4'} />
                        </InputLabel>
                        <InputLabel>5
                            <Radio value="5" onChange={this.handleChange}
                                color="primary" checked={this.state.understanding === '5'} />
                        </InputLabel>
                    </RadioGroup>
                </div>
                <IconButton color="secondary" 
                    onClick={this.handleBack}><ArrowBack /></IconButton>
                <IconButton color="primary" 
                    onClick={this.handleClick}><ArrowForward /></IconButton>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Understanding);