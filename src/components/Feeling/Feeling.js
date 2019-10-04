import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Radio, RadioGroup, InputLabel, IconButton, FormLabel, Grid } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

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
    }

    render() {
        return (
            <Router>
                <h2>How are you feeling today?</h2>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <IconButton color="secondary" 
                            onClick={this.handleBack}><ChevronLeft /></IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <RadioGroup>
                            <FormLabel>Terrible</FormLabel>
                            <InputLabel>1
                            <Radio value="1" onChange={this.handleChange}
                                    color="primary" checked={this.state.feeling === '1'} />
                            </InputLabel>
                            <InputLabel>2
                            <Radio value="2" onChange={this.handleChange}
                                    color="primary" checked={this.state.feeling === '2'} />
                            </InputLabel>
                            <InputLabel>3
                            <Radio value="3" onChange={this.handleChange}
                                    color="primary" checked={this.state.feeling === '3'} />
                            </InputLabel>
                            <InputLabel>4
                            <Radio value="4" onChange={this.handleChange}
                                    color="primary" checked={this.state.feeling === '4'} />
                            </InputLabel>
                            <InputLabel>5
                            <Radio value="5" onChange={this.handleChange}
                                    color="primary" checked={this.state.feeling === '5'} />
                            </InputLabel>
                            <FormLabel>Great!</FormLabel>
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton color="primary"
                            onClick={this.handleClick}><ChevronRight /></IconButton>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(Feeling);